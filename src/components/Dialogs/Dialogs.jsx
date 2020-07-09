import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {addMessage} from "../../Data/dialogReducer";
import {InputType} from "../Common/FormControl/FormControl";
import {maxLenghtCreator, required} from "../validation/validation";

const Dialogs = (props) => {

    let messageElements = props.messages.map(
        (m) => <Message message={m.message} key={m.id}/>
    );

    let DialogItemElements = props.DialogItem.map(
        (d) => <DialogItem userName={d.userName} id={d.id} key={d.id}/>
    );

    let addMessageText = (values) => {
        props.addMessage(values.inputNewMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_names}>
                {DialogItemElements}
            </div>


            <div className={s.messages}>
                {messageElements}
               <AddMessageReduxForm onSubmit={addMessageText} />
            </div>
        </div>)
};

let maxLenght50 = maxLenghtCreator (50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.inputM} placeholder='Enter your message...' types='textarea'
                   component={InputType} name="inputNewMessage" validate={[required, maxLenght50]}/>
            <button className={s.buttonSend}>Send</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm ({
    form: "addMessage"
}) (AddMessageForm)

export default Dialogs;