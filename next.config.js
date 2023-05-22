/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	reactStrictMode: true,
	// swcMinify: true,
	images: {
		domains: ["user-images.githubusercontent.com"],
		unoptimized: true,
	},
	assetPrefix: isProd ? "wtmteam.github.io" : "",
};

module.exports = nextConfig;
