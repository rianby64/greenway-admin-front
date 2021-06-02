import { ACTIONS, PointRouteObj, RoutesState, UserAction } from "../types/Types"

const initialState: RoutesState = {
  currentFeature: {
    lat: 0,
    lng: 0
  },
  polilines: [],
  points: [],
  distance: 0,
  
}

export const useRoutesReducer = (state = initialState, action: UserAction): RoutesState => {
  switch (action.type) {
    case ACTIONS.ADD_POINT:
      return {
        ...state,
        points: action.payload
      }
    case ACTIONS.ADD_POLILNE:
      const newArrPoli = action.payload
      // const newArrPoli = state.polilines;
      // newArrPoli.push(action.payload)
      return {
        ...state,
        polilines: newArrPoli
      }
    case ACTIONS.REMOVE_POINT:
      const newRemovedPointArr = state.points;
      newRemovedPointArr.map((el, ind, arr) => {
        let elementExist: boolean = false;
        action.payload.forEach((e) => {
          if (el.position.lat === e.lat) elementExist = true
        })
        if (elementExist) arr.splice(ind, 1);
        elementExist = true;
      })
      return {
        ...state,
        points: newRemovedPointArr
      }
    case ACTIONS.REMOVE_POLILINE:
      return {
        ...state,
        polilines: []
      }
    case ACTIONS.CLEAR_ROUTES:
      return {
        ...state,
        points: [],
        polilines: []
      }
    case ACTIONS.SET_DISTANCE_ZERO:
      return {
        ...state,
        distance: 0
      }
    case ACTIONS.EDIT_POINT:
      const editedArrayOfPoints = state.points;
      editedArrayOfPoints.map((el) => {
        if (el.position.lat === state.currentFeature.lat && state.currentFeature.lng) {
          el.position.lat = action.payload.lat;
          el.position.lng = action.payload.lng;
        }
      })

      return {
        ...state,
        points: editedArrayOfPoints
      }
    case ACTIONS.SET_DISTANCE:
      return {
        ...state,
        distance: action.payload
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

export const editPoint = (pointToEdit: object) => ({
  type: ACTIONS.EDIT_POINT,
  payload: pointToEdit
})

export const removePoliline = (sortedArr: Array<object>) => ({
  type: ACTIONS.REMOVE_POLILINE,
  payload: sortedArr
})

export const clearRoute = () => ({
  type: ACTIONS.CLEAR_ROUTES
})

export const setRouteDistance = (dist: number) => ({
  type: ACTIONS.SET_DISTANCE,
  payload: dist
})

export const setDistanceZero = () => ({
  type: ACTIONS.SET_DISTANCE_ZERO
})