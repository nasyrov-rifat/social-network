import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./Login.module.css"
import {InputType} from "../Common/FormControl/FormControl";
import {required} from "../validation/validation";
import {connect} from "react-redux";
import {loginTC} from "../../Data/authReducer";
import {Redirect} from "react-router-dom";

let LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div className={s.dwsInput}>
            <Field component={InputType} types='input' name={'email'} placeholder={'email'} validate={[required]}/>
        </div>
        <div className={s.dwsInput}>
            <Field component={InputType} types='input' type={'password'} name={'password'} placeholder={'Password'} validate={[required]}/>
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
            remember me
        </div>
        {props.captchaURL && <img src={props.captchaURL} />}
        {props.captchaURL &&
            <Field component={InputType} types='input' name={'captcha'} placeholder={'please enter captcha...'} validate={[required]}/>}
        {props.error && <div className={s.loginError}>
            {props.error}
        </div>}
        <div>
            <button class={s.dwsSubmit}> Login</button>
        </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let Login = (props) => {
    const onSubmit = (formData) => {
       props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth === true) { return <Redirect to={'/profile'} /> }

        return <div className={s.container}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit } captchaURL={props.captchaURL} />
        </div>
    }

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
}

export default connect (mapStateToProps, {loginTC}) (Login);