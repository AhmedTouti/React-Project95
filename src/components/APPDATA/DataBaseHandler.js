import { Sync } from "@material-ui/icons";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword, updateEmail } from "firebase/auth";
import { addDoc, collection, doc, setDoc, getDoc ,deleteDoc} from 'firebase/firestore'
import { auth, db, usersCollectionRef } from './FireBaseDB'



//TODO firebase auth manipilation
//auth handling
//user registeration with user id into firestore+ credentials im so happy at this moment bicose i finaly get out from my confort-zone and the caffeine kiking in 

//firstname,lastname,gender,phone,login,email,password
export let Regester = async (firstname, lastname, gender, phone, email, password, admin = false) => {
    await createUserWithEmailAndPassword(auth, email, password).then((userData) => {
        //TODO add regestration date 
        setDoc(doc(db, "USERS", userData.user.uid), { Firstname: firstname, Lastname: lastname, Gender: gender, Phone: phone, Email: email, Password: password, Admin: admin })
            .then(res => { console.log('adding this user okok', res) });
    })
        .catch((err) => { console.log(err.code, err.message) });
}
//login in
export let Login = async (login, Password) => {

    await signInWithEmailAndPassword(auth, login, Password)
        .then((userCredential) => {
            console.log('he is Logd in x)......', userCredential.user.uid)
            console.log('current.....: ', auth.currentUser.uid);


        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });


}
//loging out
export let Logout = async () => {

    let signBool = false;
    await signOut(auth).then(() => {
        console.log('this is signout log');

    }).catch((error) => {
        console.log('message err from signOut :>(........', error.message)
    });



}
//UpdateEmail
export let UpdateEmail = async (email) => {
    await updateEmail(auth.currentUser, email).then(() => {
        console.log('Email updated!')
    }).catch((error) => {
        console.log(error.code);
        console.log(error.message);
    });


}
//updatePassword
export let UpdatePasswd = async (Newpasswd) => {
    await updatePassword(auth.currentUser, Newpasswd).then(() => {
        console.log('paswd updated!')
    }).catch((error) => {
        console.log(error.code);
        console.log(error.message);
    });


}


//Data handling 'CRUD' x).........

//
export let AddData = async (reference, data) => {
    await addDoc(reference, data).then(res => { console.log('addData log', res) })
        .catch((err) => { console.log(err.code, err.message) });


}
export let GetData = async (ref, id) => {


    let Mydoc = await getDoc(doc(db, ref, id)).then((data) => data.data())
        .catch((err) => { console.log(err.code, err.message) });
    console.log('this is single doc data x<)...........', Mydoc);

}
export let UpdateData = async (reference, id, data) => {
    if (reference === usersCollectionRef) {

        await setDoc(doc(reference, id), data).then(() =>{ console.log('sec ..................>)``````````')
        // UpdateEmail(data.email);
        // UpdatePasswd(data.password);
        //TODO add auth apdate
        
    })
        .catch ((err) => { console.log(err.code, err.message) });
        } else {
    console.log(false)
    await setDoc(doc(reference, id), data).then(() => { console.log('sec ..................>)``````````'); })
        .catch((err) => { console.log(err.code, err.message) });

}

}
export let DeleteData=async(ref,id)=>{

await deleteDoc(doc(db, ref, id)).then(()=>{
    console.log('deleted x)```````````')
});

}