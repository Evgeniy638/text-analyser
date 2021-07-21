import { IStateApp, ActionApp, ActionType } from './../types/typeApp';

const initialState: IStateApp = {
    indefecators: "",
    arrSavedText: []
}

export const reducerApp = (state:IStateApp = initialState, action: ActionApp): IStateApp => {
    switch (action.type) {
        case ActionType.DELETE_TEXTS:
            return {
                ...state,
                arrSavedText: []
            }
        case ActionType.CHANGE_INDEFECATORS:
            return {
                ...state,
                indefecators: action.indefecators
            }
        case ActionType.SAVE_TEXT:
            return {
                ...state,
                arrSavedText: [
                    ...state.arrSavedText,
                    action.savedText
                ]
            }
        default:
            return state
    }
}

