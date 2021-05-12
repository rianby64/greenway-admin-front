
interface SettingsState {
  currentFeature: object;
  isSettingsShawn: boolean;
}

interface UserAction {
  type: String;
  payload: any
}

enum ACTIONS  {
  SHAW_SETTINGS = 'SHOW_SETTINGS',
  HIDE_SETTINGS = 'HIDE_SETTINGS',
  SET_CURRENT_FEATURE = 'SET_CURRENT_FEATURE'
}

const intialState: SettingsState = {
  currentFeature: {},
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
    case ACTIONS.HIDE_SETTINGS:
      return {
        ...state,
        currentFeature: action.payload,
      }
    default:
      return state
  }
}

export const showSettings = () => ({
  type: ACTIONS.SHAW_SETTINGS,
  
});

export const hideSettings = () => ({
  type: ACTIONS.HIDE_SETTINGS
})
