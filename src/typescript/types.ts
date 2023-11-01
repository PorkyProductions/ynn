export interface URLArticleProps {
	title: string;
	article: string;
	photoURL: string;
	date: string;
	author?: string;
	authorPhotoURL?: string;
	theme: "classic" | "YNN" | "newspaper"
}

export type HTMLElementsAvailableForOnChange = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
export type HEAFOC = HTMLElementsAvailableForOnChange