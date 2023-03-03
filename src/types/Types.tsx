export interface RouteToEdit {
  isUsers: boolean;
  animals: boolean;
  approve: boolean;
  categories: Array<any>;
  districts: Array<any>;
  children: boolean;
  description: string;
  difficulty: any;
  wheelchair: boolean;
  visuallyImpaired: boolean;
  distanceFromSource: number;
  dots: Array<any>;
  durations: any;
  lines: Array<CurrFeat>;
  minutes: number;
  title: string;
  types: Array<any>;
  id: string;
  images: Array<any>;
  creator: {
    email: string;
    logo: string;
    name: string;
    phone: string;
    url: string;
  };
}
export interface PointForm {
  id: string;
  name: string;
  description: string;
  // categories: Array<String>;
  categories: String;
  images: any[];
}

export interface DescrSelect {
  form: PointForm;
  setForm: React.Dispatch<React.SetStateAction<PointForm>>;
  dotTypes: Array<any>;
}

export interface DescrInput {
  form: PointForm;
  setForm: React.Dispatch<React.SetStateAction<PointForm>>;
}
export interface SaveInputs {
  saveForm: SaveForm;
  setSaveForm: React.Dispatch<React.SetStateAction<SaveForm>>;
  routeCat: any;
  routeDif: any;
  routeTypes: any;
}
export interface SaveSelector {
  saveForm: SaveForm;
  setSaveForm: React.Dispatch<React.SetStateAction<SaveForm>>;

}

export interface SaveDurations {
  array: Array<any>;
  saveForm: SaveForm;
  setSaveForm: React.Dispatch<React.SetStateAction<SaveForm>>;
}
export interface SaveSwitches {
  saveForm: SaveForm;
  setSaveForm: React.Dispatch<React.SetStateAction<SaveForm>>;
}

export interface Checkboxes {
  array: Array<any>;
  label?: string;
}

export interface SaveSelectors {
  saveForm: SaveForm;
  setSaveForm: React.Dispatch<React.SetStateAction<SaveForm>>;
  routeTypes: Array<any>;
  routeDif: Array<any>;
  routeCat: Array<any>;
}

export interface SaveForm {
  title: string;
  description: string;
  difficulty: string;
  minutes: number;
  animals: boolean;
  children: boolean;
  wheelChair: boolean;
  visuallyImpaired: boolean;
  approved: boolean;
  durations: Array<any>;
  categories: Array<string>;
  districts: Array<any>;
  type: Array<any>;
  images: Array<any>;
  creator: {
    email: string;
    logo: string;
    name: string;
    phone: string;
    url: string;
  };
}

export interface TypesCheckboxesInterface {
  array: Array<any>;
  seter: React.Dispatch<React.SetStateAction<any[]>>;
  setSaveForm: React.Dispatch<React.SetStateAction<SaveForm>>;
  saveForm: SaveForm;
}
export interface CurrFeat {
  lat: number;
  lng: number;
}

export type DescriptionProps = {
  currentFeature: CurrFeat;
};

export type SaveRouteType = {
  isShawn: Boolean;
  setIsShawn: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
};

export interface PointRouteObj {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  title: String;
  description: String;
  // categories: Array<String>
  type: String;
  images: any[];
}

export interface RoutesState {
  currentFeature: CurrFeat;
  polilines: Array<CurrFeat>;
  points: Array<PointRouteObj>;
  distance: number;
}

export interface CurrFeat {
  lat: number;
  lng: number;
}

export interface SettingsState {
  isSettingsShawn: boolean;
  usersRoutes: any[];
  verifiedRoutes: any[];
  notVerifiedRoutes: any[];
  allRoutes: any[];
  dotTypes: any[] | null;
  districts: any[] | null;
  routeDifficulties: any[] | null;
  routeCategories: any[] | null;
  routeTypes: any[] | null
}

export interface UserAction {
  type: String;
  payload: any;
}

export interface LayerObject {
  mapAttribution: string;
  mapLayersUrl: string;
  name: string;
}

export enum ACTIONS {
  SHAW_SETTINGS = "SHOW_SETTINGS",
  HIDE_SETTINGS = "HIDE_SETTINGS",
  SET_CURRENT_FEATURE = "SET_CURRENT_FEATURE",
  ADD_POLILNE = "ADD_POLILINE",
  REMOVE_POLILINE = "REMOVE_POLILINE",
  ADD_POINT = "ADD_POINT",
  REMOVE_POINT = "REMOVE_POINT",
  CLEAR_ROUTES = "CLEAR_ROUTES",
  EDIT_POINT = "EDIT_POINT",
  SET_DISTANCE = "SET_DISTANCE",
  SET_DISTANCE_ZERO = "SET_DISTANCE_ZERO",
  SWITCH_MAP_LAYER = "SWITCH_MAP_LAYER",
  SET_VERIFIED_ROUTES = "SET_VERIFIED_ROUTES",
  SET_NOT_VERIFIED_ROUTES = "SET_NOT_VERIFIED_ROUTES",
  SET_USERS_ROUTES = "SET_USERS_ROUTES",
  SET_ALL_ROUTES = "SET_All_ROUTES",
  SET_DOT_TYPES = "SET_DOT_TYPES",
  SET_DISTRICTS = "SET_DISTRICTS",
  SET_ROUTE_CATEGORIES = "SET_ROUTE_CATEGORIES",
  SET_ROUTE_TYPES = "SET_ROUTE_TYPES",
  SET_ROUTE_DIFFICULTIES = "SET_ROUTE_DIFFICULTIES"
}

export enum EDIT_ACTIONS {
  SET_EDITING_ROUTE = "SET_EDITING_ROUTE",
  REMOVE_EDITING_ROUTE = "REMOVE_EDITING_ROUTE",
  SET_IS_USERS = "SET_IS_USERS",
}
