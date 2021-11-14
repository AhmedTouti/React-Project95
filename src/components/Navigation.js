import { Button ,Avatar} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';


const Navigation = () => {
    return (<>

        <AppBar style={{ width: '100%' }} position='static' >
            <Toolbar>
                
                {/* <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Avatar sx={{ bgcolor: '#1e88e5' }}>G95</Avatar>

                </Typography>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit">Login</Button>

            </Toolbar>
        </AppBar>

    </>);
}

export default Navigation;