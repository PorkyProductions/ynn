import { decodeData } from "@typescript/decode"
import Viewer from "@components/viewer"
import type { Metadata, ResolvingMetadata, Viewport } from "next/types"
import type { URLArticleProps } from "@typescript/types"
import { url } from '@typescript/constants'

interface Params {
	params: {
		article: string
	}
}

export async function generateViewport({ params }: Params): Promise<Viewport> {
	const articleData = decodeData(params.article)
	const { theme } = articleData
	let themeColor = "#111827" // classic
	if (theme === "YNN") {
		themeColor = "#dc2626"
	} else if (theme === "newspaper") {
		themeColor = "#0a0a0a"
	} else {
		themeColor = "#111827"
	}
	return {
		themeColor
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
				`${url}/api/generateOGImage?title=${articleData.title}&breaking=false`,
				...previousImages
			]
		},
	}
}

export default function Article({ params }: Params) {
	const articleData = decodeData(params.article)
	const { title, article, author, photoURL, date, authorPhotoURL, theme } = articleData
	const props: URLArticleProps = {
		title,
		article,
		author,
		photoURL,
		date,
		authorPhotoURL,
		theme
	}
	return <Viewer {...props} />
}