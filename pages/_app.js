import "@/styles/globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider defaultTheme="dark">
			<Navbar />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
