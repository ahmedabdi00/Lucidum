"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
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
		<div className="flex flex-col sm justify-center items-center h-screen/2">
			<Image src="/header.svg" alt="lucidum" className="mx-8 header-shadow" width={headerWidth} height={10} />
		</div>
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
