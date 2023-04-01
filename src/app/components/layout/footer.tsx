import Image from "next/image"

const Footer = () => {
	return (
		<div className="bg-black text-white flex w-full flex-col">
			<div className="flex flex-row w-full">
				<div className="text-3xl lg:text-6xl w-2/3 p-2 flex items-center lg:p-16">
					Let Us Optimize Your Rentals
				</div>
				<Image
					src="/logo-label-inverse.svg"
					alt="lucidum"
					className="w-1/3 flex items-center lg:p-16 p-2"
					width={32}
					height={32}
				/>
			</div>
			<div className="flex flex-row w-full lg:p-16 p-2">
				<div className="flex flex-col w-1/4 p-2 gap-2 lg:gap-4">
					<div className="text-2xl lg:text-4xl text-stone-400">Products</div>
					<div className="text-xl lg:text-2xl">ANR Calculator</div>
					<div className="text-xl lg:text-2xl">Customized Reports</div>
					<div className="text-xl lg:text-2xl">In-Depth Portfolio Analytics</div>
					<div className="text-xl lg:text-2xl">Heat Maps</div>
					<div className="text-xl lg:text-2xl">Competitors And Market Insights</div>
				</div>
				<div className="flex flex-col w-1/4 p-2 gap-4">
					<div className="text-2xl lg:text-4xl text-stone-400">Plans</div>
					<div className="text-xl lg:text-2xl">Simple Start</div>
					<div className="text-xl lg:text-2xl">Essentials</div>
					<div className="text-xl lg:text-2xl">Plus</div>
				</div>
				<div className="flex flex-col w-1/4 p-2 gap-4">
					<div className="text-2xl lg:text-4xl text-stone-400">Company</div>
					<div className="text-xl lg:text-2xl">About Lucidum</div>
					<div className="text-xl lg:text-2xl">Careers</div>
					<div className="text-xl lg:text-2xl">Blog</div>
					<div className="text-xl lg:text-2xl">Newsroom</div>
					<div className="text-xl lg:text-2xl">Resource Hub</div>
					<div className="text-xl lg:text-2xl">Join The Family</div>
					<div className="text-xl lg:text-2xl">System Status</div>
				</div>
				<div className="flex flex-col w-1/4 p-2 gap-4">
					<div className="text-2xl lg:text-4xl text-stone-400">Email</div>
					<div className="text-xl lg:text-2xl">info@lucidum.ai</div>
					<div className="text-xl lg:text-2xl">sales@lucidum.ai</div>
					<div className="text-2xl lg:text-4xl text-stone-400">Phone</div>
				</div>
			</div>
			<div className="flex flex-row w-full justify-evenly p-4">
				<div className="text-xl lg:text-2xl text-stone-400">Terms</div>
				<div className="text-xl lg:text-2xl text-stone-400">Privacy</div>
				<div className="text-xl lg:text-2xl text-stone-400">Security</div>
			</div>
			<div className="text-md flex flex-row w-full justify-center text-stone-400 p-4">
				COPYRIGHT © 2023 LUCIDUM, INC.ALL RIGHTS RESERVED. FREIGHT SERVICES ARE OFFERED BY CLARITY AI LLC, A
				WHOLLY OWNED SUBSIDIARY OF LUCIDUM INC.
			</div>
		</div>
	)
}

export default Footer
