import {FC} from "react";
import {StyledCheckout} from './StyledCheckout'
import {AuthCard} from "./AuthCard/AuthCard";

export const Checkout: FC = () => {
    return <StyledCheckout>
            <AuthCard type={'signIn'} />
            <AuthCard type={'signUp'} />
    </StyledCheckout>
}