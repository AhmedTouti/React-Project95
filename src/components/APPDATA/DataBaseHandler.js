import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword, updateEmail } from "firebase/auth";
import { addDoc, collection, doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore'
import { auth, db, usersCollectionRef } from './FireBaseDB'



//TODO firebase auth manipilation
//auth handling


//firstname,lastname,gender,phone,login,email,password
export let Register = (firstname, lastname, gender, phone, email, password, admin = false) => {
    //let solvd=true;

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password).then((userData) => {
            //TODO add regestration date 
            setDoc(doc(db, "USERS", userData.user.uid), { Firstname: firstname, Lastname: lastname, Gender: gender, Phone: phone, Email: email, Password: password, Admin: admin })
                .then(res => { console.log('adding this user okok', res) });
            console.log(auth.currentUser);
            resolve();
        })
            .catch((err) => {
                console.log(err.code, err.message)
                reject(err);

            });


    })

}
//login in with login and password
export let Login = (email, Password) => {
    return new Promise((resolve, reject) => {

        signInWithEmailAndPassword(auth, email, Password)
            .then((userCredential) => {
                
                resolve(userCredential);

            })
            .catch((err) => {
                reject(err);

            });
    })

}
//loging out 
export let Logout = () => {

return new Promise((resolve,reject)=>{
    signOut(auth).then(() => {
resolve();
    }).catch((err) => {
        reject(err);
    });


})
}
//UpdateEmail providing the new email 
export let UpdateEmail = (email) => {
    updateEmail(auth.currentUser, email).then(() => {
        console.log('Email updated!')
    }).catch((error) => {
        console.log(error.code);
        console.log(error.message);
    });


}
//updatePassword
export let UpdatePasswd = (Newpasswd) => {
    updatePassword(auth.currentUser, Newpasswd).then(() => {
        console.log('paswd updated!')
    }).catch((error) => {
        console.log(error.code);
        console.log(error.message);
    });


}


//Data handling 'CRUD' x).........

//adding data into collection  providing reference object and data object
export let AddData = (reference, data) => {
    addDoc(reference, data).then(res => { console.log('addData log', res) })
        .catch((err) => { console.log(err.code, err.message) });


}
// getting data from a collection providing id and 'text ref of the collection' 
export let GetData = (ref, id) => {
    return new Promise((resolve, reject) => {

        getDoc(doc(db, ref, id)).then((data) => {
        resolve(data.data())})
        .catch((err) => {  reject(err) });

});}
// updating collection data providing reference obj ,id,data obj, and test if user collection then update auth also if other collection update it :<)...... 
export let UpdateData = (reference, id, data) => {
    if (reference === usersCollectionRef) {

        console.log(auth.currentUser);
        setDoc(doc(reference, id), data).then(() => {
            console.log('sec ..................>)``````````')
            UpdateEmail(data.email);
            UpdatePasswd(data.password);
            console.log('from update data')
            //TODO add auth apdate

        })
            .catch((err) => { console.log(err.code, err.message) });
    } else {

        setDoc(doc(reference, id), data).then(() => { console.log('sec ..................>)``````````'); })
            .catch((err) => { console.log(err.code, err.message) });
        console.log('from blog updatedata');
    }

}
export let DeleteData = (ref, id) => {

    deleteDoc(doc(db, ref, id)).then(() => {
        console.log('deleted x)```````````')
    });

}
///////////
//handling validatiens
//signIN validations /boolean

export let signInValidations = (firstname, lastname, gender, phone, email, password, confpassword) => {

    if (!(firstname === '') && !(lastname === '') && !(gender === '') && !(phone === '') && !(email === '') && !(password === '') && !(confpassword === '')) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            if (confpassword === password) {
                return true

            } else {
                return 'password not match'
            }

        } else {
            return 'email not valid!'

        }
    } else {
        return 'some field is empty!'
    }



}
/////the data is ready now kind of

export let LoginValidations = (email, password) => {

    if (!(email === '') && !(password === '')) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true
        } else {
            return 'email not valid!'

        }
    } else {
        return 'some field is empty!'
    }



}
