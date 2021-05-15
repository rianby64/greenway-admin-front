import { ACTIONS, SettingsState, UserAction } from "./reduxType"

const intialState: SettingsState = {
  currentFeature: {
    lat: 0,
    lng: 0
  },
  isSettingsShawn: false
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
    case ACTIONS.SET_CURRENT_FEATURE:
      return {
        ...state,
        currentFeature: action.payload,
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
