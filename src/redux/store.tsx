import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useRoutesReducer } from './useRoutesReducer';
import { useSettingsReducer } from './useSettingsReducer';
import { useEditReducer } from './useEditRouteReducer';
import { useUserReducer } from './useUserReducer';
import { all, fork } from "redux-saga/effects";
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas/sagas';

const sagaMiddleWare = createSagaMiddleware();


export const rootReducer = combineReducers({
  settings: useSettingsReducer,
  route: useRoutesReducer,
  editing: useEditReducer,
  user: useUserReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
const saga = function* rootSaga() {
  yield all([...sagas].map(fork));
}
sagaMiddleWare.run(saga)

export type RootState = ReturnType<typeof rootReducer>;
