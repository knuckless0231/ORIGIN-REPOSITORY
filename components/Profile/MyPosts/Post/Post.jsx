import React from 'react';
import s from './Post.module.css';

     const Post = (props) => { 

     return <div className={s.posts}>
    <div className={s.item}>
        {props.message}
       <button className={s.button}>{props.like} like</button>
    </div>
   </div>
   }
    export default Post;
    

