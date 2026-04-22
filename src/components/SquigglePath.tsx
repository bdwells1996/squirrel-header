import { RefObject } from "react";
import clsx from "clsx";

type SquigglePathProps = {
	color?: string;
	svgRef?: RefObject<SVGSVGElement | null>;
	className?: string;
};

export default function SquigglePath({
	color = "#FF8702",
	svgRef,
	className,
}: SquigglePathProps) {
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
