"use client"

import Image from "next/image"
import { navLinks } from "../../../config/constants"
import Hamburger from "hamburger-react"

import { useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
	const [open, setOpen] = useState(false)
	return (
		<nav className="w-full flex py-6 px-6 justify-between lg:justify-evenly items-center navbar ">
			<a href="/#">
				<Image
					src="/logo-label.svg"
					alt="lucidum"
					className="hover:translate-x-1 hover:-translate-y-1 transition-all"
					width={96}
					height={96}
				/>
			</a>
			<div className="lg:hidden visible ml-auto m-4">
				<Hamburger toggled={open} toggle={setOpen} />
			</div>
			{open && (
				<div className="absolute top-0 left-0 w-full h-screen bg-white z-10">
					<div className="absolute top-0 right-0 ">
						<Hamburger toggled={open} toggle={setOpen} />
					</div>
					<div className="flex flex-col justify-center text-center items-center h-full">
						{navLinks.map((nav, index) => (
							<a
								key={nav.id}
								href={nav.url}
								className="font-bold text-center cursor-pointer text-[16px] text-black mr-10">
								{nav.title}
							</a>
						))}
					</div>
				</div>
			)}
			<ul className="list-none lg:inline-flex hidden justify-center items-center  text-center">
				{navLinks.map((nav, index) => (
					<div key={nav.id} className="group">
						<li
							key={nav.id}
							className={`font-bold cursor-pointer text-[16px] text-center text-black group-hover:block mr-10 transition-all relative`}>
							<a href={nav.url}>{nav.title}</a>
							{/* on hover of each element display a drop down under the item with the dropdown values */}
							{nav.dropdown && (
								<div className="absolute bg-black text-white z-10 group-hover:block hidden ">
									<ul className="list-none flex flex-col justify-center items-center group-hover:block text-center p-4">
										{nav.dropdown.map((dropdown, index) => (
											<motion.button
												key={dropdown.id}
												whileHover={{
													translateX: 5,
													transition: { duration: 0.2 },
												}}>
												<li
													className={`font-bold cursor-pointer text-center mr-10 transition-all relative`}>
													{dropdown.title}
												</li>
											</motion.button>
										))}
									</ul>
								</div>
							)}
						</li>
					</div>
				))}
			</ul>
			<div className="flex justify-end items-center">
				<button className="bg-[#1A8488] px-4 py-2 text-white hover:drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:-translate-y-1 transition-all hover:bg-[#156b6e]">
					Get Started
				</button>
			</div>
		</nav>
	)
}

export default Navbar
