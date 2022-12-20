import React, {FC, useState} from "react";
import {StyledSendEmail} from "./StyledSendEmail";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import * as yup from "yup";
import {actions, sendEmail} from "../../Redux/email/email-actions";
import {Redirect} from "react-router-dom";
import 'draft-js/dist/Draft.css';
import RTEditor from "./RTEditor/RTEditor";
import * as constants from '../../constants/constants'

type InitialValuesFormType = {
    recipientEmail: string
    topic: string
}

const validationSchema = yup.object().shape({
    recipientEmail: yup.string()
        .required('Required')
        .email('Invalid email address')
        .max(150, 'Login should be less, than 150 chars'),
    topic: yup.string()
        .required('Required')
        .max(150, 'Login should be less, than 150 chars')
})

export const SendEmail: FC = () => {
    const [content, setContent] = useState({} as {blocks: Array<{text: string}>})

    const currentUser = useSelector((state: AppStateType) => state.auth.currentUser)
    const {isEmailSent} = useSelector((state: AppStateType) => state.email)

    const [formValues, setFormValues] = useState({} as InitialValuesFormType)

    const dispatch = useDispatch()

    const handleSubmit = (values: InitialValuesFormType) => {
        if(content.blocks) {
            let message = ''
            content.blocks.forEach((item: any) => {
                message = [message, item.text].join('\n')
            })
            // @ts-ignore
            dispatch(sendEmail({
                message: message,
                sender: currentUser?.id,
                recipient: values.recipientEmail,
                subject: values.topic
            }))
        } else {
            alert('Please, fill the message field')
        }
    }

    const handleFormChange = (e: any) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    if (isEmailSent) {
        dispatch(actions.setEmailDeliveryStatus(false))
        return <Redirect to={"/emails"}/>
    }

    return <StyledSendEmail>
        <Formik
            validationSchema={validationSchema}
            enableReinitialize
            validateOnBlur
            initialValues={{
                recipientEmail: '',
                topic: ''
            }}
            onSubmit={handleSubmit}
        >
            {({touched, errors, isValid, dirty, handleChange}) => (
                <Form className={''}>
                    <div className={'fieldBox'}>
                        <label htmlFor={'senderEmail'}>Sender</label>
                        <label className={'inner'} htmlFor={'senderEmail'}>{currentUser?.email}</label>
                    </div>
                    <div className={'fieldBox'}>
                        <label htmlFor={'recipientEmail'}>Recipient</label>
                        <Field type={"text"}
                               placeholder={"Recipient Email"}
                               name={"recipientEmail"}
                               onChange={(e: any) => {
                                   handleChange(e);
                                   handleFormChange(e)
                               }}/>
                        {touched.recipientEmail && errors.recipientEmail && <span>{errors.recipientEmail}</span>}
                    </div>
                    <div className={'fieldBox'}>
                        <label htmlFor={'topic'}>Topic</label>
                        <Field type={"text"}
                               placeholder={"Topic"}
                               name={"topic"}
                               onChange={(e: any) => {
                                   handleChange(e);
                                   handleFormChange(e)
                               }}/>
                        {touched.topic && errors.topic && <span>{errors.topic}</span>}
                    </div>
                    <div className={'fieldBox'}>
                        <label>Message</label>
                        <RTEditor setContent={setContent} />
                    </div>
                    <button className={'button'} type="submit" disabled={!isValid && !dirty}>
                        {constants.send}
                    </button>
                </Form>
            )}
        </Formik>
    </StyledSendEmail>
}