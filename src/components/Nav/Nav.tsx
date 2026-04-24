"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./components/MobileMenu";
import { navLinks } from "./nav-links";
import { useLoading } from "@/context/LoadingContext";

export default function Nav() {
	const { isLoaded } = useLoading();

	return (
		<nav
			className="flex items-center justify-between p-2 pr-4 relative overflow-hidden lg:p-5 lg:pr-[46px]"
			style={
				isLoaded
					? {
							animation:
								"slide-down 0.3s cubic-bezier(0.65,0.05,0.36,1) 300ms both",
						}
					: { opacity: 0 }
			}
		>
			<Image
				src="/shapes/opaque-page-top.svg"
				alt=""
				width={1440}
				height={400}
				className="absolute -top-4 left-10 z-0 w-full h-auto pointer-events-none md:-top-12 lg:-top-16 xl:-top-20 2xl:-top-30"
			/>
			<Link href="/">
				<Image
					src="/logo.svg"
					alt="Blind Squirrel Games Logo"
					width={188}
					height={96}
					className="w-[120px] h-auto md:w-[188px]"
				/>
			</Link>
			<MobileMenu />
			<div className="hidden md:flex md:items-center md:gap-10">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={clsx("uppercase", {
							"bg-orange text-white px-6 py-2 rounded-full font-fatfrank":
								link.style === "Button",
							"font-manrope font-semibold text-black": link.style !== "Button",
						})}
					>
						{link.label}
					</Link>
				))}
			</div>
		</nav>
	);
}
