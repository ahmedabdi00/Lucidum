import "./globals.css"
import { Outfit } from "next/font/google"

export const metadata = {
	title: "Lucidum.Ai",
}

const outfit = Outfit({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={outfit.className}>
			<body>
				<div className="container h-full mx-auto">{children}</div>
			</body>
		</html>
	)
}
