import type { URLArticleProps } from '@/typescript/types';
import Image from 'next/image';

export default (data: URLArticleProps) => {
	if (data.theme !== "classic") {
		return <></>
	} else return (
		<div>
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
					<Image src={data.authorPhotoURL} alt="author" width={50} height={50} className='inline rounded-full'  /> &nbsp; &nbsp;
					<span>by {data.author}</span>
				</div>
			</>	
			:
			<></>
		}
		<div className="flex justify-center content-center">
			<Image src={data.photoURL} alt="cover image" width={500} height={500} draggable={false}  />
		</div>
		<article className="text-justify m-8 leading-8 first-letter:font-bold first-letter:text-8xl">
			{data.article}
		</article>
	</div>
	)
}