import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {StyledHomepage} from "./StyledHomepage";
import {getCurrentUser} from "../../Redux/auth/auth-actions";
import {getEmails} from "../../Redux/email/email-actions";
import {NewEmailButton} from "./NewEmailButton/NewEmailButton";
import {EmailsTable} from "./Emails/EmailsTable";

export const Homepage: FC = () => {
    const {authData} = useSelector((state: AppStateType) => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        if(authData) {
            // @ts-ignore
            dispatch(getCurrentUser(authData.username, authData.password))
            // @ts-ignore
            dispatch(getEmails())
        }
    }, [authData])

    return <StyledHomepage>
        <NewEmailButton />
        <EmailsTable />
    </StyledHomepage>
}