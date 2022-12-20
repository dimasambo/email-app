import React, {FC, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {createUser} from "../../../Redux/auth/auth-actions";
import {StyledAuth} from "./StyledAuth";

type InitialValuesFormType = {
    email: string
    password: string
    name: string
}

const validationSchema = yup.object().shape({
    email: yup.string()
        .required('Required')
        .email('Invalid email address')
        .max(254, 'Login should be less, than 254 chars'),
    name: yup.string()
        .required('Required')
        .max(150, 'Login should be less, than 150 chars'),
    password: yup.string()
        .required('Required')
        .min(6, 'Password should be more, than 6 chars')
        .matches(/(?=.*[0-9])(?=.*[A-Z])/g, 'Password should contain: one uppercase letter and one number')
})

export const SignUp: FC = () => {
    const [formValues, setFormValues] = useState({} as InitialValuesFormType)
    const [isSignedUp, setIsSignedUp] = useState(false)
    const {authData} = useSelector((state: AppStateType) => state.auth)

    const dispatch = useDispatch()

    const handleSubmit = (values: InitialValuesFormType) => {
        // @ts-ignore
        dispatch(createUser({email: values.email, password: values.password, username: values.name}))
        setIsSignedUp(true)
    }

    const handleFormChange = (e: any) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    if (isSignedUp && authData)
        return <Redirect to={"/emails"}/>

    return <StyledAuth>
        <Formik
            validationSchema={validationSchema}
            enableReinitialize
            validateOnBlur
            initialValues={{
                email: formValues.email,
                password: formValues.password,
                name: formValues.name
            }}
            onSubmit={handleSubmit}
        >
            {({touched, errors, isValid, handleSubmit, dirty, handleChange}) => (
                <Form className={''}>
                    <div className={'fieldBox'}>
                        <label htmlFor={'email'}>Email</label>
                        <Field type={"email"}
                               placeholder={"E-mail"}
                               name={"email"}
                               onChange={(e: any) => {
                                   handleChange(e);
                                   handleFormChange(e)
                               }}
                               value={formValues.email}/>
                        {touched.email && errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className={'fieldBox'}>
                        <label htmlFor={'name'}>Login</label>
                        <Field type={"name"}
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
                        Sign up
                    </button>
                </Form>
            )}
        </Formik>
    </StyledAuth>
}