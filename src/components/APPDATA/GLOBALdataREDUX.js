import { createStore } from 'redux';
//TODO adding user/admin  id
const initState = {
    auth: false, admin: false
}
export const AuthenticationYes = 'AuthenticationYes'
export const AuthenticationNo='AuthenticationYes'
export const AdministrationYes='AdministrationYes'
export const AdministrationNo ='AdministrationNo';


const DATAreduser = (state = initState, action)=>{
    switch (action.type) {
        case AuthenticationYes:
            return {auth:true,admin:false}

        
        case AuthenticationNo:
            return {auth:false,admin:false}

            
        case AdministrationYes:
            return {auth:true,admin:true}

            

        case AdministrationNo:
            return {auth:false,admin:false}

            

        default:
            return state 
    }
}
const store = createStore(DATAreduser);



export default store







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