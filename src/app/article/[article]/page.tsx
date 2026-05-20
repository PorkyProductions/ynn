import { decodeData } from "@typescript/decode"
import Viewer from "@components/viewer"
import type { Metadata, ResolvingMetadata, Viewport } from "next/types"
import type { URLArticleProps } from "@typescript/types"
import { url } from '@typescript/constants'

interface Params {
	params: Promise<{
		article: string
	}>
}

export async function generateViewport(props: Params): Promise<Viewport> {
    const params = await props.params;
    const articleData = decodeData(params.article)
    const { theme } = articleData
    let themeColor = "#111827" // classic default
    if (theme === "YNN") {
		themeColor = "#dc2626"
	} else if (theme === "newspaper") {
		themeColor = "#0a0a0a"
	} else if (theme === "breaking") {
		themeColor = "#dc2626"
	} else if (theme === "tech") {
		themeColor = "#0f0f10"
	} else if (theme === "magazine") {
		themeColor = "#faf9f7"
	}
    return {
		themeColor
	}
}

export async function generateMetadata(props: Params, parent: ResolvingMetadata): Promise<Metadata> {
    const params = await props.params;
    const articleData = decodeData(params.article)
    const { title, article, author, photoURL } = articleData
    const previousImages = (await parent).openGraph?.images || []
    return {
		"title": `${title} | YNN`,
		"description": article,
		"authors": { name: author || "YNN" },
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

export default async function Article(props0: Params) {
    const params = await props0.params;
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