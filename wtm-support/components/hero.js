import React from "react";
import Image from "next/image";
import wtmLogo from "../public/images/logo3.png";

const Hero = ({ heading, message, button }) => {
	return (
		<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
			<Image
				src={wtmLogo}
				alt="logo"
				width={500}
				height={500}
				style={{ filter: "brightness(50%)" }}
				className="z-0"
			></Image>
			{/* Overlay */}

			<div className="absolute z-[2]">
				<div className="p-5 ml-[-10rem] mt-[-10rem]">
					<h2 className="text-5xl font-bold">{heading}</h2>
					<p className="py-5 text-xl">{message}</p>
					{button ? (
						<button className="px-8 py-2 border">{button}</button>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Hero;
