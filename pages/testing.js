// testing.js
//
// Date Created: 05/03/2023
// Author: Samuel Rudqvist
// Copyright: 2023 Samuel Rudqvist
//
// Purpose:
//      This page contains information about testing the WTM app.

import Head from "next/head";
import Image from "next/image";
import wtmLogo from "../public/images/logo3.png";
import qrCode from "../public/images/testflightPublicLinkQR.png";

export default function testing() {
	return (
		<>
			<Head>
				<title>Testing</title>
			</Head>
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
					<h1 className="mb-2 lg:mb-4 font-bold text-center sm:text-6xl">
						Testing
					</h1>
					<section>
						<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
							<p class="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
								Want to help us out and get access to features
								early?
							</p>
							<p class="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
								Download TestFlight from the App Store and scan
								the QR code
							</p>
						</div>
					</section>
				</div>
				<div className="absolute z-[2]">
					<div className="p-5 ml-[-10rem] mt-[-10rem]"></div>
					{/* <div className=" mt-16 ml-[-10rem] z-[2]"> */}
					<Image
						src={qrCode}
						alt="testflight qr code"
						width={100}
						height={100}
						className=" ml-[35rem] mt-[15rem]"
					></Image>
					{/* </div> */}
				</div>
			</div>
		</>
	);
}
