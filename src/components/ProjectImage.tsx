import Image from "next/image";

interface ProjectImageProps {
	src?: string;
	alt: string;
	title: string;
	sizes: string;
	eager?: boolean;
	className?: string;
}

export default function ProjectImage({ src, alt, title, sizes, eager, className }: Readonly<ProjectImageProps>) {
	return (
		<div
			className={`relative aspect-16/10 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 ${className ?? ""}`}
		>
			{src ? (
				<>
					<Image
						src={src}
						alt={alt}
						fill
						loading={eager ? "eager" : "lazy"}
						sizes={sizes}
						className="object-cover grayscale contrast-110 transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
					/>
					<div
						aria-hidden="true"
						className="absolute inset-0 bg-shark/50 transition-colors duration-500 group-hover:bg-shark/25 motion-reduce:transition-none"
					/>
				</>
			) : (
				<div
					aria-hidden="true"
					className="flex h-full items-center justify-center p-6 text-center text-xl font-semibold text-neutral-700"
				>
					{title}
				</div>
			)}
		</div>
	);
}
