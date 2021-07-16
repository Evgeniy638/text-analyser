import { reducerApp } from './reducers/reducerApp';
import { configureStore, ThunkAction, Action, createStore } from '@reduxjs/toolkit';

export const store = createStore(reducerApp);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
