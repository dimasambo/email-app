import React, {FC, useEffect, useState} from "react";
import {StyledEmailsTable} from "./StyledEmailsTable";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Table} from "antd";
import {PaginationBox} from "./PaginationBox/PaginationBox";

type DataSource = {
    key: number,
    id: number,
    recipient: string,
    subject: string,
}

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Recipient',
        dataIndex: 'recipient',
        key: 'recipient',
    },
    {
        title: 'Subject',
        dataIndex: 'subject',
        key: 'subject',
    },
];

export const EmailsTable: FC = () => {
    const [dataSource, setDataSource] = useState<Array<DataSource>>([])
    const {emails} = useSelector((state: AppStateType) => state.email)

    useEffect(() => {
        if(emails) {
            const testDataSource: Array<DataSource> = []
            emails.results.forEach((item, index) => testDataSource
                .push({
                    key: index,
                    id: item.id,
                    recipient: item.recipient,
                    subject: item.subject
                }))
            setDataSource(testDataSource)
        }
    }, [emails])

    return <StyledEmailsTable>
        <Table dataSource={dataSource} columns={columns} pagination={{ position: []}} />
        <PaginationBox emails={emails} />
    </StyledEmailsTable>
}