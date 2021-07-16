export interface ISavedText {
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
    SAVE_TEXT = "SAVE_TEXT"
}

interface IActionChangeIndefecators {
    type: ActionType.CHANGE_INDEFECATORS,
    indefecators: string
}

interface IActionSaveText {
    type: ActionType.SAVE_TEXT,
    savedText: ISavedText
}

export type ActionApp = IActionChangeIndefecators |
    IActionSaveText;
