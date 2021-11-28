import { FormLabel, Grid, Button, TextField, Avatar, RadioGroup, Input, FormControlLabel, Radio } from "@mui/material";
import * as DataHandlerObj from '../APPDATA/DataBaseHandler'
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthenticationNo, AuthenticationYes } from '../APPDATA/GLOBALdataREDUX'
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import { auth } from '../APPDATA/FireBaseDB'
import {onAuthStateChanged } from "firebase/auth";

// import { useRoutes } from "react-router";
// useRoutes()

const SignIn = () => {
    // const [loging, setloging] = useState(false)
    //const [snakeState, setsnakeState] = useState(false)
    let initialState = '';
    let [firstName, setfirstName] = useState(initialState);
    let [lastName, setlastName] = useState(initialState);
    let [gender, setgender] = useState(initialState);
    let [phone, setphone] = useState(initialState);
    let [email, setemail] = useState(initialState);
    let [passwd, setpasswd] = useState(initialState);
    let [confpasswd, setconfpasswd] = useState(initialState);
    let dispatch = useDispatch();
    let stateAuth = useSelector(state => state)
    let navigate = useNavigate();

    useEffect(() => {
            onAuthStateChanged(auth, (user) => { if (user) {navigate('/')} });
        return () => {
            console.log('signin unmount ')
            
        }
    }, [])

    const EmptyFealds = () => {
        setfirstName(''); setlastName(''); setgender(''); setphone(''); setemail(''); setpasswd(''); setconfpasswd('');
    }
    const RegisterHandler = () => {
        //setloging(true);
        let validations = DataHandlerObj.signInValidations(firstName, lastName, gender, phone, email, passwd, confpasswd);
        if (true === validations) {

            //  TODO popup or mesage alert MUI or some msg desplay unit here!
            DataHandlerObj.Register(firstName, lastName, gender, phone, email, passwd).then(() => {
                console.log('from my promis resolve regestration is done')
                EmptyFealds();
                //global state.auth value set to true which means that that som one is logged in
                dispatch({ type: AuthenticationYes, name: gender === 'male' ? 'Mr ' + lastName : 'Ms ' + lastName });
                /*Use “Ms.” when you are not sure of a woman's marital status. */
                //TODO routing here!!
                navigate('/');


            }).catch((err) => {
                console.log( err);



            });

        } else {
            //TODO popup or mesage alert MUI or some msg desplay unit here!
            console.log(validations)


        }



    }
    return (<>
        <form onSubmit={(e) => {
            e.preventDefault();
             RegisterHandler();
        }} >
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }} >

                <Grid item lg={12} xs={12}  >
                    <Avatar sx={{ bgcolor: '#1e88e5' }}>G95</Avatar>
                </Grid>

                <Grid item lg={12} xs={12}>
                    <TextField id='FirstName' value={firstName} label="FirstName" onChange={(e) => { setfirstName(e.target.value) }} variant="outlined" ></TextField>

                </Grid>

                <Grid item lg={12} xs={12} >
                    <TextField id='LastName' value={lastName} label="LastName" variant="outlined" onChange={(e) => { setlastName(e.target.value) }}></TextField>
                </Grid>
                <Grid item lg={12} xs={12} >
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup id='gender' value={gender} onChange={(e) => { setgender(e.target.value) }} row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>          </Grid>
                <Grid item lg={12} xs={12} >

                    <TextField id='PhoneNumber' value={phone} label="PhoneNumber" variant="outlined" onChange={(e) => { setphone(e.target.value) }}></TextField>
                </Grid>
                <Grid item lg={12} xs={12} >
                    <TextField id='Email' label="Email" value={email} type="email" variant="outlined" onChange={(e) => { setemail(e.target.value) }} ></TextField>
                </Grid>
                <Grid item lg={12} xs={12} >
                    <TextField id='PassWord' type="password" value={passwd} label="PassWord" variant="outlined" onChange={(e) => { setpasswd(e.target.value) }} ></TextField>
                </Grid>
                <Grid item lg={12} xs={12} >
                    <TextField id='ConfirmPassWord' type="password"
                        error={!confpasswd === passwd}
                        helperText={confpasswd === passwd ? ' ' : 'password not in match!'}
                        value={confpasswd} label="ConfirmPassWord" variant="outlined" onChange={(e) => { setconfpasswd(e.target.value) }}></TextField>
                </Grid>

                <Grid item lg={12} xs={12} >
                    <Button variant='text' onClick={() => {navigate('/Login') }} startIcon={<LoginIcon />}   >LOGIN</Button>
                    <Button startIcon={<AccountCircleIcon />} type='submit' variant='contained' /* Routing hear*/ >SignIn?</Button>

                </Grid>

            </Grid>
        </form>
        {/* <Button variant='text' onClick={() => setsnakeState(!snakeState)} startIcon={<LoginIcon />}   >SNAKEBAR </Button>
        <> <Snackbar
            open={snakeState}
             onClose={()=>{}}
            TransitionComponent='fade'
            message="my snake"
            resumeHideDuration={2}
        /></> */}


    </>);
}

export default SignIn;