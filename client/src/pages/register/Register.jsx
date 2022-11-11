import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import {Link} from "react-router-dom"
import styled from 'styled-components'

const Container = styled.div`
width: 100;
height: 100vh;
background-image:url("https://images.unsplash.com/photo-1485288734756-0b31a0a31d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1cnJlZCUyMHZpc2lvbnxlbnwwfHwwfHw%3D&w=1000&q=80");
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

`

const Wrapper = styled.div`
padding: 20px;
width:40% ;
background-color: white;




`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
display: flex;
text-align: center;
justify-content: center;

`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;


`

const Agreement = styled.span`
font-size:12px;
margin: 20px 0px;

`


const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #060606;
color: white;
cursor: pointer;
`
const Butt=styled.div`
padding:10px

`



export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  
  const history = useHistory();



  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
       
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
 


    <Container>
    <Wrapper>
      <Title>STAFF</Title><br/>
        <Title>CREATE AN ACCOUNT</Title>
        <Form className="loginBox" onSubmit={handleClick}>

            <Input placeholder="Email" required ref={email} className="loginInput" type="email" />
            <Input placeholder="username" required ref={username} className="loginInput" />
            <Input placeholder="password" required ref={password} className="loginInput" type="password" minLength="6" />
            <Input placeholder="confirm password"required ref={passwordAgain} className="loginInput"  type="password" />
            <Agreement>By creating an account.I consent to the processing of my
                personal data in accordance with the <b>privacy policy</b>
            </Agreement>
            {/* <button className="loginButton" type="submit">
               Sign Up
           </button> */}
           
           <Button className="loginButton" type="submit">CREATE</Button>
           <br/>
           
            
            {/* <Button className="loginregisterbutton"></Button>             */}
           <Butt><p style={{}}>Already Have an account?<Link to="/login">SignIn</Link></p></Butt>
              
            
          
            
        </Form>

    </Wrapper>

</Container>
  );
}
