import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = (props) => {
  
  let mapPost = props.postData
  .map(p=>(<Post message= {p.postText} like={p.likesCount}/>))

  let textarea = React.createRef();
  let text = ()=>{
    alert(textarea.current.value)
  }


  return (
    <div>
      My posts
      <div>
        <textarea ref={textarea}></textarea>
        <button onClick={text}>Add post</button>
        {mapPost}
      </div>
      
      </div>
    
  
  )
}

export default MyPosts;