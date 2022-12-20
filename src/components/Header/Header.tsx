import React, {FC} from "react";
import {StyledHeader} from "./StyledHeader";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import * as constants from '../../constants/constants'
import {actions} from "../../Redux/auth/auth-actions";
import {Button} from "antd";

export const Header: FC = () => {
    const currentUser = useSelector((state: AppStateType) => state.auth.currentUser)
    const dispatch = useDispatch()

    return <StyledHeader>
        <div className={'logoName'}>{constants.logoName}</div>
        {currentUser && <div className={'infoWrapper'}>
            <div className={'userInfo'}>
                <div>{currentUser.username}</div>
                <div className={'email'}>{currentUser.email}</div>
            </div>
            <Link to={'/auth'}>
                <Button onClick={() => dispatch(actions.logout())} type="primary">{constants.logOut}</Button>
            </Link>
        </div>
        }
    </StyledHeader>
}