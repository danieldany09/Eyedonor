import axios from "axios";
import { Redirect } from "react-router-dom";
// axios.defaults('http://localhost:5000/')
export const loginCall = async (userCredential, dispatch) => {
  console.log('hgdhfdsj');
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("http://localhost:5000/api/login", userCredential);
    console.log("-------------->"+JSON.stringify(res)+res.data.status)
    if(res.status==200){
      console.log("My data"+res.data)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.alert("Login Successfully");
      <Link to="/" />
    }else if(res.data.status==false){
      window.alert("en")
    }
    
    dispatch({ type: "LOGIN_FAILURE0", payload: null});
    
  } catch (err) {
    // console.log("no");
    window.alert("Email or Password did noţ match")
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
