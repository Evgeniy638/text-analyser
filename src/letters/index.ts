// поддерживают языки:
// Russian, English,
// French, German,
// Polish, Italian 
// Spanish, Swedish
// Norwegian, Ukrainian
// Belarusian 
export const letters = {
    // получает строку, которое введено в input
    // возвращает множество уникальных чисел (индефекаторов)
    getArrIndefecators(indefecators: string): Set<number> {
        return new Set(
            indefecators
                .replace(/[^0-9,;-]/gi, "")
                .split(/[,;]/)
                .map(Number)
        );
    },

    // возвращает количество букв в text
    findCountLetters(text: string): number {
        const regexp = new RegExp([
            "[",
            "А-Я",
            "A-Z",
            "àâäôéèëêïîçùûüÿæœÀÂÄÔÉÈËÊÏÎŸÇÙÛÜÆŒ",
            "äöüßÄÖÜ",
            "ąćęłńóśźżĄĆĘŁŃÓŚŹŻ",
            "àèéìíîòóùúÀÈÉÌÍÎÒÓÙÚ",
            "áéíñóúüÁÉÍÑÓÚÜ",
            "äöåÄÖÅ",
            "æøåÆØÅ",
            "ЇїІіЄєҐґ",
            "ёа-зй-шы-яЁА-ЗЙ-ШЫІіЎў",
            "]"
        ].join(""), "gi");
        const letters = text.match(regexp);
        return letters ? letters.length : 0;
    },

    // возвращает количество глассных букв  в text
    findCountVowels(text: string): number {
        const regexp = new RegExp([
            "[",
            "ауоыиэяюёе",
            "AEIOUY",
            "àâäôéèëêïîçùûüÿæœÀÂÄÔÉÈËÊÏÎŸÇÙÛÜÆŒ",
            "äöüßÄÖÜ",
            "ąćęłńóśźżĄĆĘŁŃÓŚŹŻ",
            "àèéìíîòóùúÀÈÉÌÍÎÒÓÙÚ",
            "áéíóúüÁÉÍÓÚÜ",
            "äöåÄÖÅ",
            "æøåÆØÅ",
            "ЇїІіЄє",
            "ІіЎў",
            "]"
        ].join(""), "gi");
        const letters = text.match(regexp);
        return letters ? letters.length : 0;
    }
}
