import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {AuthData, Emails, NewEmail} from "../../types/types";
import {api} from "../../api/api";

export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setEmails: (emails: Emails) => (
        {
            type: 'EMAIL/SET_EMAILS',
            payload: {emails}
        } as const
    ),
    setEmailDeliveryStatus: (status: boolean) => (
        {
            type: 'EMAIL/SET_EMAIL_DELIVERY_STATUS',
            payload: {status}
        } as const
    )
}

type ThunkType = BaseThunkType<ActionsType>

export const sendEmail = (email: NewEmail, username: string, password: string): ThunkType => {
    return async (dispatch, getState) => {
        const authData: AuthData | null = getState().auth.authData
        if(authData) {
            try {
                await api.sendEmail(email, authData)
                dispatch(actions.setEmailDeliveryStatus(true))
            } catch (e) {
                dispatch(actions.setEmailDeliveryStatus(true))
            }
        }
    }
}

export const getEmails = (url?: string): ThunkType => {
    return async (dispatch, getState) => {
        const authData: AuthData | null = getState().auth.authData
        let data = {} as Emails
        if(authData) {
            data = await api.getEmails(authData, url);
        }
        dispatch(actions.setEmails(data))
    }
}