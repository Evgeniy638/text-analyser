import { ActionApp, ActionType, ISavedText } from './../types/typeApp';
export const actionCreators = {
    changeIndefecators(indefecators: string): ActionApp {
        return {
            type: ActionType.CHANGE_INDEFECATORS,
            indefecators
        }
    },
    saveText(savedText: ISavedText): ActionApp {
        return {
            type: ActionType.SAVE_TEXT,
            savedText
        }
    },
    deleteTexts(): ActionApp {
        return {
            type: ActionType.DELETE_TEXTS
        }
    }
}
