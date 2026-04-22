import SquigglePath from "./SquigglePath";

type HeaderProps = {
	variant?: "default" | "peach";
};

const variantColors: Record<NonNullable<HeaderProps["variant"]>, string> = {
	default: "#FF8702",
	peach: "#FFC081",
};

export default function Header({ variant = "default" }: HeaderProps) {
	return (
		<header>
			<SquigglePath color={variantColors[variant]} />
		</header>
	);
}
