import pkg from "../../package.json";
const year = new Date().getFullYear();


export const NAME = "You're Not Newsworthy!"
export const ABBR = "YNN"
export const DESC = "Make up your own news. News flash! You're not actually that interesting. Now you can fix that!"
export const { version } = pkg;
export const url = 'https://ynn.vercel.app';
export const parentCompany = `(de)Motivator`;
export const banner = `
******************************
${NAME} v${version}
Copyright (c) 2023-${year}, 
${parentCompany},
PorkyProductions,
Ryan Mullin, 
and contributors
******************************
`;