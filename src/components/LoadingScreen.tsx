"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/CustomEase";
import SquigglePath from "./SquigglePath";

gsap.registerPlugin(DrawSVGPlugin, CustomEase);

CustomEase.create("squiggle-ease", "0.79,0.14,0.15,0.86");

const DRAW_DURATION = 1.6;
// Time before squiggle starts (counter goes 0 → 30 over this period)
const PRE_DRAW_DURATION = 1.0;

export default function LoadingScreen({
	onComplete,
}: {
	onComplete: () => void;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const squiggleRef = useRef<HTMLDivElement>(null);
	const svgRef = useRef<SVGSVGElement>(null);
	const mobileSvgRef = useRef<SVGSVGElement>(null);
	const [visible, setVisible] = useState(true);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const isMobile = window.innerWidth < 1024;
		const activeSvg = isMobile ? mobileSvgRef.current : svgRef.current;
		const path = activeSvg?.querySelector("path");
		if (!path) return;

		gsap.set(path, { drawSVG: "0%" });

		const counterObj = { value: 0 };

		// Phase 1: count 0 → 30, then kick off squiggle + count to 100
		gsap.to(counterObj, {
			value: 30,
			duration: PRE_DRAW_DURATION,
			ease: "power1.in",
			onUpdate: () => setCounter(Math.round(counterObj.value)),
			onComplete: () => {
				gsap.to(path, {
					drawSVG: "100%",
					duration: DRAW_DURATION,
					ease: "squiggle-ease",
					onComplete: () => {
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
					},
				});

				gsap.to(counterObj, {
					value: 100,
					duration: DRAW_DURATION,
					ease: "power1.inOut",
					onUpdate: () => setCounter(Math.round(counterObj.value)),
				});
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
				<h1 className="font-fatfrank text-white text-4xl absolute left-1/2 top-[calc(200px)] -translate-x-1/2 smplus:top-[calc(300px)] md:top-[calc(400px)] lg:top-[calc(450px)]">
					{counter}
					<span className="font-manrope font-bold">%</span>
				</h1>
				<SquigglePath
					svgRef={svgRef}
					color="var(--color-peach)"
					className="absolute left-0 top-[calc(30vw+136px)] z-[-1] hidden lg:block xl:top-[calc(17vw+136px)] 2xl:top-[calc(8vw+136px)]"
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
