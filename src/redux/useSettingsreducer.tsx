import { ACTIONS, SettingsState, UserAction } from "../types/Types"

const intialState: SettingsState = {
  isSettingsShawn: false,
  usersRoutes: [],
  verifiedRoutes: [],
  notVerifiedRoutes: []
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
    case ACTIONS.SET_USERS_ROUTES:
      return {
        ...state,
        usersRoutes: action.payload
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
  pyaload: routes
})

export const setNotVerifiedRoutes = (routes: any[]) => ({
  type: ACTIONS.SET_NOT_VERIFIED_ROUTES,
  pyaload: routes
})

export const setUsersRoutes = (routes: any[]) => ({
  type: ACTIONS.SET_USERS_ROUTES,
  pyaload: routes
})
