import { useContext, useRef } from "react";
import { Redirect } from "react-router-dom";
// import "./login.css";
import styled from 'styled-components'
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import {Link} from "react-router-dom";



const Container = styled.div`
width: 100w;
height: 100vh;
background-image:url("https://images.unsplash.com/photo-1485288734756-0b31a0a31d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1cnJlZCUyMHZpc2lvbnxlbnwwfHwwfHw%3D&w=1000&q=80");
background-size: cover;
display: flex;
align-items: center;
justify-content: center;


`


const Wrapper = styled.div`
padding: 20px;
width:25% ;
background-color: white;





`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
text-align: center;

`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
width:100%;
height:15%;
`


const Button=styled.button`
width: 70%;
border: none;
padding: 15px 20px;
background-color: #060606;
color: white;
cursor: pointer;
margin-bottom: 3px;

`
const link=styled.a`
margin: 5px 0px;
font-size: 15px;
text-decoration: underline;
cursor: pointer;
`

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <Container >
      <Wrapper>
        
          <Title >
           STAFF SIGNIN
          </Title>
       
          <Form className="loginBox" onSubmit={handleClick}>
            <Input
              placeholder="Email"
              type="email"
              required
             
              ref={email}
            />
            <Input
              placeholder="Password"
              type="password"
              required
              minLength="3"
             
              ref={password}
            />
            <Button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </Button>
            <a href="#">forget passsword?</a>
          </Form>
       
      </Wrapper>
    </Container>
//     <Container>
//     <Wrapper>
//         <Title>ADMIN SIGNIN</Title>
//         <Form className="loginbox" onSubmit={handleClick}>
//             <Input placeholder="email" ref={email}/>
//             <Input placeholder="password" required minLength="6" ref={password} />
//             <Button disabled={isFetching}>LOGIN<link to="/login" ></link>
        
              
//               </Button>
//             <link>Forget the passsword?<span>click here</span></link>
//             <link to="/stafflogin" >staff login</link>
//         </Form>

//     </Wrapper>

// </Container>
  );
}
