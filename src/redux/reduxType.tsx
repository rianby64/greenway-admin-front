export interface PointRouteObj {
  lat: number,
  lng: number,
  name: String,
  descr: String,
  cattegories: Array<String>
}

export interface RoutesState {
  polilines: Array<Array<CurrFeat>>
  points: Array<PointRouteObj>
}

export interface CurrFeat {
  lat: number,
  lng: number,
}

export interface SettingsState {
  currentFeature: CurrFeat;
  isSettingsShawn: boolean;
}

export interface UserAction {
  type: String;
  payload: any
}

export enum ACTIONS {
  SHAW_SETTINGS = 'SHOW_SETTINGS',
  HIDE_SETTINGS = 'HIDE_SETTINGS',
  SET_CURRENT_FEATURE = 'SET_CURRENT_FEATURE',
  ADD_POLILNE = 'ADD_POLILINE',
  REMOVE_POLILINE = 'REMOVE_POLILINE',
  ADD_POINT = 'ADD_POINT',
  REMOVE_POINT = 'REMOVE_POINT',
  CLEAR_ROUTES = 'CLEAR_ROUTES'
}
