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
			"border border-orange-500 text-orange h-[38px] pl-5  pr-4 rounded-full gap-2 md:gap-5":
				variant === "primary",
			"text-black underline underline-offset-[6px]": variant === "secondary",
		},
	);

	return (
		<button type={type} tabIndex={tabIndex} className={buttonClassNames}>
			{children}
			{variant === "primary" && (
				<Icon svg={ButtonArrow} width={14} height={10} strokeWidth={1.5} />
			)}
		</button>
	);
}
