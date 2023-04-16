export interface User {
    email: string;
    id: string;
    role: string
}

export interface UserAction {
    type: String;
    payload: any;
  }