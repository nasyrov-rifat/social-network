import React from 'react';
import {addMessage} from "../../Data/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        DialogItem: state.dialogsPage.DialogItem,
        messagesText: state.dialogsPage.messagesText
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)
(Dialogs);