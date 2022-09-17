import React from 'react';
import s from './Dialogs.module.css';
import Dialogusers from './Dialogusers/Dialogusers.jsx';
import Messages from './Messages/Messages.jsx';


const Dialogs = (props) => {

    //MAP USERS
    let messageUser = props.users
        .map(user =>
            (<Dialogusers name={user.name} id={user.id} />)
        )
    //MAP MESSAGES

    let messagesMap = props.messages
        .map(m => (<Messages message={m.message} />))


        let textarea = React.createRef();
        let text = ()=>{alert( textarea.current.value)}

        //DIALOG RESULT V V V V

    return <div className={s.dialogs}>
        <div>
            {messageUser}
        </div>

        <div>
            {messagesMap}
            <textarea ref={textarea}></textarea>
            <button className={s.bt} onClick={text}></button>
        </div>
    </div>

}


export default Dialogs;