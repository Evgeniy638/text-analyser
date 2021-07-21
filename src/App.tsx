import React, { useCallback, useState } from 'react';
import { apiTextstrings } from './api';
import './App.css';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { letters } from './letters';
import { actionCreators } from './store/action-creators';
import { selectors } from './store/selectors';
import { ISavedText } from './store/types/typeApp';

function App() {
    const [arrErrorId, setArrErrorId] = useState<number[]>([]);
    const [errorMessageFromServer, setErrorMessageFromServer] = useState<string>("");

    const indefecators = useAppSelector(selectors.getIndefecators);
    const arrSavedText = useAppSelector(selectors.getSavedText);

    const dispatch = useAppDispatch();

    const saveText = useCallback((savedText: ISavedText) => {
        dispatch(actionCreators.saveText(savedText));
    }, [dispatch]);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(actionCreators.changeIndefecators(e.target.value));
    }

    const calculate = () => {
        dispatch(actionCreators.deleteTexts());

        const arrIndefecators: Set<number> = letters.getArrIndefecators(indefecators);

        arrIndefecators.forEach(async (id) => {
            if (id < 1 || id > 20) {
                setArrErrorId(arrErrorId => [...arrErrorId, id]);
                return;
            }

            apiTextstrings.getTextById(id)
                .then(text => {
                    saveText({
                        id,
                        text,
                        numberVowels: letters.findCountVowels(text),
                        numberWord: letters.findCountLetters(text)
                    });
                })
                .catch(reason => {
                    setErrorMessageFromServer(reason);
                });
        });
    }

    const onClickCalc: React.MouseEventHandler<HTMLButtonElement> = () => {
        calculate();
    }

    const onKeyPress = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
        setArrErrorId([]);

        if (key === "Enter") {
            calculate();
            return;
        }
    }

    return (
        <div className="App">
            <div className="input-container">
                <label className="input-container__label">
                    <span className="input-container__label-text">Индефекаторы строк: </span>
                    <input
                        className={`
                            input-container__inpunt
                            ${arrErrorId.length > 0 ? "input-container__inpunt_error" : ""}
                        `}
                        value={indefecators}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                </label>
                <button
                    className="input-container__button"
                    onClick={onClickCalc}
                >Подсчитать</button>
            </div>

            {
                arrErrorId.length > 0 &&
                <p className="error-message">
                    Неккоректные индефекаторы: {arrErrorId.join(", ")}.
                    <br />
                    Идентификатор строки является целым числом и может принимать значения в диапазоне от 1 до 20
                </p>
            }

            {
                errorMessageFromServer &&
                <p className="error-message">
                    {errorMessageFromServer}
                </p>
            }

            {
                arrSavedText.length > 0 &&
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
                                <tr key={savedText.id}>
                                    <td className="table__td table__text-cell">{savedText.text}</td>
                                    <td className="table__td table__number-cell">{savedText.numberWord}</td>
                                    <td className="table__td table__number-cell">{savedText.numberVowels}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}

export default App;
