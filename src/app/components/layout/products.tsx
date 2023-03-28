const Products = () => {
	return (
		<div className="h-screen" id="products">
			<div className="flex flex-col justify-center py-8">
				<p className="text-lg uppercase lg:text-2xl m-8">
					The Last All-In-One Managment Company You Will Ever Need
				</p>
				<div className="flex justify-center">
					<div className="flex m-8 justify-center items-center flex-col lg:flex-row w-2/3 gap-2">
						<p className="lg:text-4xl text-xl lg:w-1/2 capitalize font-semibold">
							Here at Lucidum.ai we offer an array of digital assets that bring{" "}
							<span className="text-[#1A8488]">a world of ease to your businesses!</span>
						</p>
						{/* video */}
						<div className="lg:w-1/2 w-full m-8">
							<video
								className="w-full h-full"
								src="https://www.youtube.com/watch?v=7e90gBu4pas"
								controls
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center">
				{/* create have 2 dotted lines from right and left of the title */}
				<p className="text-lg uppercase lg:text-2xl m-8 ">ANR Calculator</p>
			</div>
		</div>
	)
}

export default Products
