/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	reactStrictMode: true,
	// swcMinify: true,
	output: "export",
	// basePath: "/gh-pages",
	images: {
		unoptimized: true,
		domains: ["user-images.githubusercontent.com"],
	},
	// assetPrefix: isProd ? "wtmteam.github.io" : "",
};

module.exports = nextConfig;
