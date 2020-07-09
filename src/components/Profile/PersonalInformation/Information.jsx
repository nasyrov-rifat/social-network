import React, {useState} from 'react';
import s from './Information.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import vk from "../../../assets/images/vk.png"
import ins from "../../../assets/images/instagtam.png"
import gh from "../../../assets/images/github.png"
import ava from "../../../assets/images/avatar.png"
import ProfileStatusHook from "./ProfileStatusHook";
import ProfileInformationForm from "./ProfileInformationForm";

const Information = (props) => {
    let [editModeProfile, setEditModeProfile] = useState(false)

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditModeProfile(false)
            }
        )
    }

    if (!props.profile) {
        return <div className={s.preloader}><Preloader/></div>
    }

    const avaSelected = (e) => {
        if (e.target.files.length) {
            props.saveAvaTC(e.target.files[0])
        }
    }

    return (
        <div className={s.info_block}>
            <div>
                <img src={!props.profile.photos.large ? ava : props.profile.photos.large}/>
                {props.isOwner &&
                <input title={`change photo`} type={`file`} onChange={avaSelected}/>} <br/> <br/>
                <b>Status: </b><p><ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/></p>
            </div>
            <div> {editModeProfile
                ? <ProfileInformationForm initialValues={props.profile} onSubmit={onSubmit}/>
                : <ProfileInformation toEditModeProfile={() => {
                    setEditModeProfile(true)
                }} profile={props.profile} isOwner={props.isOwner}/>}
            </div>
        </div>)
}

const ProfileInformation = ({profile, isOwner, toEditModeProfile}) => {
    return <div>
        <h2>{profile.fullName}</h2>
        <hr/>
        <p>
            <b>About me: </b>{profile.aboutMe} <br/>
            <b>Looking for a job: </b>{profile.lookingForAJob ? 'Yes' : 'No'} <br/>
            <b>Professional skills: </b>{profile.lookingForAJobDescription}
        </p>
        <div className={s.social}>
            <p className={s.contacs}>Contacts:</p>
            <div><img src={vk}/> : {profile.contacts.vk}</div>
            <div><img src={ins}/> : {profile.contacts.instagram}</div>
            <div><img src={gh}/> : {profile.contacts.github}</div>
        </div>
        {isOwner && <button onClick={toEditModeProfile}>Edit</button>}
    </div>
}
export default Information;