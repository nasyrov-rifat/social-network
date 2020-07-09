import React, {useEffect, useState} from "react";
import s from './Information.module.css';

const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => { setStatus(props.status) }, [props.status])

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div className={s.status}>
                <p onClick={onEditMode} className={s.statusP}> {props.status || `no status`} </p>
            </div>
            }
            {editMode &&
            <div className={s.status}>
                <input value={status} onChange={onStatusChange} onBlur={offEditMode} autoFocus={true}/>
            </div>
            }
        </div>

    )
}

export default ProfileStatusHook;