import type { URLArticleProps } from '@/typescript/types';
import ClassicTemplate from '@components/templates/ClassicTemplate';
import YNNTemplate from '@components/templates/YNNTemplate';
import NewspaperTemplate from '@components/templates/NewspaperTemplate';
import BreakingNewsTemplate from '@components/templates/BreakingNewsTemplate';
import TechTemplate from '@components/templates/TechTemplate';
import MagazineTemplate from '@components/templates/MagazineTemplate';

export default function Viewer(urlData: URLArticleProps) {
  if (!urlData) throw new Error('Article not found');

  switch (urlData.theme) {
    case 'classic':
      return <ClassicTemplate {...urlData} />;
    case 'YNN':
      return <YNNTemplate {...urlData} />;
    case 'newspaper':
      return <NewspaperTemplate {...urlData} />;
    case 'breaking':
      return <BreakingNewsTemplate {...urlData} />;
    case 'tech':
      return <TechTemplate {...urlData} />;
    case 'magazine':
      return <MagazineTemplate {...urlData} />;
    default:
      throw new Error(`Unknown theme: ${(urlData as URLArticleProps).theme}`);
  }
}
