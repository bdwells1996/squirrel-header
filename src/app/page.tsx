"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import { useLoading } from "@/context/LoadingContext";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
	ssr: false,
});

export default function Home() {
	const { isLoaded, setIsLoaded } = useLoading();

	return (
		<>
			{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
			<Header />
		</>
	);
}
