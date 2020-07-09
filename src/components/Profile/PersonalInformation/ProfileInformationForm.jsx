import React from 'react';
import {Field, reduxForm} from "redux-form";
import {InputType} from "../../Common/FormControl/FormControl";
import {required} from "../../validation/validation";
import s from "./Information.module.css";
import vk from "../../../assets/images/vk.png";
import ins from "../../../assets/images/instagtam.png";
import gh from "../../../assets/images/github.png";

const ProfileInformationForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <b>Full Name: </b>
        <Field component={InputType} types='Input' name={'fullName'} placeholder={'Full Name'} validate={[required]}/>
        <p>
            <b>About me: </b>
                <Field component={InputType} types='textarea' name={'aboutMe'} placeholder={'About me'} validate={[required]}/> <br/>
            <b>Looking for a job: </b>
                <Field component={'input'} name={'lookingForAJob'} type='checkbox'/> <br/>
            <b>Professional skills: </b>
                <Field component={InputType} types='textarea' name={'lookingForAJobDescription'} placeholder={'Professional skills'} validate={[required]}/>
        </p>
        <p className={s.contacs}>Contacts:</p>
        <div className={s.social}>
            <img src={vk}/> :
            <Field component={InputType} types='input' name={'contacts.vk'} placeholder={'vk'}/>
        </div>
        <div className={s.social}>
            <img src={ins}/> :
            <Field component={InputType} types='input' name={'contacts.instagram'} placeholder={'Instagram'}/>
        </div>
        <div className={s.social}>
            <img src={gh}/> :
            <Field component={InputType} types='input' name={'contacts.github'} placeholder={'Git Hub'}/>
        </div>
            {error && <div className={s.error}>
                {error}
        </div>}
        <button>Save</button>
    </form>
}

const ProfileInformationReduxForm = reduxForm({form: 'profile-info'})(ProfileInformationForm)

export default ProfileInformationReduxForm