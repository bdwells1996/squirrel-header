import { RefObject } from "react";
import clsx from "clsx";

type SquigglePathProps = {
	color?: string;
	svgRef?: RefObject<SVGSVGElement | null>;
	className?: string;
	variant?: "desktop" | "mobile";
};

export default function SquigglePath({
	color = "#FF8702",
	svgRef,
	className,
	variant = "desktop",
}: SquigglePathProps) {
	if (variant === "mobile") {
		return (
			<svg
				ref={svgRef}
				className={clsx("pathy w-full", className)}
				viewBox="0 0 360 503"
				aria-label="Squiggle path"
				aria-hidden="true"
			>
				<path
					className="cls-1 pathy"
					fill="none"
					stroke={color}
					strokeWidth="50"
					d="M-154.882 477.167C-21.4669 462.546 -5.01988 324.564 102.878 315.755C154.27 311.559 205.189 370.041 297.449 236.837C389.709 103.634 497.626 214.068 556.968 112.561C602.116 35.3347 560.503 -82.7807 618.887 -173.102"
				/>
			</svg>
		);
	}

	return (
		<svg
			ref={svgRef}
			className={clsx("pathy w-full", className)}
			viewBox="0 0 1920 582"
			aria-label="Squiggle path"
			aria-hidden="true"
		>
			<defs></defs>
			<path
				className="cls-1 pathy"
				fill="none"
				fillRule="evenodd"
				stroke={color}
				strokeWidth="150px"
				strokeMiterlimit={10}
				d="m0,103c185,0,237,391,639,391,436,0,643-412,993-412,197,0,349,122,349,122"
			/>
		</svg>
	);
}
