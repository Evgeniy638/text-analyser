import React, { useCallback } from 'react';
import { apiTextstrings } from './api';
import './App.css';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { letters } from './letters';
import { actionCreators } from './store/action-creators';
import { selectors } from './store/selectors';
import { ISavedText } from './store/types/typeApp';

function App() {
    const indefecators = useAppSelector(selectors.getIndefecators);
    const arrSavedText = useAppSelector(selectors.getSavedText);

    const dispatch = useAppDispatch();

    const saveText = useCallback((savedText: ISavedText) => {
        dispatch(actionCreators.saveText(savedText));
    }, [dispatch]);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(actionCreators.changeIndefecators(e.target.value));
    }

    const onClickCalc: React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(actionCreators.deleteTexts());

        letters.getArrIndefecators(indefecators).forEach(async (id) => {
            const text = await apiTextstrings.getTextById(id);
            
            saveText({
                text,
                numberVowels: letters.findCountVowels(text),
                numberWord: letters.findCountLetters(text)
            });
        });
    }

    return (
        <div className="App">
            <div className="input-container">
                <label className="input-container__label">
                    <span className="input-container__label-text">Индефекаторы строк: </span>
                    <input value={indefecators} onChange={onChange} />
                </label>
                <button className="input-container__button" onClick={onClickCalc}>Подсчитать</button>
            </div>

            <table className="table">
                <tbody>
                    <tr>
                        <th className="table__td table__text-cell">Текст</th>
                        <th className="table__td table__number-cell">
                            <span className="table__element table__element_mobile">Кол. слов</span>
                            <span className="table__element table__element_desktop">Количество слов</span>
                        </th>
                        <th className="table__td table__number-cell">
                            <span className="table__element table__element_mobile">Кол. гласных</span>
                            <span className="table__element table__element_desktop">Количество гласных</span>
                        </th>
                    </tr>
                    {
                        arrSavedText.map(savedText => (
                            <tr>
                                <td className="table__td table__text-cell">{savedText.text}</td>
                                <td className="table__td table__number-cell">{savedText.numberWord}</td>
                                <td className="table__td table__number-cell">{savedText.numberVowels}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;
