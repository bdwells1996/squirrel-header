"use client";

import Link from "next/link";
import SquigglePath from "./SquigglePath";
import Image from "next/image";
import Button from "./Button";
import Icon from "./Icon";
import ButtonArrow from "../../public/icons/button-arrow.svg";
import { useLoading } from "@/context/LoadingContext";
import {
	slideUpStyle,
	containerRevealStyle,
	imageSlideUpStyle,
	buttonRevealStyle,
	iconSlideDownStyle,
	fadeUpStyle,
	arrowBounceStyle,
} from "@/animations/headerAnims";

type HeaderProps = {
	variant?: "default" | "peach";
};

const variantColors: Record<NonNullable<HeaderProps["variant"]>, string> = {
	default: "#FF8702",
	peach: "#FFC081",
};

export default function Header({ variant = "default" }: HeaderProps) {
	const { isLoaded } = useLoading();

	return (
		<header className="w-full flex justify-center relative overflow-hidden">
			<SquigglePath
				color={variantColors[variant]}
				className="absolute left-0 top-[30vw] z-[-1] hidden lg:block xl:top-[17vw] 2xl:top-[8vw]"
			/>
			<SquigglePath
				variant="mobile"
				color={variantColors[variant]}
				className="absolute left-0 -top-[17vw] block z-[-1] smplus:-top-[25vw] md:-top-[39vw] lg:hidden"
			/>
			<div className="flex flex-col items-center w-full px-4">
				<div className="overflow-hidden mb-11 mt-7">
					<p
						className="max-w-41.25 text-xs font-manrope font-semibold text-orange smplus:text-sm smplus:max-w-52 lg:max-w-[302px]"
						style={slideUpStyle(isLoaded, 300)}
					>
						Lorem ipsum dolor sit amet consectetur. vestibulum fringilla est in
						mauris auctor,
					</p>
				</div>
				<div className="flex flex-col w-full lg:flex-row lg:justify-center lg:gap-10 lg:max-w-[1300px]">
					<h1 className="text-[60px] font-fatfrank uppercase flex flex-col self-start z-2 ml-[10px] smplus:text-[95px] md:text-[105px] lg:text-[152px] lg:self-center lg:text-right">
						<div className="flex items-baseline gap-3 ml-[14px] lg:contents">
							<div className="overflow-hidden leading-[100%] lg:leading-[80%]">
								<p style={slideUpStyle(isLoaded, 150)}>Tell</p>
							</div>
							<div className="overflow-hidden leading-[100%] lg:leading-[80%] lg:text-[266px] lg:translate-x-38 lg:text-outline">
								<p style={slideUpStyle(isLoaded, 250)}>Big</p>
							</div>
						</div>
						<div className="overflow-hidden leading-[100%] lg:leading-[80%]">
							<p style={slideUpStyle(isLoaded, 350)}>Tails</p>
						</div>
					</h1>
					<div
						className="w-[61%] -mt-19 self-end smplus:-mt-30 md:-mt-34 lg:mt-0 lg:max-w-[857px] lg:w-[85%] bg-black overflow-hidden rounded-2xl"
						style={containerRevealStyle(isLoaded, 0)}
					>
						<Image
							src="/images/header/god-of-war.jpg"
							alt="God of War"
							width={765}
							height={430}
							className="w-full aspect-[197/179] lg:aspect-video"
							style={imageSlideUpStyle(isLoaded, 0)}
						/>
					</div>
				</div>
				<div className="flex flex-wrap items-center font-fatfrank uppercase w-full mt-12 ml-2 lg:justify-end lg:max-w-[1300px] lg:gap-x-20 lg:-translate-x-7">
					<span
						className="flex flex-wrap gap-x-6 lg:gap-x-16"
						style={fadeUpStyle(isLoaded, 300)}
					>
						<Link href="/">
							<Button variant="primary">Learn more</Button>
						</Link>
						<Link href="/">
							<Button variant="secondary">Contact us</Button>
						</Link>
					</span>
					<div className="basis-full flex justify-center mt-[48px] mb-[54px] lg:mt-3 lg:justify-start">
						<button
							type="button"
							className="w-[66px] h-[66px] rounded-full bg-honey flex items-center justify-center cursor-pointer overflow-hidden lg:w-[108px] lg:h-[108px] lg:translate-x-84"
							style={buttonRevealStyle(isLoaded, 300)}
						>
							<span style={iconSlideDownStyle(isLoaded, 640)}>
								<span style={arrowBounceStyle(isLoaded)} className="block">
									<Icon
										svg={ButtonArrow}
										className="rotate-90 text-white w-6 h-5 lg:w-[34px] lg:h-[28px]"
									/>
								</span>
							</span>
						</button>
					</div>
				</div>
			</div>
			<Image
				src="/shapes/mobile-header-opaque.svg"
				alt=""
				width={240}
				height={190}
				className="absolute -bottom-2 left-0 lg:w-150 lg:rotate-y-180 lg:right-0 lg:left-[auto] lg:-bottom-70"
			/>
		</header>
	);
}
