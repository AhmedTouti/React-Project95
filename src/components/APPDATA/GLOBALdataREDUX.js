import { createStore } from 'redux';
//TODO adding user/admin  id
const initState = {
    auth: false, admin: false, name: ''
}
export const AuthenticationYes = 'AuthenticationYes'
export const AuthenticationNo = 'AuthenticationNo'
export const AdministrationYes = 'AdministrationYes'


const DATAreduser = (state = initState, action) => {
    switch (action.type) {
        case AuthenticationYes:
            localSetter(AuthenticationYes,action.name);            
            return { auth: true, admin: false, name: action.name }
        case AuthenticationNo:
            localStorage.clear();
            return initState 
        case AdministrationYes:
            localSetter(AdministrationYes,action.name);
            return { auth: true, admin: true, name: action.name }
        default:
            return state
    }
}
const store = createStore(DATAreduser);



export default store
 let localSetter=(type,name)=>{localStorage.setItem('type',type);localStorage.setItem('name',name);}







//import {createSlice,configureStore} from '@reduxjs/toolkit'

// const initState={
//     auth:false ,admin:false
// }
// const StatesMplr=createSlice({
//     name:'appGData',
//     initState,
//     reducers:{
//         AuthenticationHandler(state,action){
//             state.auth=action.payload;
//         },
//         AdministrationHandler(state,action){
//             state.admin=action.payload;
//         }
// }} );


// const store=configureStore({reducer:StatesMplr.reducer});

// export const myactions=StatesMplr.actions; 