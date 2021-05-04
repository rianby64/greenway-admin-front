interface action {
  type: string;
  payload?: any;
}

interface pointsState {
  currentPoint: any[];
  prevPoint: any[];
}

const ACTION_CONST = {
  CHANGE_CURRENT_POINT: 'CHANGE_CURRENT_POINT',
  CHANGE_PREV_POINT: 'CHANGE_PREV_POINT',
};

const DEFAULT_VALUES = {
  ZERO: [0],
};

let initialState: pointsState = {
  currentPoint: DEFAULT_VALUES.ZERO,
  prevPoint: DEFAULT_VALUES.ZERO,
};

const pointsReducer = (state = initialState , action: action): pointsState => {
  switch (action.type) {
    case ACTION_CONST.CHANGE_CURRENT_POINT: {
      return {
        ...state,
        currentPoint: action.payload,
      };
    }
    case ACTION_CONST.CHANGE_PREV_POINT: {
      return {
        ...state,
        prevPoint: action.payload,
      };
    }
    default:
      return state;
  }
};

export const changeCurrent = (currentPoint: Array<number>) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: ACTION_CONST.CHANGE_CURRENT_POINT,
        payload: currentPoint
      })
    }catch (e) {
      alert(e)
    }
  }
};

export const changePrev = (prevPoint: Array<number>) => {
  return async (dispatch) => {
    try{
      dispatch({
        type: ACTION_CONST.CHANGE_PREV_POINT,
        payload: prevPoint
      })
    }catch (e) {
      alert(e)
    }
  }
};

export default pointsReducer