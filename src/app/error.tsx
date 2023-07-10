'use client';

import { randomInArray } from '@porkyproductions/hat/randomInArray';
// Error components must be Client components
import { useEffect } from 'react';

const mistakes = [
	"Blunder",
	"Mistake",
	"Error",
	"Fault",
	"Inaccuracy",
	"Omission",
	"Slip",
	"Slip-up",
	"Miscalculation",
	"Misunderstanding",
	"Flaw",
	"Oversight",
	"Fallacy",
]
const icons = [
	"cone",
	"cone-striped",
	"dash-circle",
	"dash-circle-dotted",
	"dash-circle-fill",
	"dash-square",
	"dash-square-dotted",
	"exclamation-triangle",
	"exclamation-triangle-fill",
	"exclamation",
	"exclamation-circle",
	"exclamation-diamond",
	"exclamation-diamond-fill",
	"exclamation-lg",
	"exclamation-octagon",
	"exclamation-octagon-fill",
	"exclamation-square",
	"exclamation-square-fill",
	"hand-thumbs-down",
	"emoji-frown"
]

export default function Error({
	error,
	reset,
}: {
    error: Error;
    reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className=''>
			<div className='flex content-center justify-center p-4 text-9xl text-red-600'>
				<i className={`bi bi-${randomInArray(icons)}`}></i>
			</div>
			<h2 className='text-center font-bold text-4xl text-red-600'>{randomInArray(mistakes)}!</h2>
			<h3 className='text-center text-red-800'>{error.message}</h3>
			<div className='flex content-center justify-center p-4'>
				<button
					className='btn btn-danger'
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
				>
                    Retry
				</button>
			</div>
		</div>
	);
}
