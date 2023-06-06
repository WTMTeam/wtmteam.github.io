import React, { useState } from "react";
// import { SliderData } from "./SliderData";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const [next, setNext] = useState(1);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 2 ? 0 : current + 2);
		setNext(next === length - 1 ? 1 : next + 2);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 2 : current - 2);
		setNext(next === 1 ? length - 1 : next - 2);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		console.log("Returning Null");
		return null;
	}

	return (
		<div className="max-w-[1240px] mx-auto">
			<h1 className="text-2xl font-bold text-center p-4"></h1>
			<div className="relative justify-center p-4 grid sm:flex items-center">
				{slides.map((slide, index) => {
					return (
						<div
							key={index}
							className={
								index === current
									? "opacity-[1] ease-in duration-1000 absolute top-10 justify-center"
									: "opacity-0"
							}
						>
							<FaArrowCircleLeft
								className="absolute top-[-12%] left-[25%] sm:top-[50%] sm:left-[-30px] cursor-pointer z-[2] "
								size={50}
								onClick={prevSlide}
							/>

							<div className="flex justify-center">
								<div className="flex items-center sm:mx-4 md:ml-10">
									{index === current && (
										<Image
											src={slide.image}
											alt="demo image"
											width={267}
											height={543}
											className="block"
										/>
									)}
								</div>
								<div className="flex items-center sm:mx-4 md:mr-10">
									{index + 1 === next && (
										<Image
											src={slides[index + 1].image}
											alt="demo image"
											width={267}
											height={543}
											className="block"
										/>
									)}
								</div>
							</div>

							<p className="text-center mt-4 max-w-[534px] mx-auto">
								{slide.description}
							</p>
							{/* {index === current && (
								<Image
									src={slide.image}
									alt="demo image"
									width={"400"}
									height={"815"}
								/>
							)} */}
							<FaArrowCircleRight
								className="absolute top-[-12%] right-[25%] sm:top-[50%] sm:right-[-30px] cursor-pointer z-[2]"
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
