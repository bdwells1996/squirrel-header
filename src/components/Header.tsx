import Link from "next/link";
import SquigglePath from "./SquigglePath";
import Image from "next/image";
import Button from "./Button";
import Icon from "./Icon";
import ButtonArrow from "../../public/icons/button-arrow.svg";

type HeaderProps = {
	variant?: "default" | "peach";
};

const variantColors: Record<NonNullable<HeaderProps["variant"]>, string> = {
	default: "#FF8702",
	peach: "#FFC081",
};

export default function Header({ variant = "default" }: HeaderProps) {
	return (
		<header className="w-full flex justify-center relative overflow-hidden">
			<SquigglePath
				color={variantColors[variant]}
				className="absolute left-0 top-1/2 z-[-1] -translate-y-1/2 hidden md:block"
			/>
			<SquigglePath
				variant="mobile"
				color={variantColors[variant]}
				className="absolute left-0 -top-[10vh] block z-[-1] smplus:-top-[26vh] md:hidden"
			/>
			<div className="flex flex-col items-center w-full px-4 md:flex-row">
				<span className="max-w-41.25 text-xs font-manrope mb-11 mt-7 smplus:text-sm smplus:max-w-52">
					<p className="text-orange font-semibold flex justify-start">
						Lorem ipsum dolor sit amet
					</p>
					<p className="text-orange font-semibold flex justify-start">
						consectetur. vestibulum fringilla est in mauris auctor,
					</p>
				</span>
				<h1 className="text-[60px] smplus:text-[95px] font-fatfrank uppercase flex flex-col leading-none self-start z-2 ml-[10px]">
					<span className="flex items-baseline gap-3 ml-[14px] md:contents">
						<span>Tell </span>
						<span className=" md:text-[13rem]">Big</span>
					</span>
					<span> Tails</span>
				</h1>
				<Image
					src="/images/header/god-of-war.jpg"
					alt="God of War"
					width={765}
					height={430}
					className="w-[61%] rounded-lg overflow-hidden -mt-19 self-end aspect-[197/179] smplus:-mt-30 md:aspect-video md:w-[765px]"
				/>
				<div className="flex flex-wrap gap-x-6 items-center font-fatfrank uppercase w-full mt-12 ml-2">
					<Link href="/">
						<Button variant="primary">Learn more</Button>
					</Link>
					<Link href="/">
						<Button variant="secondary">Contact us</Button>
					</Link>
					<div className="basis-full flex justify-center mt-[48px] mb-[54px]">
						<button
							type="button"
							className="w-[66px] h-[66px] rounded-full bg-honey flex items-center justify-center"
						>
							<Icon
								svg={ButtonArrow}
								className="rotate-90 text-white"
								width={24}
								height={20}
							/>
						</button>
					</div>
				</div>
			</div>
			<Image
				src="/shapes/mobile-header-opaque.svg"
				alt=""
				width={240}
				height={190}
				className="absolute -bottom-2 left-0"
			/>
		</header>
	);
}
