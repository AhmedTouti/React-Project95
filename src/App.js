import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {AuthenticationYes,
AuthenticationNo, 
AdministrationYes,
AdministrationNo} from './components/APPDATA/GLOBALdataREDUX';
import SignIn from './components/HomeComponent/SignIn'
import {regester ,Login,Logout,GetData, UpdateData,DeleteData} from './components/APPDATA/DataBaseHandler';
import { usersCollectionRef,blogCollectionRef } from './components/APPDATA/FireBaseDB';


//TODO bottom bar for social media icons

function App() {

 //Login('ahmedtalib690@gmail.com','1234567889')
  const statedata = useSelector(state => state);
  console.log(statedata.auth);
  console.log(AuthenticationYes);
  return (
    <div className="App">
      <h1>this is app.js</h1>
      <button onClick={()=>{DeleteData('USERS','AmkPC8cxuKbMZ2dWtI1HAH5Ert72')}}>testAUTH</button>
    </div>
  );
}

export default App;
