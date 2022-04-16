import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import pi from './../Images/pi.jpg'
import {auth, provider} from "../firebase"

function Login() {
    const signin=(e)=>{
        e.preventDefault(); //prevents refresh
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }
  return (
  <LoginContainer>
        <LoginInnerContainer>
           <img src={pi}
            alt="Non-Terminating"
           />
           <h1>Sign in to the PiChat</h1>
           <p>akash.pichat.com</p>
           <Button  onClick={signin}>
               Sign In With Google
           </Button>
        </LoginInnerContainer>
  </LoginContainer>
  )
}

export default Login

const LoginContainer=styled.div`
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items: center;
`
const LoginInnerContainer=styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0, 0.12),0 1px 2px rgba(0,0,0, 0.24);
> img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
}

> Button{
    margin-top: 50px;
    text-transform: inherit;
    background-color: purple;
    color: white;

    :hover {
        background-color: purple;
    }
}
`
