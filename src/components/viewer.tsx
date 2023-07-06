import type { URLArticleProps } from '@/typescript/types';

export default (data: URLArticleProps) => (
	<div>
		<h1 className="text-center font-extrabold">
			{data.title}
		</h1>
		<article>
			{data.article}
		</article>
	</div>
);
