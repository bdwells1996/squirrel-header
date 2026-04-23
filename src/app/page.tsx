"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
	ssr: false,
});

export default function Home() {
	const [loaded, setLoaded] = useState(false);

	return (
		<>
			{!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
			<Header />
		</>
	);
}
