import { Container, Grid, TextField } from "@mui/material";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';





const Contact = () => {
    return (<>

<Container>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <Grid container spacing={4}>
                <Grid item lg={12}  md={12} xs={12} >
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="FullName"
                            label="FullName"
                            variant="outlined"
                            required
                          
                        />
                        <TextField
                            id="Email"
                            label="Email"
                            variant="outlined"
                            required
                           
                        />
                    </Box>

                </Grid>
                <br />
                <Grid item lg={12} md={12} xs={12} >
                    <TextField
                        id="Message"
                        label="Message"
                        multiline
                        rows={4}
                        fullWidth
                        defaultValue="Your Message"
                        required
                    />
                </Grid>

                <Grid item md={12} xs={12}  lg={12} >
            <Button onclick={() => { console.log('btn click') }} variant="contained" size="large">
                Send
            </Button>

            </Grid>

            </Grid>

        </form>




        </Container>

    </>);
}

export default Contact;