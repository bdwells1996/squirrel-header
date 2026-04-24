"use client";

import { createContext, useContext, useState } from "react";

type LoadingContextType = {
	isLoaded: boolean;
	setIsLoaded: (value: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
	isLoaded: false,
	setIsLoaded: () => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<LoadingContext.Provider value={{ isLoaded, setIsLoaded }}>
			{children}
		</LoadingContext.Provider>
	);
}

export function useLoading() {
	return useContext(LoadingContext);
}
