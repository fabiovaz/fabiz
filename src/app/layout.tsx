import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "@/styles/globals.css"


const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "600"],
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: site.title,
		template: `%s | ${site.name}`,
	},
	description: site.description,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: site.title,
		description: site.description,
		url: "/",
		siteName: site.name,
		locale: "pt_BR",
		type: "website",
		images: [site.image],
	},
	twitter: {
		card: "summary_large_image",
		title: site.title,
		description: site.description,
		images: [site.image.url],
	},
};

export const viewport: Viewport = {
	themeColor: "#1f1f21",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${inter.className} text-neutral-400 bg-shark`}>
				<a
					href="#conteudo"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-meadow focus:px-5 focus:py-2 focus:text-shark"
				>
					Pular para o conteúdo
				</a>
				<Header className="container max-w-3xl px-4 md:px-0 py-6" />
				{children}
				<Footer className="container max-w-3xl px-4 md:px-0 py-16" />
			</body>
			<GoogleAnalytics gaId="G-SHG6DD2QW2" />
		</html>
	);
}
