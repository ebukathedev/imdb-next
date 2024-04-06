import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Providers from "@/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "IMDB Clone",
	description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<div class="min-h-screen text-gray-700 transition-colors duration-300 select-none dark:text-gray-200 dark:bg-gray-700">
						<Header />
						<Navbar />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
