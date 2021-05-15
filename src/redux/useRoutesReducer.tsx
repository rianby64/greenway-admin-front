import { ACTIONS, PointRouteObj, RoutesState, UserAction } from "./reduxType"

const initialState: RoutesState = {
  polilines: [],
  points: [],
}

export const useRoutesReducer = (state = initialState, action: UserAction): RoutesState => {
  switch (action.type) {
    case ACTIONS.ADD_POINT:
      return {
        ...state,
        points: action.payload
      }
    case ACTIONS.ADD_POLILNE:
      const newArrPoli = state.polilines;
      newArrPoli.push(action.payload)
      return {
        ...state,
        polilines: newArrPoli
      }
    case ACTIONS.REMOVE_POINT:
      const newRemovedPointArr = state.points;
      newRemovedPointArr.map((el, ind, arr) => {
        let elementExist: boolean = false;
        action.payload.forEach((e) => {
          if (el.lat === e.lat) elementExist = true
        })
        if (elementExist) arr.splice(ind, 1);
        elementExist = true;
      })
      return {
        ...state,
        points: newRemovedPointArr
      }
    case ACTIONS.REMOVE_POLILINE:
      const newRemovedArrPoli = state.polilines.filter(function (el) {
        return action.payload.indexOf(el) < 0;
      });
      return {
        ...state,
        polilines: newRemovedArrPoli
      }
    case ACTIONS.CLEAR_ROUTES:
      return {
        points: [],
        polilines: []
      }
    default:
      return state
  }
}

export const addPoint = (pointToAdd: Array<PointRouteObj>) => ({
  type: ACTIONS.ADD_POINT,
  payload: pointToAdd
})

export const addPoliline = (polilineToAdd: Array<object>) => ({
  type: ACTIONS.ADD_POLILNE,
  payload: polilineToAdd
})

export const removePoint = (pointToRemove: Array<object>) => ({
  type: ACTIONS.REMOVE_POINT,
  payload: pointToRemove
})

export const removePoliline = (sortedArr: Array<object>) => ({
  type: ACTIONS.REMOVE_POLILINE,
  payload: sortedArr
})

export const clearRoute = () => ({
  type: ACTIONS.CLEAR_ROUTES
})