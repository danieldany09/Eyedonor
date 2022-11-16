
// import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import React from 'react'
import styled from 'styled-components'
// import { mobile } from '../responsive';

const Container=styled.div`
height:60vh;
background-color:black;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;



`
const Title=styled.h4`
font-size:50px;
margin-bottom:20px;
color: white;


`
const Description=styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: white;

`
const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;






`
const Input=styled.input`
border:none;
flex:8;
padding-left:20px;

`
const Button=styled.button`
flex:1;
border:none;
background-color: black;
color:white;
`




const News = () => {
  return (
    <Container>
        <Title>UPDATES</Title>
        <Description>SIGNUP NEWSLETTER</Description>
        <InputContainer>
        <Input placeholder='enter your email'/>
        <Button>
        {/* <FontAwesomeIcon icon="fa-solid fa-paper-plane-top" /> */}
        {/* <FontAwesomeIcon icon="fa-regular fa-paper-plane-top" /> */}
        <i class="fa-solid fa-paper-plane" style={{color:"white"}}></i>

                </Button>
        </InputContainer>
    </Container>
  )
}

export default News
