export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full slide-in">
			<img
				src="/lemon-studios.svg"
				width={128}
				style={{
					mixBlendMode: "luminosity",
					filter: "contrast(0.6) brightness(0.3)",
				}}
			/>
			<p className="opacity-30 font-medium text-2xl">Lemon Studios</p>
		</div>
	);
}
