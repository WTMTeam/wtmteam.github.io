/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	reactStrictMode: true,
	// swcMinify: true,
	images: {
		unoptimized: true,
		domains: ["user-images.githubusercontent.com"],
	},
	assetPrefix: isProd ? "wtmteam/wtmteam.github.io" : "",
};

module.exports = nextConfig;
