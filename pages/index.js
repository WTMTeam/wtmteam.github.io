import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

import wtmLogo from "../public/images/logo3.png";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 `}
		>
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<a
						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className="dark:invert hidden"
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic  after:blur-2xl after:content-[''] before:bg-gradient-to-br before:dark:from-transparent before:to-red-700/10 after:from-red-900 after:via-[#ff0101]/40 before:lg:h-[360px]">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
					// className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src={wtmLogo}
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div>
			{/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div> */}

			<div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
				<Link
					href="/features"
					as={process.env.BACKEND_URL + "/features"}
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
					// target="_blank"
					// rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Features{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						See what Where's That Movie is all about!
					</p>
				</Link>

				<Link
					href="/testing"
					as={process.env.BACKEND_URL + "/testing"}
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
					// target="_blank"
					// rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Testing{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Do you want early access to new features? Become a
						tester today!
					</p>
				</Link>

				<Link
					href="/support"
					as={process.env.BACKEND_URL + "/support"}
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
					// target="_blank"
					// rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Support{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Contact the developers for support.
					</p>
				</Link>

				<Link
					href="/policy"
					as={process.env.BACKEND_URL + "/policy"}
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
					// target="_blank"
					// rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Privacy Policy{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Check out the privacy policy for Where's That Movie.
					</p>
				</Link>
			</div>
		</main>
	);
}
