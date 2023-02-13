import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Navbar from './Navbar';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdKnlEg5-KIYnULEMsJNSBE2egETIFV_k",
  authDomain: "nanochat-1c754.firebaseapp.com",
  databaseURL: "https://nanochat-1c754.firebaseio.com",
  projectId: "nanochat-1c754",
  storageBucket: "nanochat-1c754.appspot.com",
  messagingSenderId: "578165798060",
  appId: "1:578165798060:web:b22300635099aafef85b09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <App />
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
