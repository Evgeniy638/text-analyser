export interface ISavedText {
    id: number
    text: string
    numberWord: number
    numberVowels: number
}

export interface IStateApp {
    indefecators: string
    arrSavedText: ISavedText[]
}

export enum ActionType {
    CHANGE_INDEFECATORS = "CHANGE_INDEFECATORS",
    SAVE_TEXT = "SAVE_TEXT",
    DELETE_TEXTS = "DELETE_TEXTS"
}

interface IActionChangeIndefecators {
    type: ActionType.CHANGE_INDEFECATORS,
    indefecators: string
}

interface IActionSaveText {
    type: ActionType.SAVE_TEXT,
    savedText: ISavedText
}

interface IActionDeletTexts {
    type: ActionType.DELETE_TEXTS
}

export type ActionApp = IActionChangeIndefecators |
    IActionSaveText |
    IActionDeletTexts;
