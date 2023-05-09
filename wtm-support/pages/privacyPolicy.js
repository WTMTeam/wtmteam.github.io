// privacyPolicy.js
//
// Date Created: 05/03/2023
// Author: Samuel Rudqvist
// Copyright: 2023 Samuel Rudqvist
//
// Purpose:
//      This page contains the privacy policy for the WTM app.

import Head from "next/head";
import Hero from "@/components/hero";

export default function privacyPolicy() {
	return (
		<>
			<Head>
				<title>Privacy Policy</title>
			</Head>
			{/* <h1>Privacy Policy</h1> */}
			<Hero heading="Privacy Policy" message="Test message" />
		</>
	);
}
