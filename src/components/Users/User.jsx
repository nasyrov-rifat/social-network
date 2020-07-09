import React from "react";
import s from "./Users.module.css"
import ava from '../../assets/images/avatar.png'
import {NavLink} from "react-router-dom";

let User = (props) => {
    return <div>
        {props.users.map(u => <div key={u.id} className={s.wrapper}>
            <div className={s.photo}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : ava}/>
                </NavLink>
            </div>
            <div> {u.followed
                ? <button className={s.buttonS} onClick={() => {
                    props.deleteUserTC(u.id)
                }}> Unfollow </button>
                : <button className={s.buttonS} onClick={() => {
                    props.postUserTC(u.id)
                }}> Follow </button>
            }
            </div>
            <div className={s.info}>
                <div className={s.name}> {u.name} </div>
                <div
                    className={s.status}> {u.status != null ? u.status : `Hei! I'm using Best Friends!`} </div>
            </div>
            <div className={s.location}>
                <div className={s.country}> {'u.location.country'},</div>
                <div className={s.city}> {'u.location.city'} </div>
            </div>
        </div>)}
    </div>
}

export default User;