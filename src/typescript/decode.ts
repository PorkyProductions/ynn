import { decode } from 'js-base64';
import { URLArticleProps } from './types';

export const decodeData = (base64: string): URLArticleProps => JSON.parse(decode(base64))