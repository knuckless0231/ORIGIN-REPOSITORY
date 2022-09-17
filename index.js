import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'



// let postData = [ 
//   {postText:'Hello World', likesCount: 11},
//   {postText:'Hello Kostya', likesCount: 12},
//   {postText:'Hello Komk', likesCount: 41}
// ] 

// //USERS
// let users = [
//   { name: "Gosha", id: 0 },
//   { name: "Sveta", id: 1 },
//   { name: "Bob", id: 2 }

// ]
// //MESSAGES
// let messages = [
//   { message: 'Kinch' },
//   { message: 'Kinch1' },
//   { message: 'Kinch2' }

// ]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
