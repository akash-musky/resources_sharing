import styled from "styled-components"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"
import Login from "./components/Login"

import pi from './Images/pi.jpg'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "./firebase"
var Spinner = require('react-spinkit');

function  App(){
   
  const [user,loading]=useAuthState(auth);

  if(loading)
  {
    return(
      <AppLoading>
          <AppLoadingContent>
                <img
                  src={pi}
                  alt="Loading"
                />

                <Spinner
                name="ball-spin-fade-loader"
                color="purple" fadeIn="none"
                />

          </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
  <div className="App">
  <BrowserRouter>

  {!user?(<Login/>):
  (
      <>
     <Header/>
     <AppBody>
     <Sidebar/>
       <Routes>
         <Route path="/" element={<Chat/>} exact/>
       </Routes>
   
       </AppBody>
       </>
  )}
  
  </BrowserRouter>
  </div>
  )
}
export default App;


const AppBody=styled.div`
display: flex;
max-height: 100vh;
`

const AppLoadingContent=styled.div`
text-align: center;
padding-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> img{
  height: 50px;
  padding: 20px;
  margin-bottom: 40px;
}
`
const AppLoading=styled.div`
display: grid;
/* justify-content: space-around; */
/* border: 100px solid black; */
place-items: center;
height: 100vh;
width: 100vw;

`