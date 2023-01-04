import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Login from "./pages/login/Login";
import Adduser from "./pages/adduser/Adduser";
import RegisterFrom from "./pages/register/RegisterForm"
import ViewTable from "./pages/register/RegisterTable"
import Topbar from "./components/topbar/Topbar";
import {
  HashRouter as Router,
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
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/eyebank"><Eyebanksmap /></Route>
        <Route path="/register"><RegisterFrom /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/login">{user ? <Redirect to="/" /> :<Login />}</Route>
        <Route path="/adduser">{user ?<Adduser />: <Redirect to="/" />}</Route>
        <Route path="/view">{user ?<ViewTable userdata={user} />: <Redirect to="/" />}</Route>  
        <Route path="/demoview"><ViewTable userdata={null} /></Route>  
      </Switch>
    </Router>

 
  
  </div> 
  
    
  );
}

export default App;
// {user ? <Home /> : <Register />}