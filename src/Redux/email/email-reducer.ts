import {Emails} from "../../types/types";
import {ActionsType} from "./email-actions";

const initialState = {
    emails: null as Emails | null,
    isEmailSent: false
}

export type InitialStateType = typeof initialState

const emailReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'EMAIL/SET_EMAILS':
            return {
                ...state,
                emails: {...action.payload.emails}
            }
        case 'EMAIL/SET_EMAIL_DELIVERY_STATUS':
            return {
                ...state,
                isEmailSent: action.payload.status
            }
        default:
            return state;
    }
}

export default emailReducer;
