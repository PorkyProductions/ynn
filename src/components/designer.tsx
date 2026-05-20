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
		title: "NASA Astronauts Complete Record-Breaking Spacewalk, Accidentally Release $84,000 Torque Wrench Into Orbit",
		photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1280px-The_Earth_seen_from_Apollo_17.jpg",
		date: "2026-05-18",
		author: "Sarah Mitchell",
		authorPhotoURL: "https://randomuser.me/api/portraits/women/29.jpg",
		article: "Astronauts aboard the International Space Station completed a record-breaking eight-hour and forty-three-minute spacewalk Monday, successfully repairing a faulty thermal control module and upgrading communication relays on the station’s starboard truss. The milestone was tempered, however, by the accidental release of a 10-inch torque wrench into low Earth orbit during the excursion’s final phase. The tool, valued at $84,000 and custom-manufactured for zero-gravity use, is currently traveling at approximately 17,500 miles per hour at an altitude of 253 miles. Officials confirmed it poses no immediate threat to the station or any other spacecraft. ‘We are tracking the object and are confident it will de-orbit and burn up upon re-entry within the next several weeks,’ said NASA Flight Director Peggy Whitson during a press briefing from Johnson Space Center in Houston. ‘In the meantime, we have updated EVA protocols to require secondary tether systems on all tools above the size of a standard hex key.’ Mission specialists Commander Anne Fischer and Major David Reyes spent the first six hours replacing a degraded power conditioning unit before turning to antenna array work. Both primary objectives were successfully completed. The wrench becomes the third most valuable object accidentally released into orbit in NASA history, behind a thermal cover lost during STS-88 in 1998 and a camera mount that drifted from the Hubble servicing mission in 1997. The agency declined to confirm whether any personnel would face disciplinary review, citing an ongoing internal assessment. Senator Maria Cantwell, chair of the Senate Commerce Committee, called for a briefing on NASA’s tool retention procedures. A spokesperson for the agency said the matter was being handled at the appropriate level. No word yet on whether the wrench will receive a formal mission designation.",
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
					value={formData.authorPhotoURL} />
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
					<option value="newspaper">The YNN Times (Newspaper)</option>
					<option value="breaking">Breaking News (TV)</option>
					<option value="tech">Tech Blog</option>
					<option value="magazine">Magazine</option>
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