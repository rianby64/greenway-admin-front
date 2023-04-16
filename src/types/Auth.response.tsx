import { User } from "./user";

export interface AuthResponse {
    accesstoken: string;
    refreshToken: string;
    user: User
}