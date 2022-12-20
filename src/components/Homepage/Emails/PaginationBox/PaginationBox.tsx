import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {getEmails} from "../../../../Redux/email/email-actions";
import {Button} from "antd";
import {StyledPaginationBox} from "./StyledPaginationBox";
import {Emails} from "../../../../types/types";

type PropsType = {
    emails: Emails | null
}

export const PaginationBox: FC<PropsType> = ({emails}) => {
    const dispatch = useDispatch()

    const onPaginationClick = (type: 'next' | 'prev') => {
        if(emails && ((type === "next" && emails.next) || (type === 'prev' && emails.previous))) {
            const url: string = type === "next" ? emails.next : emails.previous
            // @ts-ignore
            dispatch(getEmails(url))
        }
    }

    return <StyledPaginationBox>
        <Button onClick={() => onPaginationClick("prev")} disabled={!emails?.previous}>
            <span className={'prev'}></span>
        </Button>
        <Button onClick={() => onPaginationClick("next")} disabled={!emails?.next}>
            <span className={'next'}></span>
        </Button>
    </StyledPaginationBox>
}