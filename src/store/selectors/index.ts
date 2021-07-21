import { RootState } from ".."
import { ISavedText } from "../types/typeApp";

export const selectors = {
    getIndefecators(state: RootState): string {
        return state.indefecators;
    },
    getSavedText(state: RootState): ISavedText[] {
        return state.arrSavedText;
    }
}
