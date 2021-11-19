
import { useState, useEffect } from "react";
import { usersCollectionRef } from '../APPDATA/FireBaseDB';
import {  getDocs } from 'firebase/firestore'
import { TextField } from "@mui/material";
const CRUDCompo = () => {
  const [user, setuser] = useState([{ name: "", age: 0 }]);

  let getUsers = async () => {
    // console.log(usersCollectionRef);
    //console.log(typeof (usersCollectionRef));

    const data = await getDocs(usersCollectionRef);
    setuser(
      data.docs.map((res) => { return { ...res.data() } })
    );

  }

  useEffect(() => {
    getUsers();
    console.log(user)
    return () => {
      // cleanup
    }
  }, [])
  return (<>
    <TextField
      id="FullName"
      value={user[0].name + ' ' + user[0].age}
      variant="outlined"
      required

    />
  </>);
}

export default CRUDCompo;

