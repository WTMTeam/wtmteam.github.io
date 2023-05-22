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
import Hero from "@/components/hero";
import wtmLogo from "../public/images/logo3.png";
import { useState } from "react";

export default function support() {
	// TODO: Handle the form submission, set up SendGrid and Superface or Nodemailer.
	// * Improvements: use quill for writing the message.

	return (
		<>
			<Head>
				<title>Support</title>
			</Head>
			{/* <h1 class="text-6xl font-bold text-red-700 text-center hover:text-red-800">
				Support
			</h1> */}
			{/* <Hero heading={"Support"} /> */}
			{/* h-screen */}

			<div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover py-80">
				<Image
					src={wtmLogo}
					alt="logo"
					width={500}
					height={500}
					style={{ filter: "brightness(50%)" }}
					className="z-0"
				/>
				<div className="absolute z-[2]">
					<div className="p-5 ml-[-10rem] mt-[-10rem]"></div>
					<section>
						<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
							<p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
								Got a technical issue? Want to send feedback
								about a beta feature? Or do you just have a
								question? Let us know.
							</p>
							<p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
								Send an email to wheresthatmovie@gmail.com
							</p>
						</div>
					</section>
					<section className="hidden">
						<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
							<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
								Contact Us
							</h2>
							<p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
								Got a technical issue? Want to send feedback
								about a beta feature? Or do you just have a
								question? Let us know.
							</p>
							<form action="#" class="space-y-8">
								<div>
									<label
										for="email"
										class="block mb-2 text-sm font-medium text-gray-300"
									>
										Your email
									</label>
									<input
										type="email"
										id="email"
										class="block p-3 w-full text-sm rounded-lg border shadow-sm bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 focus:backdrop-blur-sm shadow-sm-light"
										placeholder="email@example.com"
										required
										onBlur={(e) => {
											if (e.target.value === "") {
												e.target.classList.remove(
													"backdrop-blur-sm",
													"backdrop-opacity-75"
												);
											}
										}}
										onFocus={(e) => {
											e.target.classList.add(
												"backdrop-blur-sm",
												"backdrop-opacity-75"
											);
										}}
									/>
								</div>
								<div>
									<label
										for="subject"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Subject
									</label>

									<input
										type="text"
										id="subject"
										class="block p-3 w-full text-sm rounded-lg border shadow-sm bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500  shadow-sm-light focus:backdrop-blur-sm focus:backdrop-opacity-75 transition-all duration-200"
										placeholder="Let us know what your message is about"
										required
										onBlur={(e) => {
											if (e.target.value === "") {
												e.target.classList.remove(
													"backdrop-blur-sm",
													"backdrop-opacity-75"
												);
											}
										}}
										onFocus={(e) => {
											e.target.classList.add(
												"backdrop-blur-sm",
												"backdrop-opacity-75"
											);
										}}
									/>
								</div>
								<div class="sm:col-span-2">
									<label
										for="message"
										class="block mb-2 text-sm font-medium text-gray-400"
									>
										Your message
									</label>

									<textarea
										id="message"
										rows="6"
										class="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 focus:backdrop-blur-sm focus:backdrop-opacity-75 transition-all duration-200"
										placeholder="Leave a comment..."
										required
										onBlur={(e) => {
											if (e.target.value === "") {
												e.target.classList.remove(
													"backdrop-blur-sm",
													"backdrop-opacity-75"
												);
											}
										}}
										onFocus={(e) => {
											e.target.classList.add(
												"backdrop-blur-sm",
												"backdrop-opacity-75"
											);
										}}
									></textarea>
								</div>
								<button
									type="submit"
									class="py-3 px-5 text-sm border border-gray-600 font-medium text-center text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-primary-600 hover:bg-white hover:text-black focus:ring-primary-800"
								>
									Send message
								</button>
							</form>
						</div>
					</section>
				</div>
			</div>

			{/* <div class=" z-10 flex items-center justify-center">
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
			</div> */}

			{/* <div className="group flex justify-center items-center relative w-80 h-60 bg-red-200 cursor-pointer text-4xl">
				<h2>Hover over me</h2>

				
				<div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
			</div> */}
		</>
	);
}
