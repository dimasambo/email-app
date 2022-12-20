import {AuthData, User} from "../../types/types";
import {ActionsType} from "./auth-actions";

const initialState = {
    currentUser: null as User | null,
    authData: null as AuthData | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'AUTH/SET_CURRENT_USER':
            return {
                ...state,
                currentUser: {...action.payload.currentUser}
            }
        case 'AUTH/SET_AUTH_DATA':
            return {
                ...state,
                authData: {...action.payload.authData}
            }
        case 'AUTH/LOGOUT':
            return {
                ...state,
                currentUser: null,
                authData: null
            }
        default:
            return state;
    }
}

export default authReducer;