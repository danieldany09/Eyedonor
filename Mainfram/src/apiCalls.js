import axios from "axios";
import { Redirect } from "react-router-dom";
// axios.defaults('http://localhost:5000/')
export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("http://localhost:5000/login", userCredential);
    console.log("-------------->"+JSON.stringify(res)+res.data.status)
    if(res.status==200){
      console.log("My data"+res.data)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      <Redirect to="/home" />
    }
    
    dispatch({ type: "LOGIN_FAILURE0", payload: null});
    
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
