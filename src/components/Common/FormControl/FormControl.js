import React from "react";
import s from "./FormControl.module.css"

export const InputType = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div>
            <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
                {props.types === 'input' ? <input {...input} {...props} /> : <textarea {...input} {...props} />}
            </div>
            <span>
                {hasError ? <span className={s.formControlText}> {meta.error} </span> : ``}
            </span>
        </div>
    )
}