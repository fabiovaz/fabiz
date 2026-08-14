import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css"


const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "600"],
});

const title = "Fabiz.";
const description =
	"Impulsionando o seu sucesso digital com soluções criativas e estratégicas. Transforme ideias em resultados surpreendentes. Descubra o poder da nossa abordagem!";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.fabiz.com.br"),
	title,
	description,
	openGraph: {
		title,
		description,
		url: "/",
		siteName: title,
		locale: "pt_BR",
		type: "website",
		images: [{ url: "/fabiz.png", width: 1200, height: 630 }],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/fabiz.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={`${inter.className} text-neutral-400 bg-shark`}>
				<Header className="container max-w-3xl px-4 md:px-0 py-6" />
				{children}
				<Footer className="container max-w-3xl px-4 md:px-0 py-16" />
			</body>
			<GoogleAnalytics gaId="G-SHG6DD2QW2" />
		</html>
	);
}
