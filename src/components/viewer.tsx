import type { URLArticleProps } from '@/typescript/types';
import Image from 'next/image';
import { Crimson_Text, Red_Hat_Display } from 'next/font/google'
import Nav from '@components/nav'
import YNNnav from '@components/YNNnav'
import Link from 'next/link';

const ctFont = Crimson_Text({
	subsets: [
		"latin"
	],
	weight: [
		"400",
		"600",
		"700"
	]
});
const rhdFont = Red_Hat_Display({
	subsets: [
		"latin",
		"latin-ext"
	],
	weight: "variable"
})

export default (urlData: URLArticleProps) => {
	if (urlData.theme !== "classic") {
		if (urlData.theme === "YNN") {
			return (
				<>
					<YNNnav />
					<div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${rhdFont.className}`}>
						<h1 className="text-3xl font-bold mb-4">{urlData.title}</h1>
						
						{/* News Meta */}
						<div className="flex items-center text-gray-500 text-sm mb-4">
							<span className="mr-2">Published Date:</span>
							<time>{urlData.date}</time>
						</div>

						{/* News Image */}
						<Image
							className="w-full rounded-lg mb-6"
							src={urlData.photoURL} // Replace with your news image path
							alt="News Image"
							width={500}
							height={500}
						/>

						{/* News Content */}
						<div className="text-lg leading-relaxed mb-6">
							<article>
								{urlData.article}
							</article>
						</div>
						<div className="flex content-center justify-center text-red-600">
							<h2 className="text-red-600">THIS ARTICLE IS <span className="font-extrabold">FAKE</span></h2>
						</div>
					</div>
				</>
			)
		} else if (urlData.theme === "newspaper") {
			return (
				<>
					<div id='root' className={ctFont.className}>
					<nav className="bg-black">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="flex items-center justify-between h-16">
								{/* Logo */}
								<div className="flex-shrink-0 text-white">
									<Link href="/" className='no-underline'>
										<h1 className='text-white no-underline'>
											The YNN Times
										</h1>
									</Link>
								</div>

								{/* Menu items */}
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4">
										{/* Home */}
										<Link
											href="/"
											className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
										>
											Home
										</Link>

										{/* Categories */}
										<Link
											href="/categories"
											className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
										>
											Categories
										</Link>

										{/* About */}
										<Link
											href="/about"
											className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
										>
											About
										</Link>

										{/* Contact */}
										<Link
											href="/contact"
											className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
										>
											Contact
										</Link>
									</div>
								</div>
							</div>
						</div>
					</nav>
					<div className=" rounded-lg p-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
							{/* Article title */}
							<h2 className="text-3xl font-bold mb-4">{urlData.title}</h2>

							{/* Article metadata */}
							<div className="flex items-center mb-4">
								<span className="text-gray-500 text-sm">Published on:</span>
								<span className="ml-1">{urlData.date}</span>
							</div>

							{/* Article image */}
							<div className="flex content-center justify-center">
								<Image
									src={urlData.photoURL}
									alt="Article"
									className="mb-4 rounded-lg"
									width={500}
									height={500} />
							</div>

							{/* Article content */}
							<article className="text-justify m-8 leading-8 first-letter:font-bold first-letter:text-4xl">
								{urlData.article}
							</article>

							{/* Article author */}
							<div className="flex items-center mb-4">
								<span className="text-gray-500 text-sm">Written by:</span>
								<span className="ml-1">{urlData.author || "Anonymous"}</span>
							</div>
							<div className="flex content-center justify-center text-red-600">
								<h2 className="text-red-600">THIS ARTICLE IS <span className="font-extrabold">FAKE</span></h2>
							</div>
						</div>
					</div>					
					</>
				);			
		}
	} else return (
		<>
			<Nav />
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<h1 className="text-center font-extrabold p-8">
					{urlData.title}
					<hr />
				</h1>
				<div className="flex content-center justify-center">
					<time className='text-center font-medium'>{urlData.date}</time>
				</div>
				{urlData.author && urlData.authorPhotoURL ?
					<>
						<div className="p-4">
							<Image src={urlData.authorPhotoURL} alt="author" width={50} height={50} className='inline rounded-full' /> &nbsp; &nbsp;
							<span>by {urlData.author}</span>
						</div>
					</>
					:
					<></>}
				<div className="flex justify-center content-center">
					<Image src={urlData.photoURL} alt="cover image" width={500} height={500} draggable={false} />
				</div>
				<article className="text-justify m-8 leading-8 first-letter:font-bold first-letter:text-8xl">
					{urlData.article}
				</article>
				<div className="flex content-center justify-center text-red-600">
					<h2 className="text-red-600">THIS ARTICLE IS <span className="font-extrabold">FAKE</span></h2>
				</div>
			</div>
		</>
	)
}