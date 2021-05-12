import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useSettingsReducer } from './reducer';

export const rootReducer = combineReducers({
  settings: useSettingsReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
