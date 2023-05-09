// features.js
//
// Date Created: 05/03/2023
// Author: Samuel Rudqvist
// Copyright: 2023 Samuel Rudqvist
//
// Purpose:
//      This page shows off the features of the WTM app.

import Head from "next/head";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Slider from "@/components/Slider";
import SliderData from "@/components/SliderData";

export default function features() {
	return (
		<Layout>
			<Head>
				<title>Features</title>
			</Head>
			{/* <h1>Features</h1> */}
			<Hero heading={"Features"} message={"Feature tests"} />
			<Slider slides={SliderData} />
		</Layout>
	);
}
