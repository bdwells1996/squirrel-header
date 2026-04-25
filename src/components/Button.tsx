import clsx from "clsx";
import Icon from "./Icon";
import ButtonArrow from "../../public/icons/button-arrow.svg";

type ButtonProps = {
	variant: "primary" | "secondary";
	children: React.ReactNode;
	type?: "button" | "submit" | "reset";
	tabIndex?: number;
};

export default function Button({
	variant,
	children,
	type = "button",
	tabIndex = 0,
}: ButtonProps) {
	const buttonClassNames = clsx(
		"uppercase text-sm flex items-center cursor-pointer smplus:text-base md:text-lg",
		{
			"primary-button border border-orange text-orange h-[38px] pl-5 pr-4 rounded-full gap-2 md:gap-5":
				variant === "primary",
			"secondary-button text-black px-6 h-[38px] relative flex":
				variant === "secondary",
		},
	);

	return (
		<button type={type} tabIndex={tabIndex} className={buttonClassNames}>
			{variant === "primary" ? (
				<span className="flex items-center gap-2 md:gap-5">
					{children}
					<Icon
						svg={ButtonArrow}
						className="w-4 h-3 lg:w-[15px] lg:h-[10px]"
						strokeWidth={1.5}
					/>
				</span>
			) : (
				children
			)}
		</button>
	);
}
