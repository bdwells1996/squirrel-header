import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./components/MobileMenu";
import { navLinks } from "./nav-links";

export default function Nav() {
	return (
		<nav className="flex items-center justify-between p-2 pr-4 relative overflow-hidden">
			<Image
				src="/shapes/opaque-page-top.svg"
				alt=""
				width={1440}
				height={400}
				className="absolute -top-4 left-10 z-0 w-full h-auto pointer-events-none"
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
							"bg-orange-500 text-white px-6 py-2 rounded-full font-fatfrank":
								link.style === "Button",
							"font-manrope font-semibold text-neutral-900":
								link.style !== "Button",
						})}
					>
						{link.label}
					</Link>
				))}
			</div>
		</nav>
	);
}
