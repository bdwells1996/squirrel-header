"use client";

import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";
import { navLinks } from "../nav-links";

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const panelRef = useRef<HTMLDivElement>(null);

	const open = () => {
		setIsOpen(true);
		gsap.fromTo(
			panelRef.current,
			{ yPercent: -100, autoAlpha: 1 },
			{ yPercent: 0, duration: 0.6, ease: "0.55,0.55,0.2,1" },
		);
	};

	const close = () => {
		setIsOpen(false);
		gsap.to(panelRef.current, {
			yPercent: -100,
			duration: 0.6,
			ease: "0.55,0.55,0.2,1",
		});
	};

	const toggle = () => (isOpen ? close() : open());

	return (
		<>
			<button
				type="button"
				onClick={toggle}
				aria-label={isOpen ? "Close menu" : "Open menu"}
				className="md:hidden bg-orange rounded-full flex items-center justify-center shrink-0 w-9 h-9"
			>
				<svg
					width="14"
					height="11"
					viewBox="0 0 14 11"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M0.5 0.5H12.7873"
						stroke="#FFFBF3"
						strokeLinecap="round"
						style={{
							transformOrigin: "6.6437px 0.5px",
							transition: "transform 300ms ease",
							transform: isOpen
								? "translateY(4.666px) rotate(45deg)"
								: "translateY(0) rotate(0deg)",
						}}
					/>
					<path
						d="M0.5 5.16602H12.7873"
						stroke="#FFFBF3"
						strokeLinecap="round"
						style={{
							transition: "opacity 200ms ease",
							opacity: isOpen ? 0 : 1,
						}}
					/>
					<path
						d="M0.5 9.83203H12.7873"
						stroke="#FFFBF3"
						strokeLinecap="round"
						style={{
							transformOrigin: "6.6437px 9.83203px",
							transition: "transform 300ms ease",
							transform: isOpen
								? "translateY(-4.666px) rotate(-45deg)"
								: "translateY(0) rotate(0deg)",
						}}
					/>
				</svg>
			</button>

			<div
				ref={panelRef}
				className="md:hidden fixed top-0 left-0 w-full bg-orange z-40 flex flex-col pt-20 pb-8 px-6"
				style={{ transform: "translateY(-100%)" }}
			>
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						onClick={close}
						className={
							link.style === "Button"
								? "mt-6 self-start bg-white text-orange px-6 py-2 rounded-full font-fatfrank"
								: "py-3 border-b border-orange-400 font-manrope text-white text-lg"
						}
					>
						{link.label}
					</Link>
				))}
			</div>
		</>
	);
};
