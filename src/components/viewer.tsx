import type { URLArticleProps } from '@/typescript/types';
import Image from 'next/image';
import Nav from '@components/nav'
import YNNnav from '@components/YNNnav'

export default (data: URLArticleProps) => {
	if (data.theme !== "classic") {
		if (data.theme === "YNN") {
			return (
				<>
					<YNNnav />
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
						<h1 className="text-3xl font-bold mb-4">{data.title}</h1>
						
						{/* News Meta */}
						<div className="flex items-center text-gray-500 text-sm mb-4">
							<span className="mr-2">Published Date:</span>
							<time>{data.date}</time>
						</div>

						{/* News Image */}
						<Image
							className="w-full rounded-lg mb-6"
							src={data.photoURL} // Replace with your news image path
							alt="News Image"
							width={50}
							height={50}
						/>

						{/* News Content */}
						<div className="text-lg leading-relaxed mb-6">
							<article>
								{data.article}
							</article>
						</div>
					</div>
				</>
			)
		}
	} else return (
		<>
			<Nav />
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<h1 className="text-center font-extrabold p-8">
					{data.title}
					<hr />
				</h1>
				<div className="flex content-center justify-center">
					<time className='text-center font-medium'>{data.date}</time>
				</div>
				{data.author && data.authorPhotoURL ?
					<>
						<div className="p-4">
							<Image src={data.authorPhotoURL} alt="author" width={50} height={50} className='inline rounded-full' /> &nbsp; &nbsp;
							<span>by {data.author}</span>
						</div>
					</>
					:
					<></>}
				<div className="flex justify-center content-center">
					<Image src={data.photoURL} alt="cover image" width={500} height={500} draggable={false} />
				</div>
				<article className="text-justify m-8 leading-8 first-letter:font-bold first-letter:text-8xl">
					{data.article}
				</article>
			</div>
		</>
	)
}