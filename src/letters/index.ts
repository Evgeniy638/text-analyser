import { ILanguageDictionary } from './languages/types';
import { languages } from './languages/index';

export const letters = {
    getArrIndefecators(indefecators: string): number[] {
        console.log(
            indefecators,
            indefecators.replace(/[^0-9,;]/gi, ""),
            indefecators.replace(/[^0-9,;]/gi, "").split(/[,;]/),
            indefecators.replace(/[^0-9,;]/gi, "").split(/[,;]/).map(Number)
        )
        return indefecators
            .replace(/[^0-9,;]/gi, "")
            .split(/[,;]/)
            .map(Number);
    },

    findCountLetters(text: string): number {
        // ищет буквы из любого алфавита вне зависимости от регистра
        const letters = text.match(/[\p{Alpha}]/gi);
        return letters ?letters.length :0;
    },

    // возвращает количество глассных букв (возможные гласные хранятся в словаре languages) в text
    findCountVowels(text: string): number {
        let count: number = 0;

        languages.forEach((lang: ILanguageDictionary) => {
            const letters = text.match(lang.vowels);
            count += letters ?letters.length :0;
        });


        return count;
    }
}