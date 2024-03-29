import { EDIT_ACTIONS, RouteToEdit, UserAction } from "./../types/Types";

const initialSate: RouteToEdit = {
  isUsers: false,
  animals: false,
  approve: false,
  categories: [],
  districts: [],
  children: false,
  description: "",
  difficulty: {},
  wheelchair: false,
  visuallyImpaired: false,
  distanceFromSource: 0,
  dots: [],
  durations: {},
  lines: [],
  minutes: 0,
  title: "",
  types: [],
  id: "",
  images: [],
  creator: {
    email: "",
    logo: "",
    name: "",
    phone: "",
    url: "",
  },
};

export const useEditReducer = (
  state = initialSate,
  action: UserAction
): RouteToEdit => {
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
        id: action.payload.id,
        images:
          action.payload.images === undefined
            ? initialSate.images
            : action.payload.images,
        creator:
          action.payload.creator !== undefined
            ? {
                email: action.payload.creator.email,
                logo: action.payload.creator.logo,
                name: action.payload.creator.name,
                phone: action.payload.creator.phone,
                url: action.payload.creator.url,
              }
            : initialSate.creator,
      };
    case EDIT_ACTIONS.REMOVE_EDITING_ROUTE:
      return {
        ...initialSate,
      };
    case EDIT_ACTIONS.SET_IS_USERS:
      return {
        ...state,
        isUsers: action.payload,
      };
    default:
      return state;
  }
};

export const setIsUsers = (value) => ({
  type: EDIT_ACTIONS.SET_IS_USERS,
  payload: value,
});

export const setEditingRouteToStore = (array) => ({
  type: EDIT_ACTIONS.SET_EDITING_ROUTE,
  payload: array,
});

export const setDefaultState = () => ({
  type: EDIT_ACTIONS.REMOVE_EDITING_ROUTE,
});

export const removeEditingRoute = () => ({
  type: EDIT_ACTIONS.REMOVE_EDITING_ROUTE
})