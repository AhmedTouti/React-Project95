import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import DangerousIcon from '@mui/icons-material/Dangerous';
import { Link } from 'react-router-dom'
const N404 = () => {
    return (<>

        <Box sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
            <Typography variant="h1" component="div" gutterBottom>
                <DangerousIcon style={{ fontSize: '100%' }} /> HTTP : 404 NOT fOUND !
            </Typography>
            <Link to="/">Go Back Home</Link>
        </Box>



    </>);
}

export default N404;