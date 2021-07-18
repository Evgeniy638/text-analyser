import { rus } from './rus';
import { ILanguageDictionary } from './types';

const languages: Map<string, ILanguageDictionary> = new Map();
languages.set("rus", rus);
export { languages };

export type { ILanguageDictionary };
