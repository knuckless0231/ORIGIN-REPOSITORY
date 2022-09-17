import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Prepostcontent from './Prepostcontent/Prepostcontent.jsx'



const Profile = (props) => {

  return <div>
    <Prepostcontent />
    <MyPosts postData={props.postData} />

  </div>

}

export default Profile;