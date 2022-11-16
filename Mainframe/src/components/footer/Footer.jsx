// import { Email, Facebook, Instagram, Phone, Room, Twitter, YouTube } from '@mui/icons-material'

import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
display:flex;
color:white;
background-color:#181717;



`
const Left = styled.div` 
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;
const Logo = styled.h1` 


`
const Description = styled.p` 
 margin:20px 0px;

`
const SocialIcons = styled.div` 
 display:flex;
 cursor: pointer;


`
const Icon = styled.div` 
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;


`







const Center = styled.div`
flex:1;
padding:20px;

`


const Title = styled.h3`
margin-bottom:30px;
`

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`

const Item = styled.li`
width:50%;
margin-bottom:10px;

`


const Right = styled.div`
flex:1;
padding:20px;

`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;

`
// const Payment=styled.img`
// width:50%;
// `

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Vision</Logo>
                <Description>Enlighten Foundation is a Not for Profit organization
                     aimed at automation of Eye Donation Campaigning Process resulting 
                     in building a Eye Donor Registry and funding of Eye Transplant Surgeries.
                     </Description>
                <SocialIcons>
                    <Icon color="3B5999">
                    
                     <i class="fa-brands fa-facebook"></i>
                     
                    </Icon>
                    <Icon color="E4405F">
                    <i class="fa-brands fa-instagram"></i>
                        {/* <Instagram /> */}
                    </Icon>
                    <Icon color="55ACEE">
                    <i class="fa-brands fa-twitter"></i>
                        {/* <Twitter /> */}
                    </Icon>
                    <Icon color="FF0000">
                        {/* <YouTube /> */}
                        <i class="fa-brands fa-youtube"></i>
                    </Icon>
                </SocialIcons>
            </Left>
            <Center>
                <Title>SITE links</Title>
                <List>
                    <Item><a href='/home' style={{textDecoration:"none"}}>Home</a></Item>
                    <Item><a href='/Eyebank' style={{textDecoration:"none"}}>EyeBanks</a></Item>
                    <Item><a href='/register' style={{textDecoration:"none"}}>Register</a></Item>
                    <Item><a href='/about' style={{textDecoration:"none"}}>About</a></Item>
                    
                </List>



            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                <i class="fa-solid fa-house" style={{marginRight:"1px"}}></i> <p style={{padding:"5px"}}><a href='https://kongu.ac.in/'>Kongu Engineering College</a></p>
                   {/* < style={{marginRight:"10PX"}}/> kongu engineering college */}
                </ContactItem>
                <ContactItem>
                <i class="fa-solid fa-phone"></i><p style={{padding:"5px"}}><a href=''>+91 9345844496</a></p> , <p style={{padding:"5px"}}><a href=''>+91 6385687966</a></p>

                    {/* <Phone style={{marginRight:"10PX"}}/> 9345844496 */}
                </ContactItem>
                <ContactItem>
                <i class="fa-solid fa-envelope"></i>
                <p style={{padding:"5px"}}><a href=''>danielrajav.20it@kongu.edu</a></p>,
                <p style={{padding:"5px"}}><a href=''>manibharathim.20it@kongu.edu</a></p> 


                    {/* <Email style={{marginRight:"10PX"}}/> danielrajav.20it@kongu.edu */}
                </ContactItem>
                {/* <Payment src={payment}/> */}

            </Right>



        </Container>



    )
}

export default Footer