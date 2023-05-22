import React, { useState } from "react";
// import { SliderData } from "./SliderData";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		console.log("Returning Null");
		return null;
	}

	return (
		<div className="max-w-[1240px] mx-auto">
			<h1 className="text-2xl font-bold text-center p-4"></h1>
			<div className="relative flex justify-center p-4">
				{slides.map((slide, index) => {
					return (
						<div
							key={index}
							className={
								index === current
									? "opacity-[1] ease-in duration-1000"
									: "opacity-0"
							}
						>
							<FaArrowCircleLeft
								className="absolute top-[50%] left-[30px] cursor-pointer z-[10]"
								size={50}
								onClick={prevSlide}
							/>
							{index === current && (
								<Image
									src={slide.image}
									alt="demo image"
									width={"267"}
									height={"543"}
								/>
							)}
							{/* {index === current && (
								<Image
									src={slide.image}
									alt="demo image"
									width={"400"}
									height={"815"}
								/>
							)} */}
							<FaArrowCircleRight
								className="absolute top-[50%] right-[30px] cursor-pointer z-[2]"
								size={50}
								onClick={nextSlide}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Slider;
