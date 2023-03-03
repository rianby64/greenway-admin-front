import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useRoutesReducer } from './useRoutesReducer';
import { useSettingsReducer } from './useSettingsReducer';
import { useEditReducer } from './useEditRouteReducer';

export const rootReducer = combineReducers({
  settings: useSettingsReducer,
  route: useRoutesReducer,
  editing: useEditReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
