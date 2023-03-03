import { ACTIONS, SettingsState, UserAction } from "../types/Types"

const intialState: SettingsState = {
  isSettingsShawn: false,
  allRoutes: [],
  usersRoutes: [],
  verifiedRoutes: [],
  notVerifiedRoutes: [],
  dotTypes: null,
  districts: null,
  routeDifficulties: null,
  routeCategories: null,
  routeTypes: null
}
export const useSettingsReducer = (state = intialState, action: UserAction): SettingsState => {
  switch (action.type) {
    case ACTIONS.SHAW_SETTINGS:
      return {
        ...state,
        isSettingsShawn: true
      }
    case ACTIONS.HIDE_SETTINGS:
      return {
        ...state,
        isSettingsShawn: false
      }
    case ACTIONS.SET_VERIFIED_ROUTES:
      return {
        ...state,
        verifiedRoutes: action.payload
      }
    case ACTIONS.SET_NOT_VERIFIED_ROUTES:
      return {
        ...state,
        notVerifiedRoutes: action.payload
      }
    case ACTIONS.SET_ALL_ROUTES:
      return {
        ...state,
        allRoutes: action.payload
      }
    case ACTIONS.SET_USERS_ROUTES:
      return {
        ...state,
        usersRoutes: action.payload
      }
    case ACTIONS.SET_DOT_TYPES:
      return {
        ...state,
        dotTypes: action.payload
      }
    case ACTIONS.SET_DISTRICTS:
      return {
        ...state,
        districts: action.payload
      }
    case ACTIONS.SET_ROUTE_DIFFICULTIES:
      return {
        ...state,
        routeDifficulties: action.payload
      }
    case ACTIONS.SET_ROUTE_CATEGORIES:
      return {
        ...state,
        routeCategories: action.payload
      }
    case ACTIONS.SET_ROUTE_TYPES:
      return {
        ...state,
        routeTypes: action.payload
      }
    default:
      return state
  }
}

export const showSettings = () => ({
  type: ACTIONS.SHAW_SETTINGS
});

export const hideSettings = () => ({
  type: ACTIONS.HIDE_SETTINGS
})

export const setCurrentFeature = (pointObj: object) => ({
  type: ACTIONS.SET_CURRENT_FEATURE,
  payload: pointObj
})

export const setVerifiedRoutes = (routes: any[]) => ({
  type: ACTIONS.SET_VERIFIED_ROUTES,
  payload: routes
})

export const setNotVerifiedRoutes = (routes: any[]) => ({
  type: ACTIONS.SET_NOT_VERIFIED_ROUTES,
  payload: routes
})

export const setAllRoutes = (routes: any[]) => ({
  type: ACTIONS.SET_ALL_ROUTES,
  payload: routes
})

export const setUsersRoutes = (routes: any[]) => ({
  type: ACTIONS.SET_USERS_ROUTES,
  payload: routes
})

export const setDotTypes = (data: any[]) => ({
  type: ACTIONS.SET_DOT_TYPES,
  payload: data
})

export const setDistricts = (data: any[]) => ({
  type: ACTIONS.SET_DISTRICTS,
  payload: data
})

export const setRouteDifficulties = (data: any[]) => ({
  type: ACTIONS.SET_ROUTE_DIFFICULTIES,
  payload: data
})

export const setCategories = (data: any[]) => ({
  type: ACTIONS.SET_ROUTE_CATEGORIES,
  payload: data
})

export const setRouteTypes = (data: any[]) => ({
  type: ACTIONS.SET_ROUTE_TYPES,
  payload: data
})
