import React, {useState} from 'react'
import styled from 'styled-components'
import {db} from "../firebase"
import firebase from 'firebase/compat/app';



function ChatInput({channelName, channelId,chatRef}) {
   
  
    const [input, setInput]=useState('');
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
            user: 'Akash Musky',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhgktV16gaea7t50qLyBPiciIYKe8xpakTc495iXDGw&s'
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