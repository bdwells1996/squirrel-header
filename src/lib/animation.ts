import type React from "react";

type AnimConfig = {
	animation: string;
	hidden: React.CSSProperties;
	loaded?: Omit<React.CSSProperties, "animation">;
};

export function animStyle(
	config: AnimConfig,
): (isLoaded: boolean, delayMs: number) => React.CSSProperties {
	return (isLoaded, delayMs) =>
		isLoaded
			? { ...config.loaded, animation: config.animation.replace("__delay__", `${delayMs}`) }
			: config.hidden;
}
