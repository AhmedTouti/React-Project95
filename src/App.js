import Home from './components/Home';
import { Button,AppBar,BottomNavigation,BottomNavigationAction,IconButton} from '@mui/material';
import Contact from './components/Contact';
import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Managment from './components/Managment';
  //TODO bottom bar for social media icons

function App() {
    return (
        <div className="App">



           <Managment/>  




    
           {/* <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
               <Button >test</Button>
        
      </AppBar> */}



        </div>
    );
}

export default App;
