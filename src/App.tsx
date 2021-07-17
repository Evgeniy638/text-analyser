import React from 'react';
import './App.css';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { actionCreators } from './store/action-creators';
import { selectors } from './store/selectors';

function App() {
    const indefecators = useAppSelector(selectors.getIndefecators);
    const arrSavedText = useAppSelector(selectors.getSavedText);

    const dispatch = useAppDispatch();

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(actionCreators.changeIndefecators(e.target.value));
    }

    return (
        <div className="App">
            <div className="input-container">
                <label className="input-container__label">
                    <span className="input-container__label-text">Индефекаторы строк: </span>
                    <input value={indefecators} onChange={onChange} />
                </label>
                <button>Подсчитать</button>
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
