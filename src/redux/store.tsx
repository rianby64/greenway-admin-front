import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useRoutesReducer } from './useRoutesReducer';
import { useSettingsReducer } from './useSettingsreducer';

export const rootReducer = combineReducers({
  settings: useSettingsReducer,
  route: useRoutesReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
