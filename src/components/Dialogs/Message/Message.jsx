import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}><img src="https://static.thenounproject.com/png/1992890-200.png"/>
            {props.message}
        </div>
    )
};

export default Message;