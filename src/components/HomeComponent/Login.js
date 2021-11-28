import { Grid, Button, Avatar, TextField } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from "react-redux";
import { AdministrationYes, AuthenticationYes } from '../APPDATA/GLOBALdataREDUX'
import { useEffect, useState } from "react";
import { LoginValidations, Login, GetData, Logout } from '../APPDATA/DataBaseHandler'
import { useNavigate } from "react-router-dom";
import { auth } from '../APPDATA/FireBaseDB'
import { onAuthStateChanged } from "firebase/auth";


//TODO ROUTING FOR ADMIN OR USER HERE =>>
const LoginC = () => {
    let initialState = '';
    let [email, setemail] = useState(initialState)
    let [passwd, setpasswd] = useState(initialState)
    let dispatch = useDispatch();
    let stateAuth = useSelector(state => state)
    let navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => { if (user) {navigate('/')} });
        return () => {
            console.log('login unmount call')}
    }, [])

    const LoginHandler = () => {
        let loginvalidation = LoginValidations(email, passwd);
        if (true === loginvalidation) {

            Login(email, passwd).then((Udata) => {
                console.log(Udata.user.uid);
                GetData('USERS', Udata.user.uid).then((data) => {

                    setemail(''); setpasswd('');
                    //TODO routing here!!
                    //admin or normal user

                    dispatch({
                        type: data.Admin ? AdministrationYes
                            : AuthenticationYes,
                        name: data.Gender === 'male' ? 'Mr ' + data.Lastname : 'Ms ' + data.Lastname
                    });
                   
                    data.Admin? navigate('/'): console.log('this is normal user');


                }).catch((err) => { console.log(err) });



            }).catch((err) => {
                console.log(err.message);
            });
        } else {
            console.log(loginvalidation)

        }
    }
    return (<>

        <form onSubmit={(e) => {
            e.preventDefault()

            LoginHandler()
        }}>
            <Grid container
                spacing={4}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}  >

                <Grid item lg={12} xs={12} >
                    <Avatar sx={{ bgcolor: '#1e88e5' }}>G95</Avatar>
                </Grid>
                <Grid item lg={12} xs={12} >
                    <TextField label="Email" value={email} onChange={(e) => { setemail(e.target.value) }} type='email' variant="outlined" ></TextField>
                </Grid>
                <Grid item lg={12} xs={12}>
                    <TextField value={passwd} onChange={(e) => { setpasswd(e.target.value) }} label="Password" type='password' variant="outlined" ></TextField>

                </Grid>



                <Grid item lg={12} xs={12} >
                    <Button type='submit' variant='contained' endIcon={<LoginIcon />} >LOGIN</Button>
                    <Button onClick={() => navigate('/SignIn')} endIcon={<AccountCircleIcon />} variant='text' >SignIn?</Button>

                </Grid>

            </Grid>
        </form>

    </>);
}

export default LoginC;