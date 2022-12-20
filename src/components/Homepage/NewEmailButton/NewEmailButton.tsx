import { Button } from "antd";
import React, {FC} from "react";
import { Link } from "react-router-dom";
import {StyledNewEmailButton} from "./StyledNewEmailButton";
import * as constants from '../../../constants/constants'

export const NewEmailButton: FC = () => {

    return <StyledNewEmailButton>
        <Link to={'/send-email'}>
            <Button type="primary">{constants.newEmail}</Button>
        </Link>
    </StyledNewEmailButton>
}