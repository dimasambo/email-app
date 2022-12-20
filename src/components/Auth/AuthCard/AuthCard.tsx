import React, {FC} from "react";
import * as constants from '../../../constants/constants'
import signIn from '../../../assets/media/signIn.jpg'
import signUp from '../../../assets/media/signUp.jpg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {StyledAuthCard} from "./StyledAuthCard";
import {Button, Card} from "antd";

type PropsType = {
    type: 'signIn' | 'signUp'
}

export const AuthCard: FC<PropsType> = ({type}) => {
    const {authData} = useSelector((state: AppStateType) => state.auth)

    return <StyledAuthCard>
        <Card title={type === 'signUp' ? constants.signUp : constants.signIn} bordered={false} style={{width: 300}}>
            <p>
                {type === 'signUp'
                    ? constants.signUpMoreInfo
                    : constants.signInMoreInfo
                }
            </p>
            <Link to={type === 'signIn' && authData
                ? '/emails'
                : (type === 'signUp' ? '/sign-up' : '/sign-in')}>
                <Button type="primary">
                    {type === 'signUp' ? constants.signUp : constants.signIn}
                </Button>
            </Link>
        </Card>
    </StyledAuthCard>
}