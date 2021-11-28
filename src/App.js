import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AuthenticationYes, AuthenticationNo, AdministrationYes } from './components/APPDATA/GLOBALdataREDUX';
import LoginC from './components/HomeComponent/Login'
import SignIn from './components/HomeComponent/SignIn'
import { Register, Logout, GetData, UpdateData, DeleteData, signInValidations } from './components/APPDATA/DataBaseHandler';
import { usersCollectionRef, blogCollectionRef, auth } from './components/APPDATA/FireBaseDB';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/HomeComponent/Home'
import Navigation from './components/HomeComponent/Navigation'
import N404 from './components/HomeComponent/N404';
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";




//TODO bottom bar for social media icons
function App() {
  let stateAuth = useSelector(state => state)
  const dispatch = useDispatch();
 

  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({type:localStorage.getItem('type'),name:localStorage.getItem('name')});
      console.log('APP.js/onAuthStateChanged/if====> ')

      } else {
        dispatch({type:AuthenticationNo});

        console.log('APP.js/onAuthStateChanged/else===>')

 
      }
    });
  }, [])

 
  // const testUserData = {
  //   firstname: 'newjeff',
  //   lastname: 'newmask',
  //   gender: 'male',
  //   phone: '+0154689875',
  //   email: 'jeff@gmail.com',
  //   password: '69444859'
  // }
//routing manipilations
  return (
<div className="App">
<BrowserRouter>
  <Navigation />
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route  path="/Login" element={<LoginC/>} />
        <Route  path="/SignIn" element={<SignIn/>} />
        <Route path='*'  element={<N404/>} />

      </Routes>
    </BrowserRouter>


</div>
  );
}

export default App;
