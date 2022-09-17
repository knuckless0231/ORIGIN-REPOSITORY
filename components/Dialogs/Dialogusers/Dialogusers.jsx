import React from 'react';
import s from './../Dialogs.module.css'
import { Link } from 'react-router-dom';

let Dialogusers = (props) => {
    return <div>
        <Link to={'/dialogs/' + props.id} className={s.dialogusers}>{props.name}</Link>
    </div>

}

export default Dialogusers;
