import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import { LoadingProvider } from "@/context/LoadingContext";

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	title: "Blind Squirrel Games",
	description: "Blind Squirrel Games",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${manrope.variable} antialiased w-full`}>
			<head>
				<link rel="stylesheet" href="https://use.typekit.net/eow7mmi.css" />
			</head>
			<body>
				<LoadingProvider>
					<Nav />
					{children}
				</LoadingProvider>
			</body>
		</html>
	);
}
