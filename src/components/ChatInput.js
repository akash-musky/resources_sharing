import React, {useState} from 'react'
import styled from 'styled-components'
import {db} from "../firebase"
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "../firebase"



function ChatInput({channelName, channelId,chatRef}) {
   
  
    const [input, setInput]=useState('');
    const[user]=useAuthState(auth);
    // useEffect(()=>{

    // },[channelId])

    const sendMessage=(e)=>
    {
        
        e.preventDefault(); //Prevents refresh
        if(!channelId)
        {
            console.log(channelId);
            return false;
        }

        console.log(channelId);


        db.collection('rooms').doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        })

       
  
         chatRef.current.scrollIntoView({
             behavior: "smooth",
         })

        setInput('');
    }
  return (
  <ChatInputContainer>
      <form>
          <input
           value={input}
           onChange={(e)=>setInput(e.target.value)}
           placeholder={`Message #${channelName}`}/>
          <button  hidden  type='submit' onClick={sendMessage}>
              <h1>Send Message Musky</h1>
          </button>
      </form>
  </ChatInputContainer>
  )
}

export default ChatInput


const ChatInputContainer=styled.div`
 border-radius: 20px;

 >form {
     position: relative;
     display: flex;
     justify-content: center;
 }

 > form > input{

    position: fixed;
    bottom: 30px;
    width:60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
 }

 > form > button {
     display: none;
 }
`