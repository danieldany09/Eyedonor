import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Adduser from "./pages/adduser/Adduser";
import RegisterFrom from "./pages/register/RegisterForm"
import ViewTable from "./pages/register/RegisterTable"
import Topbar from "./components/topbar/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Eyebanks from "./pages/Eyebanks/Eyebanks";
import Eyebanksmap from "./pages/Eyebanks/Eyebanksmap";
import Footer from "./components/footer/Footer";
import News from "./components/news/News";


function App() {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
  <div>
    <Topbar />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/login"><Login /></Route>
        <Route path="/adduser" component={Adduser}></Route>
        <Route path="/register"><RegisterFrom /></Route>
        <Route path="/eyebank"><Eyebanksmap /></Route>
        <Route path="/view"><ViewTable /></Route>
        <Route path="/dashboard">{user ?
          <Dashboard role={user.roles}/>
          :<About/>
        }
        </Route>
   
      </Switch>
    </Router>
 
  
  </div> 
  
    
  );
}

export default App;
// {user ? <Home /> : <Register />}