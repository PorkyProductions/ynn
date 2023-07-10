import { decodeData } from "@typescript/decode"
import Viewer from "@components/viewer"
import { Metadata, ResolvingMetadata } from "next"

interface Params {
	params: {
		article: string
	}
}


export async function generateMetadata({ params }: Params, parent: ResolvingMetadata): Promise<Metadata> {
	const articleData = decodeData(params.article)
	const { title, article, author, photoURL } = articleData
	const previousImages = (await parent).openGraph?.images || []
	return {
		"title": `${title} | YNN`,
		"description": article,
		"authors": { name: author } ?? { name: "YNN" },
		"generator": "You're Not Newsworthy & Next 13",
		"keywords": title,
		"openGraph": {
			"images": [
				photoURL,
				...previousImages
			]
		}
	}
}

export default function Article({ params }: Params) {
	const articleData = decodeData(params.article)
	const { title, article, author, photoURL, date, authorPhotoURL, theme } = articleData
	return <Viewer title={title} article={article} author={author} photoURL={photoURL} date={date} authorPhotoURL={authorPhotoURL} theme={theme} />
}