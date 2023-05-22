import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState("transparent");
	const [textColor, setTextColor] = useState("white");

	const handleNav = () => {
		setNav(!nav);
	};

	// useEffect(() => {
	// 	const changeColor = () => {
	// 		if (window.scrollY >= 90) {
	// 			setColor("#ffffff");
	// 			setTextColor("#000000");
	// 		} else {
	// 			setColor("transparent");
	// 			setTextColor("#ffffff");
	// 		}
	// 	};
	// 	window.addEventListener("scroll", changeColor);
	// }, []);

	return (
		<div
			style={{ backgroundColor: `${color}` }}
			className="fixed left-0 top-0 w-full z-10 ease-in duration-300 backdrop-blur"
		>
			<div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
				<Link href="/">
					<h1
						style={{ color: `${textColor}` }}
						className="font-bold text-4xl"
					>
						Where's That Movie
					</h1>
				</Link>
				<ul
					style={{ color: `${textColor}` }}
					className="hidden sm:flex"
				>
					<li className="p-4">
						<Link href={"/"}>Home</Link>
					</li>
					<li className="p-4">
						<Link href={"/features"}>Features</Link>
					</li>
					<li className="p-4">
						<Link href={"/testing"}>Testing</Link>
					</li>
					<li className="p-4">
						<Link href={"/support"}>Support</Link>
					</li>
					<li className="p-4">
						<Link href={"/policy"}>Privacy Policy</Link>
					</li>
				</ul>

				{/* Mobile Buttons */}
				<div className="block sm:hidden z-10">
					{nav ? (
						<AiOutlineClose
							onClick={handleNav}
							size={20}
							style={{ color: `${textColor}` }}
						/>
					) : (
						<AiOutlineMenu
							onClick={handleNav}
							size={20}
							style={{ color: `${textColor}` }}
						/>
					)}
				</div>
				{/* Mobile Menu */}
				<div
					className={
						nav
							? "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
							: "absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
					}
				>
					<ul>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href={"/"}>Home</Link>
						</li>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href={"/features"}>Features</Link>
						</li>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href={"/testing"}>Testing</Link>
						</li>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href={"/support"}>Support</Link>
						</li>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href={"/policy"}>Privacy Policy</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
