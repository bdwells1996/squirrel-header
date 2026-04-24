"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/CustomEase";
import SquigglePath from "./SquigglePath";

gsap.registerPlugin(DrawSVGPlugin, CustomEase);

CustomEase.create("squiggle-ease", "0.79,0.14,0.15,0.86");

const MIN_DURATION_MS = 20000;
const DRAW_DURATION = 1.6;

export default function LoadingScreen({
	onComplete,
}: {
	onComplete: () => void;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const squiggleRef = useRef<HTMLDivElement>(null);
	const svgRef = useRef<SVGSVGElement>(null);
	const mobileSvgRef = useRef<SVGSVGElement>(null);
	const startTime = useRef(Date.now());
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const isMobile = window.innerWidth < 1024;
		const activeSvg = isMobile ? mobileSvgRef.current : svgRef.current;
		const path = activeSvg?.querySelector("path");
		if (!path) return;

		gsap.set(path, { drawSVG: "0%" });

		gsap.to(path, {
			drawSVG: "100%",
			duration: DRAW_DURATION,
			ease: "squiggle-ease",
			onComplete: () => {
				const remaining = Math.max(
					0,
					MIN_DURATION_MS - (Date.now() - startTime.current),
				);
				setTimeout(() => {
					gsap.set(containerRef.current, {
						borderBottomLeftRadius: "2rem",
						borderBottomRightRadius: "2rem",
					});
					gsap.to(squiggleRef.current, {
						y: window.innerHeight,
						duration: 1,
						ease: "0.55,0.55,0.2,1",
					});
					gsap.to(containerRef.current, {
						yPercent: -100,
						duration: 1,
						ease: "0.55,0.55,0.2,1",
						onComplete: () => {
							setVisible(false);
							onComplete();
						},
					});
				}, remaining);
			},
		});
	}, [onComplete]);

	if (!visible) return null;

	return (
		<div
			ref={containerRef}
			className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-orange"
		>
			<div ref={squiggleRef} className="w-full h-full relative">
				<h1 className="font-fatfrank text-4xl absolute left-1/2 top-[calc(50%-40px)] -translate-x-1/2 -translate-y-1/2">
					Loading...
				</h1>
				<SquigglePath
					svgRef={svgRef}
					color="var(--color-peach)"
					className="absolute left-0 top-[calc(30vw_-_156px)] z-[-1] hidden lg:block xl:top-[calc(17vw_-_156px)] 2xl:top-[calc(8vw_-_156px)]"
				/>
				<SquigglePath
					svgRef={mobileSvgRef}
					variant="mobile"
					color="var(--color-peach)"
					className="absolute left-0 -top-[calc(17vw_-_77px)] block z-[-1] smplus:-top-[calc(25vw_-_77px)] md:-top-[calc(39vw_-_77px)] lg:hidden"
				/>
			</div>
		</div>
	);
}
