export interface URLArticleProps {
	title: string;
	article: string;
	photoURL: string;
	date: string;
	author?: string;
	authorPhotoURL?: string;
	theme: "classic" | "YNN"
}

export type HTMLElementsAvailableForOnChange = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement