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
				className="absolute left-0 top-[30vw] z-[-1] hidden lg:block xl:top-[17vw] 2xl:top-[8vw]"
			/>
			<SquigglePath
				variant="mobile"
				color={variantColors[variant]}
				className="absolute left-0 -top-[17vw] block z-[-1] smplus:-top-[25vw] md:-top-[39vw] lg:hidden"
			/>
			<div className="flex flex-col items-center w-full px-4">
				<span className="max-w-41.25 text-xs font-manrope mb-11 mt-7 smplus:text-sm smplus:max-w-52 lg:max-w-[302px]">
					<p className="text-orange font-semibold flex justify-start">
						Lorem ipsum dolor sit amet
					</p>
					<p className="text-orange font-semibold flex justify-start">
						consectetur. vestibulum fringilla est in mauris auctor,
					</p>
				</span>
				<div className="flex flex-col w-full lg:flex-row lg:justify-center lg:gap-10 lg:max-w-[1300px]">
					<h1 className="text-[60px] font-fatfrank uppercase flex flex-col leading-[102%] self-start z-2 ml-[10px] smplus:text-[95px] md:text-[105px] lg:text-[152px] lg:self-center lg:text-right">
						<span className="flex items-baseline gap-3 ml-[14px] lg:contents">
							<span>Tell </span>
							<span className=" lg:text-[266px] lg:translate-x-38 lg:text-outline">
								Big
							</span>
						</span>
						<span> Tails</span>
					</h1>
					<Image
						src="/images/header/god-of-war.jpg"
						alt="God of War"
						width={765}
						height={430}
						className="w-[61%] rounded-lg overflow-hidden -mt-19 self-end aspect-[197/179] smplus:-mt-30 md:-mt-34 lg:aspect-video lg:max-w-[857px] lg:mt-0 lg:rounded-2xl lg:w-[85%]"
					/>
				</div>
				<div className="flex flex-wrap gap-x-6 items-center font-fatfrank uppercase w-full mt-12 ml-2 lg:justify-end lg:max-w-[1300px] lg:gap-x-20 lg:-translate-x-7">
					<Link href="/">
						<Button variant="primary">Learn more</Button>
					</Link>
					<Link href="/">
						<Button variant="secondary">Contact us</Button>
					</Link>
					<div className="basis-full flex justify-center mt-[48px] mb-[54px] lg:mt-3 lg:justify-start">
						<button
							type="button"
							className="w-[66px] h-[66px] rounded-full bg-honey flex items-center justify-center cursor-pointer lg:w-[108px] lg:h-[108px] lg:translate-x-84"
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
