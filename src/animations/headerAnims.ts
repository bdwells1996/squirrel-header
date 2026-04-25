import type React from "react";
import { animStyle } from "@/lib/animation";

const EASING = "cubic-bezier(0.65,0.05,0.36,1)";
const SNAP = "cubic-bezier(0.79,0.14,0.15,0.86)";

export const slideUpStyle = animStyle({
	animation: `slide-up 0.4s ${EASING} __delay__ms both`,
	hidden: { transform: "translateY(100%)" },
});

export const containerRevealStyle = animStyle({
	animation: `container-reveal 0.8s ${EASING} __delay__ms both`,
	hidden: { clipPath: "inset(100% 1% 0 1%)", transform: "translateY(-20px)" },
});

export const imageSlideUpStyle = animStyle({
	animation: `image-slide-up 0.7s ${SNAP} __delay__ms both`,
	hidden: { transform: "translateY(100%)" },
});

export const buttonRevealStyle = animStyle({
	animation: `button-reveal 0.4s ${EASING} __delay__ms both`,
	hidden: { transform: "scale(0)", transformOrigin: "top center" },
	loaded: { transformOrigin: "top center" },
});

export const iconSlideDownStyle = animStyle({
	animation: `icon-slide-down 0.35s ${SNAP} __delay__ms both`,
	hidden: { transform: "translateY(-150%)" },
});

export const arrowBounceStyle = (isLoaded: boolean): React.CSSProperties =>
	isLoaded
		? { animation: "arrow-bounce 3.5s ease-in-out 1.8s infinite" }
		: {};

export const fadeUpStyle = animStyle({
	animation: `fade-up 0.4s ${EASING} __delay__ms both`,
	hidden: { opacity: 0 },
});
