// policy.js
//
// Date Created: 05/03/2023
// Author: Samuel Rudqvist
// Copyright: 2023 Samuel Rudqvist
//
// Purpose:
//      This page contains the privacy policy of the WTM app.

import Head from "next/head";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import wtmLogo from "../public/images/logo3.png";
import Image from "next/image";

export default function policy() {
	return (
		<>
			<Head>
				<title>Privacy Policy</title>
			</Head>
			{/* <h1>Features</h1> */}
			{/* <Hero heading={"Privacy Policy"} message={""} />
			<p>
				This Privacy Policy governs the manner in which Where's That
				Movie (referred to as "we" or "us") handles information
				collected from users (referred to as "you" or "users") of the
				Where's That Movie mobile application (referred to as the
				"App").
			</p> */}

			<div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover py-40">
				{/* <Image
					src={wtmLogo}
					alt="logo"
					width={50}
					height={50}
					style={{ filter: "brightness(50%)" }}
					className="z-0"
				/> */}
			</div>

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
					<h1 className="mb-8 lg:mb-16 font-bold text-center sm:text-6xl">
						Privacy Policy
					</h1>
					<section>
						<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
							<p className="mb-8 lg:mb-16 font-light text-center text-gray-200 sm:text-xl">
								This Privacy Policy governs the manner in which
								Where's That Movie (referred to as "we" or "us")
								handles information collected from users
								(referred to as "you" or "users") of the Where's
								That Movie mobile application (referred to as
								the "App").
							</p>
							<h1 className="mb-2 lg:mb-4 font-bold text-left text-gray-200 sm:text-3xl">
								Data Collection and Use
							</h1>
							<p className="mb-8 lg:mb-16 font-light text-left text-gray-200 sm:text-xl">
								Where's That Movie does not collect any
								personally identifiable information or personal
								data from you when you use the App. We do not
								track, store, or share any information that
								could be used to identify you.
							</p>

							<h1 className="mb-2 lg:mb-4 font-bold text-left text-gray-200 sm:text-3xl">
								Third-Party Services
							</h1>
							<p className="mb-2 lg:mb-4 font-light text-left text-gray-200 sm:text-xl">
								The App integrates with the TMDB API (The Movie
								Database) to provide movie information,
								including details, images, and streaming links.
								Your usage of the TMDB API is subject to their
								privacy policy and terms of service. We do not
								have control over the data collected by the TMDB
								API.
							</p>
							<p className="mb-8 lg:mb-16 font-light text-left text-gray-200 sm:text-xl">
								The App may also contain links to external
								streaming apps and the app store. When you click
								on these links, you will be directed to the
								respective third-party platforms. We encourage
								you to review the privacy policies of those
								third parties when accessing their services.
							</p>

							<h1 className="mb-2 lg:mb-4 font-bold text-left text-gray-200 sm:text-3xl">
								Changes to this Privacy Policy
							</h1>
							<p className="mb-8 lg:mb-16 font-light text-left text-gray-200 sm:text-xl">
								We reserve the right to update or change this
								Privacy Policy at any time. Any changes made
								will be effective immediately upon posting the
								revised Privacy Policy in the App. We encourage
								you to review this Privacy Policy periodically
								for any updates or changes.
							</p>

							<h1 className="mb-2 lg:mb-4 font-bold text-left text-gray-200 sm:text-3xl">
								Contact Us
							</h1>
							<p className="mb-8 lg:mb-16 font-light text-left text-gray-200 sm:text-xl">
								If you have any questions or concerns about this
								Privacy Policy or your privacy rights, please
								contact us at [contact email address].
							</p>
						</div>
					</section>
				</div>
			</div>
			{/* <div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover py-80">
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
					<h1 className="mb-8 lg:mb-16 font-bold text-center sm:text-6xl">
						Privacy Policy
					</h1>
					<section>
						<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
							<p className="mb-8 lg:mb-16 font-light text-center text-gray-200 sm:text-xl">
								This Privacy Policy governs the manner in which
								Where's That Movie (referred to as "we" or "us")
								handles information collected from users
								(referred to as "you" or "users") of the Where's
								That Movie mobile application (referred to as
								the "App").
							</p>
							<h1 className="mb-2 lg:mb-4 font-bold text-left text-gray-200 sm:text-3xl">
								Data Collection and Use
							</h1>
							<p className="mb-8 lg:mb-16 font-light text-left text-gray-200 sm:text-xl">
								Where's That Movie does not collect any
								personally identifiable information or personal
								data from you when you use the App. We do not
								track, store, or share any information that
								could be used to identify you.
							</p>

							<h1 className="mb-2 lg:mb-4 font-bold text-left text-gray-200 sm:text-3xl">
								Third-Party Services
							</h1>
							<p className="mb-2 lg:mb-4 font-light text-left text-gray-200 sm:text-xl">
								The App integrates with the TMDB API (The Movie
								Database) to provide movie information,
								including details, images, and streaming links.
								Your usage of the TMDB API is subject to their
								privacy policy and terms of service. We do not
								have control over the data collected by the TMDB
								API.
							</p>
							<p className="mb-8 lg:mb-16 font-light text-left text-gray-200 sm:text-xl">
								The App may also contain links to external
								streaming apps and the app store. When you click
								on these links, you will be directed to the
								respective third-party platforms. We encourage
								you to review the privacy policies of those
								third parties when accessing their services.
							</p>

							<h1 className="mb-2 lg:mb-4 font-bold text-left text-gray-200 sm:text-3xl">
								Changes to this Privacy Policy
							</h1>
							<p className="mb-8 lg:mb-16 font-light text-left text-gray-200 sm:text-xl">
								We reserve the right to update or change this
								Privacy Policy at any time. Any changes made
								will be effective immediately upon posting the
								revised Privacy Policy in the App. We encourage
								you to review this Privacy Policy periodically
								for any updates or changes.
							</p>

							<h1 className="mb-2 lg:mb-4 font-bold text-left text-gray-200 sm:text-3xl">
								Contact Us
							</h1>
							<p className="mb-8 lg:mb-16 font-light text-left text-gray-200 sm:text-xl">
								If you have any questions or concerns about this
								Privacy Policy or your privacy rights, please
								contact us at [contact email address].
							</p>
						</div>
					</section>
				</div>
			</div> */}
		</>
	);
}
