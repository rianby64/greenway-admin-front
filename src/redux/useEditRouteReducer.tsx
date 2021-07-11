
import { EDIT_ACTIONS, RouteToEdit, UserAction } from './../types/Types';

const initialSate: RouteToEdit = {
  animals: false,
  approve: false,
  categories: [],
  districts: [],
  children: false,
  description: '',
  difficulty: {},
  wheelchair: false,
  visuallyImpaired: false,
  distanceFromSource: 0,
  dots: [],
  durations: {},
  lines: [],
  minutes: 0,
  title: '',
  types: [],
  id: ''
}

export const useEditReducer = (state = initialSate, action: UserAction): RouteToEdit => {
  switch (action.type) {
    case EDIT_ACTIONS.SET_EDITING_ROUTE:
      return {
        ...state,
        animals: action.payload.animals,
        approve: action.payload.approved,
        categories: action.payload.categories,
        districts: action.payload.districts,
        children: action.payload.children,
        description: action.payload.description,
        difficulty: action.payload.difficulty,
        wheelchair: action.payload.wheelchair,
        visuallyImpaired: action.payload.visuallyImpaired,
        distanceFromSource: action.payload.distance,
        dots: action.payload.dots,
        durations: action.payload.durations,
        lines: action.payload.lines,
        minutes: action.payload.minutes,
        title: action.payload.title,
        types: action.payload.types,
        id: action.payload.id
      }
    case EDIT_ACTIONS.REMOVE_EDITING_ROUTE:
      return {
        ...initialSate
      }
    default:
      return state
  }
}

export const setEditingRouteToStore = (array) => ({
  type: EDIT_ACTIONS.SET_EDITING_ROUTE,
  payload: array
})

export const setDefaultState = () => ({
  type: EDIT_ACTIONS.REMOVE_EDITING_ROUTE
})
