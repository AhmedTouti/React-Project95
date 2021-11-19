import { FormLabel, Grid, Button, TextField, Avatar, RadioGroup, FormControlLabel, Radio } from "@mui/material";
const styles = {

}
const SignIn = () => {
    return (<>
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
                <TextField id='FirstName' label="FirstName" variant="outlined" ></TextField>

            </Grid>

            <Grid item lg={12} xs={12} >
                <TextField id='LastName' label="LastName" variant="outlined" ></TextField>
            </Grid>
            <Grid item lg={12} xs={12} >
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>          </Grid>
            <Grid item lg={12} xs={12} >

                <TextField id='PhoneNumber' label="PhoneNumber" variant="outlined" ></TextField>
            </Grid>
            <Grid item lg={12} xs={12} >
                <TextField id='Login' label="Login" variant="outlined" ></TextField>
            </Grid>
            <Grid item lg={12} xs={12} >
                <TextField id='Email' label="Email" variant="outlined" ></TextField>
            </Grid> 
            <Grid item lg={12} xs={12} >
                <TextField id='PassWord' label="PassWord" variant="outlined" ></TextField>
            </Grid>
            <Grid item lg={12} xs={12} >
                <TextField id='ConfirmPassWord' label="ConfirmPassWord" variant="outlined" ></TextField>
            </Grid>

            <Grid item lg={12} xs={12} >
                <Button variant='contained' >LOGIN</Button> <Button variant='text' >SignIn?</Button>

            </Grid>

        </Grid>

    </>);
}

export default SignIn;