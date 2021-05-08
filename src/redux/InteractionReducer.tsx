import GeometryType from "ol/geom/GeometryType";

interface action {
  type: string;
  payload?: any;
}

interface InteractionState {
  currentInteraction: String;
}

const ACTION_CONST = {
  CHANGE_INTERACTION: 'CHANGE_INTERACTION',
};

const DEFAULT_VALUES = {
  POINT: 'Correction',
};

let initialState: InteractionState = {
  currentInteraction: DEFAULT_VALUES.POINT,
};

const InteractionReducer = (state = initialState , action: action):InteractionState => {
  switch (action.type) {
    case ACTION_CONST.CHANGE_INTERACTION: {
      return {
        ...state,
        currentInteraction: action.payload,
      };
    }
    default:
      return state;
  }
};

export const changeCurrent = (selectedInteraction: GeometryType) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: ACTION_CONST.CHANGE_INTERACTION,
        payload: selectedInteraction,
      })
    }catch (e) {
      console.log(e);
    }
  }
};

export default InteractionReducer
