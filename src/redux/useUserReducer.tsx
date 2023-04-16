import { USERACTION, UserAction } from "../types/Types";
import { User } from "../types/user";

const initialState: User = {
    id: "",
    email: "",
    role: ""
}

export const useUserReducer = (state = initialState, action: UserAction): User => {
    switch (action.type) {
        case USERACTION.SET_USER:
            return {
                ...action.payload,
            }
        default:
            return {
                ...state
            }
    }
}

export const setUser = (user: any[]) => ({
    type: USERACTION.SET_USER,
    payload: user
})

export const getUser = () => ({
    type: USERACTION.GET_USER
})