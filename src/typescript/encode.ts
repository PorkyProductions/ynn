import { encodeURI } from 'js-base64';
import { URLArticleProps } from './types';

export const encodeData = (data: URLArticleProps) => encodeURI(JSON.stringify(data));
export default encodeData;
