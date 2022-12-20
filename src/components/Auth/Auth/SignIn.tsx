import {Field, Form, Formik} from "formik";
import React, {FC, useState} from "react";
import {StyledAuth} from "./StyledAuth";
import * as yup from 'yup'
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {actions, getCurrentUser} from "../../../Redux/auth/auth-actions";

type InitialValuesFormType = {
    name: string
    password: string
}

const validationSchema = yup.object().shape({
    name: yup.string()
        .required('Required')
        .max(150, 'Login should be less, than 150 chars'),
    password: yup.string()
        .required('Required')
        .min(6, 'Password should be more, than 6 chars')
        .matches(/(?=.*[0-9])(?=.*[A-Z])/g, 'Password should contain: one uppercase letter and one number')
})

export const SignIn: FC = () => {
    const currentUser = useSelector((state: AppStateType) => state.auth.currentUser)

    const [formValues, setFormValues] = useState({} as InitialValuesFormType)

    const dispatch = useDispatch()

    const handleSubmit = (values: InitialValuesFormType) => {
        // @ts-ignore
        dispatch(getCurrentUser(values.name, values.password))
        dispatch(actions.setAuthData({password: values.password, username: values.name}))
    }

    const handleFormChange = (e: any) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    if (currentUser)
        return <Redirect to={"/emails"}/>

    return <StyledAuth>
        <Formik
            validationSchema={validationSchema}
            enableReinitialize
            validateOnBlur
            initialValues={{name: '', password: ''}}
            onSubmit={handleSubmit}
        >
            {({touched, errors, isValid, dirty, handleChange}) => (
                <Form className={''}>
                    <div className={'fieldBox'}>
                        <label htmlFor={'name'}>Login</label>
                        <Field type={"text"}
                               placeholder={"Login"}
                               name={"name"}
                               onChange={(e: any) => {
                                   handleChange(e);
                                   handleFormChange(e)
                               }}
                               value={formValues.name}/>
                        {touched.name && errors.name && <span>{errors.name}</span>}
                    </div>
                    <div className={'fieldBox'}>
                        <label htmlFor={'password'}>Password</label>
                        <Field type={"password"}
                               placeholder={"Password"}
                               name={"password"}
                               onChange={(e: any) => {
                                   handleChange(e);
                                   handleFormChange(e)
                               }}
                               value={formValues.password}/>
                        {touched.password && errors.password && <span>{errors.password}</span>}
                    </div>
                    <button type="submit" disabled={!isValid && !dirty}>
                        Sign in
                    </button>
                </Form>
            )}
        </Formik>
    </StyledAuth>
}