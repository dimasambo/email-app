import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {AuthData, NewUser, User} from "../../types/types";
import {api} from "../../api/api";

export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setCurrentUser: (currentUser: User) => (
        {
            type: 'AUTH/SET_CURRENT_USER',
            payload: {currentUser}
        } as const
    ),
    setAuthData: (authData: AuthData) => (
        {
            type: 'AUTH/SET_AUTH_DATA',
            payload: {authData}
        } as const
    ),
    logout: () => (
        {
            type: 'AUTH/LOGOUT'
        } as const
    )
}

type ThunkType = BaseThunkType<ActionsType>

export const getCurrentUser = (username: string, password: string): ThunkType => {
    return async (dispatch) => {
        const data: User = await api.getCurrentUser(username, password);
        dispatch(actions.setCurrentUser(data));
    }
}

export const createUser = (user: NewUser): ThunkType => {
    return async (dispatch) => {
        await api.setUser(user);
        dispatch(actions.setAuthData({username: user.username, password: user.password}));
    }
}