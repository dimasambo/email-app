import {NewUser, CreatedUser, User, Emails, NewEmail, Email, AuthData} from "../types/types";
import axios from "axios";

export const api = {
    getCurrentUser(username: string, password: string) {
        console.log(username, password)
        return axios.get<User>(`http://68.183.74.14:4005/api/users/current/`, {
            auth: {
                username: username,
                password: password
            }
        })
            .then(response => response.data)
    },
    setUser(user: NewUser) {
        return axios.post<CreatedUser>(`http://68.183.74.14:4005/api/users/`, user)
            .then(response => response.data)
    },
    getEmails(authData: AuthData, url = 'http://68.183.74.14:4005/api/emails/') {
        return axios.get<Emails>(url, {
            auth: {
                username: authData.username,
                password: authData.password
            }
        })
            .then(response => response.data)
    },
    sendEmail(email: NewEmail, authData: AuthData) {
        return axios.post<Email>(`http://68.183.74.14:4005/api/emails/`, email, {
            auth: {
                username: authData.username,
                password: authData.password
            }
        })
            .then(response => response.data)
    }
}