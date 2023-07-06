import { decodeData } from "@typescript/decode"
import Viewer from "@components/viewer"


export default function Article({ params }: { params: { article: string } }) {
	const articleData = decodeData(params.article)
	return <Viewer title={articleData.title} article={articleData.article}  />
}