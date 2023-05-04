// support.js
//
// Date Created: 05/03/2023
// Author: Samuel Rudqvist
// Copyright: 2023 Samuel Rudqvist
//
// Purpose:
//      This page contains information about the support for the WTM app.

import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/images/me.jpg";

export default function support() {
	return (
		<>
			<Head>
				<title>Support</title>
			</Head>
			<h1 class="text-6xl font-bold text-red-700 text-center hover:text-red-800">
				Support
			</h1>
			<div class="h-screen flex items-center justify-center">
				<div class="py-8 px-8 max-w-md mx-auto transition duration-500 hover:scale-125 hover:bg-slate-100 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
					<Image
						class="block mx-auto h-24 w-24 rounded-full sm:mx-0 md:shrink-1"
						src={profilePic}
						alt="Me"
					></Image>
					<div class="text-center space-y-2 sm:text-left">
						<div class="space-y-0.5">
							<p class="text-lg text-black font-semibold">
								Samuel Rudqvist
							</p>
							<p class="text-slate-500 font-medium">
								Software Engineer
							</p>
						</div>
						<button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
							Message
						</button>
					</div>
				</div>
			</div>
			{/* <div className="group flex justify-center items-center relative w-80 h-60 bg-red-200 cursor-pointer text-4xl">
				<h2>Hover over me</h2>

				
				<div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
			</div> */}
		</>
	);
}
