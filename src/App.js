
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Components/login_Page/Login';
import SignUp from './Components/SignUpPage/SignUp';
import Layout from './Components/Layout';
// import Clients from './Components/Clients/Clients';
import AddNewCLients from './Components/Clients/AddNewCLients/AddNewCLients';
function App() {

  return (
    <div>
      <Router>
        <Routes>
         
          <Route path="/" element={<Login />} />
        
           <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={< Layout/>} />
            
            <Route path="/clients" element={< Layout/>} >
            <Route path="addnewclients" element={< AddNewCLients/>} />
            </Route>
            <Route path="/agent" element={< Layout/>} />
        
        </Routes>
      </Router>

    </div>
  );
}

export default App;
