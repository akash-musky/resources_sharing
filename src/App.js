import styled from "styled-components"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App=()=>(
   
  <div className="App">
  <BrowserRouter>
  <Header/>
  {/* <Chat/> */}
  <AppBody>
  <Sidebar/>
    <Routes>
      <Route path="/" element={<Chat/>} exact/>
    </Routes>

    </AppBody>
    
  </BrowserRouter>
  </div>
);
export default App;


const AppBody=styled.div`
display: flex;
height: auto;
`