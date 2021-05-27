export interface PointForm {
  name: string;
  description: string,
  // categories: Array<String>;
  categories: String
}

export interface DescrSelect {
  form: PointForm,
  setForm: React.Dispatch<React.SetStateAction<PointForm>>,
  dotTypes: Array<any>
}

export interface DescrInput {
  form: PointForm,
  setForm: React.Dispatch<React.SetStateAction<PointForm>>
}
export interface SaveInputs {
  saveForm: SaveForm,
  setSaveForm: React.Dispatch<React.SetStateAction<SaveForm>>
}

export interface SaveDurations {
  saveForm: SaveForm,
  setSaveForm: React.Dispatch<React.SetStateAction<SaveForm>>
}
export interface SaveSwitches {
  saveForm: SaveForm,
  setSaveForm: React.Dispatch<React.SetStateAction<SaveForm>>
}
export interface SaveSelectors {
  saveForm: SaveForm,
  setSaveForm: React.Dispatch<React.SetStateAction<SaveForm>>,
  routeTypes: Array<any>,
  routeDif: Array<any>,
  routeCat: Array<any>
}

export interface SaveForm {
  title: string,
  description: string,
  difficulty: string,
  minutes: number,
  animals: boolean,
  children: boolean,
  disabilities: boolean,
  approved: boolean,
  durations: Array<{
    name: string,
    number: number
  }>,
  categories: Array<string>,
  type: Array<{
    title: string,
    rus: string
  }>,
}

export interface CurrFeat {
  lat: number;
  lng: number
}

export type DescriptionProps = {
  currentFeature: CurrFeat
}

export type SaveRouteType = {
  isShawn: Boolean;
  setIsShawn: React.Dispatch<React.SetStateAction<boolean>>
}

export interface PointRouteObj {
  position: {
    lat: number,
    lng: number
  },
  title: String,
  description: String,
  // categories: Array<String>
  type: String;
}

export interface RoutesState {
  currentFeature: CurrFeat,
  polilines: Array<CurrFeat>,
  points: Array<PointRouteObj>,
  distance: number,
}

export interface CurrFeat {
  lat: number,
  lng: number,
}

export interface SettingsState {
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
  CLEAR_ROUTES = 'CLEAR_ROUTES',
  EDIT_POINT = 'EDIT_POINT',
  SET_DISTANCE = 'SET_DISTANCE',
  SET_DISTANCE_ZERO = 'SET_DISTANCE_ZERO',
}
