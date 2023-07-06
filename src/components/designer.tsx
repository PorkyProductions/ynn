'use client';
import { useState } from "react";
import Icon from '@components/icon'
import type { URLArticleProps } from "@/typescript/types";
import encodeData from "@/typescript/encode";
import { useRouter } from "next/navigation";

export default () => {
	var router = useRouter()
	const [formData, setFormData] = useState<URLArticleProps>({
		title: "",
		article: "",
	});
	let readyToSubmit = false;
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		readyToSubmit = true;
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const url = `/article/${encodeData(formData)}`;
		window.navigator.clipboard.writeText(url);
		router.push(url);
	};
	return (
		<form className="p-4" onSubmit={handleSubmit}>
			<label className="form-label" htmlFor="title">
							<Icon name='person' />Title
						</label>
						<div className='input-group'>
							<input
								type="text"
								name="title"
								id="title"
								className="border-2 h-full form-control"
								onChange={handleInputChange}
								value={formData.title}
								required
							/>
						</div>
						<label className="form-label" htmlFor="article">
                        <Icon name='text-paragraph' />Article
						</label>
						<input
							name="article"
							id="article"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={formData.article}
							required
						/>
						<div className="pt-4">
							<button type="submit" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#copied">Submit & Copy Link</button>
						</div>
		</form>
	);

}