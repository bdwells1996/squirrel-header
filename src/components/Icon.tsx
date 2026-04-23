import type { SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

type IconProps = SVGProps<SVGSVGElement> & {
	svg: IconComponent;
};

export default function Icon({
	svg: Svg,
	className,
	width = "100%",
	height = "100%",
	...props
}: IconProps) {
	return <Svg className={className} width={width} height={height} {...props} />;
}
