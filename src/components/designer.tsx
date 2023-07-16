'use client';
import { useState } from "react";
import Icon from '@components/icon'
import type { HTMLElementsAvailableForOnChange, URLArticleProps } from "@/typescript/types";
import encodeData from "@/typescript/encode";
import { useRouter } from "next/navigation";

export default () => {
	var router = useRouter()
	const [formData, setFormData] = useState<URLArticleProps>({
		title: "",
		photoURL: "",
		date: "",
		article: "",
		theme: "classic"
	});
	let readyToSubmit = false;
	const handleInputChange = (event: React.ChangeEvent<HTMLElementsAvailableForOnChange>) => {
		readyToSubmit = true;
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const url = `/article/${encodeData(formData)}`;
		window.navigator.clipboard.writeText(url);
		router.push(url);
	};
	const prefillData = () => setFormData({
		title: "Scientists Discover New Species of Flying Fish",
		photoURL: "https://th.bing.com/th/id/OIG.em2DfwXJHDs9TRhVAfo9?pid=ImgGn",
		date: "2023-07-08",
		author: "Tom Hanks",
		authorPhotoURL: "https://th.bing.com/th/id/OIP.BWxawB_y26R4Jz6LXAAbegHaLJ?pid=ImgDet&rs=1",
		article: "Scientists have discovered a new species of flying fish that can soar up to 100 meters in the air and glide for several minutes. The fish, named Exocoetus volans, was found in the tropical waters of the Pacific Ocean, where it feeds on insects and small birds. The researchers, from the University of Hawaii and the Smithsonian Institution, were amazed by the fish’s remarkable ability to fly. They used drones and cameras to capture the fish in action, and analyzed their anatomy and aerodynamics. They found that the fish has a pair of large, wing-like pectoral fins that can spread out to create lift. It also has a long, forked tail that can act as a propeller and a rudder. The fish can launch itself out of the water by rapidly flapping its tail, and then glide in the air by adjusting its fins and body posture. The fish can fly for up to five minutes at a time, covering distances of up to 500 meters. It can also change direction and altitude in mid-air, avoiding predators and obstacles. The researchers believe that the fish evolved this ability to escape from larger fish that prey on them in the water. The discovery of Exocoetus volans adds to the diversity and complexity of life on Earth, and challenges our understanding of the boundaries between aquatic and aerial animals. The researchers hope to learn more about the fish’s behavior, ecology and evolution, and to protect its habitat from human threats. The study was published in the journal Nature Communications.📰",
		theme: "classic"
	})
	return (
		<><form className="p-4" onSubmit={handleSubmit}>
			<label className="form-label" htmlFor="title">
				<Icon name='fonts' />Title
			</label>
			<div className='input-group pb-2'>
				<input
					type="text"
					name="title"
					id="title"
					className="border-2 h-full form-control"
					onChange={handleInputChange}
					value={formData.title}
					required />
			</div>
			<label className="form-label" htmlFor="photoURL">
				<Icon name='image' />Photo URL
			</label>
			<div className='input-group pb-2'>
				<input
					type="url"
					name="photoURL"
					id="photoURL"
					className="border-2 h-full form-control"
					onChange={handleInputChange}
					value={formData.photoURL}
					required />
			</div>
			<label className="form-label" htmlFor="date">
				<Icon name='calendar' />Date
			</label>
			<div className='input-group pb-2'>
				<input
					type="date"
					name="date"
					id="date"
					className="border-2 h-full form-control"
					onChange={handleInputChange}
					value={formData.date}
					required />
			</div>
			<label className="form-label" htmlFor="author">
				<Icon name='person' />Author
			</label>
			<div className='input-group pb-2'>
				<input
					type="text"
					name="author"
					id="author"
					className="border-2 h-full form-control"
					onChange={handleInputChange}
					value={formData.author} />
			</div>
			<label className="form-label" htmlFor="authorPhotoURL">
				<Icon name='images' />Author Photo URL
			</label>
			<div className='input-group pb-2'>
				<input
					type="url"
					name="authorPhotoURL"
					id="authorPhotoURL"
					className="border-2 h-full form-control"
					onChange={handleInputChange}
					value={formData.authorPhotoURL}
					required />
			</div>
			<label className="form-label" htmlFor="article">
				<Icon name='text-paragraph' />Article
			</label>
			<div className="input-group pb-2">
				<textarea
					name="article"
					id="article"
					className="border-2 form-control"
					onChange={handleInputChange}
					value={formData.article}
					required />
			</div>
			<label className="form-label" htmlFor="theme">
				<Icon name='app' />Theme
			</label>
			<div className="input-group pb-2">
				<select name="theme" id="theme" className="form-select" onChange={handleInputChange} value={formData.theme}>
					<option value="classic">Classic</option>
					<option value="YNN">YNN</option>
					<option value="newspaper">The YNN Times</option>
				</select>
			</div>
			<div className="pt-4">
				<button type="submit" className='btn btn-primary'><Icon name="check" /> Submit & Copy Link</button> &nbsp;
			</div>
		</form>
		<div className="px-4 py-2">
			<button type={"button"}  className="btn btn-secondary" onClick={prefillData}>
					<Icon name="lightning"  />	Prefill
			</button>
		</div>
		</>
	);

}