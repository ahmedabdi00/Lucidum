"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Header = () => {
	const [windowSize, setWindowSize] = useState(getWindowSize())

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize())
		}

		window.addEventListener("resize", handleWindowResize)

		return () => {
			window.removeEventListener("resize", handleWindowResize)
		}
	}, [])

	const [headerWidth, setHeaderWidth] = useState(0)

	useEffect(() => {
		if (windowSize.innerWidth > 768) {
			setHeaderWidth(1280)
		} else if (windowSize.innerWidth < 640) {
			setHeaderWidth(windowSize.innerWidth - 32)
		} else {
			setHeaderWidth(windowSize.innerWidth)
		}
	}, [windowSize.innerWidth])

	console.log(headerWidth)

	return (
		<>
			<div className="flex flex-col sm justify-center items-center h-1/2 lg:h-4/5 bg-cover bg-hero-pattern p-8">
				<motion.div
					initial={{ opacity: 0, y: -150 }}
					transition={{ duration: 0.5 }}
					animate={{ opacity: 1, y: 0 }}>
					<Image src="/header.svg" alt="lucidum" className=" header-shadow" width={headerWidth} height={10} />
				</motion.div>

				<div className="flex flex-col my-6 lg:w-1/3 self-start w-full">
					<motion.div
						initial={{ opacity: 0, x: -150 }}
						transition={{ duration: 0.5 }}
						animate={{ opacity: 1, x: 0 }}>
						<div className="px-2 py-1 w-1/2 self-start m-2 lg:text-xl text-sm rounded-md">
							Understand Your Rentals Like Never Before With Lucidum
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -150 }}
						transition={{ duration: 1 }}
						animate={{ opacity: 1, x: 0 }}>
						<div className="px-2 py-1 w-3/4 lg:w-full self-start m-2 lg:text-xl text-sm rounded-md">
							Here at Lucidum.Ai we know that it is not easy to set the right price, so we take the burden
							off your shoulders. We offer <span className="font-bold">Simplicity</span> and as our name
							suggests <span className="font-bold">Clartiy!</span>
						</div>
					</motion.div>
				</div>

				{/* create an arrow to promote scrolling that pops up and down and make it clickable and use ONLY relative position */}
				<div className="flex-grow"></div>
				<a href="#products">
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						transition={{ duration: 0.3 }}
						animate={{ opacity: 1, y: 0 }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8 animate-bounce"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</motion.div>
				</a>
			</div>
		</>
	)
}

export default Header

function getWindowSize() {
	if (typeof window === "undefined") {
		return { innerWidth: 0, innerHeight: 0 }
	}
	const { innerWidth, innerHeight } = window
	return { innerWidth, innerHeight }
}
