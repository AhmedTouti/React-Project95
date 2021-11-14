import { Grid, Button,Avatar,  TextField } from "@mui/material";
//TODO ROUTING FOR ADMIN OR USER HERE =>>
const Login = () => {
    return (< >


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
                <TextField label="UserName" variant="outlined" ></TextField>
            </Grid>
            <Grid item lg={12} xs={12}>
                <TextField id='passwod' label="Passwd" variant="outlined" ></TextField>

            </Grid>



            <Grid item lg={12} xs={12} >
                <Button variant='contained' >LOGIN</Button> <Button variant='text' >SignIn?</Button>

            </Grid>

        </Grid>

    </>);
}

export default Login;