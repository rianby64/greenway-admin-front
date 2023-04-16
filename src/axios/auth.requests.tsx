import { AuthResponse } from "../types/Auth.response"
import { api, firebase } from "./requests"

export const login = (email: string, password: string): void => {
    api.post<AuthResponse>(`${firebase}login`, { email, password }).then(() => {

    })
}

export const registration = (email: string, password: string): void => {
    api.post<AuthResponse>(`${firebase}registration`, { email, password }).then(() => {

    })
}

export const logout = (): void => {
    api.post<AuthResponse>(`${firebase}registration`).then(() => {

    })
}