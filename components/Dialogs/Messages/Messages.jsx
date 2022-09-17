import React from 'react';
import s from './../Dialogs.module.css'

let Messages = (props) => {
    return <div className={s.message}>
        {props.message}
    </div>
}

export default Messages;