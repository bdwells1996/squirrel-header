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
		"uppercase text-sm flex items-center smplus:text-base md:text-lg",
		{
			"border border-orange-500 text-orange px-4 py-2 rounded-full gap-2":
				variant === "primary",
			"text-black underline underline-offset-[6px]": variant === "secondary",
		},
	);

	return (
		<button type={type} tabIndex={tabIndex} className={buttonClassNames}>
			{children}
			{variant === "primary" && (
				<Icon svg={ButtonArrow} width={13} height={9} strokeWidth={1.5} />
			)}
		</button>
	);
}
