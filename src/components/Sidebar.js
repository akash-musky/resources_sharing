//Importing Library
import React from 'react'
import styled from "styled-components"

//Importing Necessary File
import Sidebaroptions from './Sidebaroptions'

//Importing All Necessary Icons
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"

import {useCollection} from "react-firebase-hooks/firestore";
import {db,auth} from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';


function Sidebar() {

    const [channels]=useCollection(db.collection("rooms"));
    const [user]=useAuthState(auth)
    
  return (

    <SidebarContainer>

        <SidebarHeader>
               <SidebarInfo>
                   <h2>Tech pyChat</h2>
                   <h3>
                       <FiberManualRecordIcon/>
                        {user.displayName}
                   </h3>
               </SidebarInfo>

               <CreateIcon/>
        </SidebarHeader>

        <Sidebaroptions Icon={InsertCommentIcon} title="Threads"/>
        <Sidebaroptions Icon={InboxIcon} title="Mentions & reactions"/>
        <Sidebaroptions Icon={DraftsIcon} title="Saved items"/>
        <Sidebaroptions Icon={BookmarkBorderIcon} title="Channgel browser"/>
        <Sidebaroptions Icon={PeopleAltIcon} title="People & user groups"/>
        <Sidebaroptions Icon={AppsIcon} title="Apps"/>
        <Sidebaroptions Icon={FileCopyIcon} title="File browser"/>
        <Sidebaroptions Icon={ExpandLessIcon} title="Show less"/>
        <hr/>
        <Sidebaroptions Icon={ExpandMoreIcon} title="Channels"/>
        <hr/>

        <Sidebaroptions Icon={AddIcon} addChannelOptions title="Add Channel"/>

        {
            channels?.docs.map((doc)=>(
                <Sidebaroptions 
                key={doc.id}
                id={doc.id}
                title={doc.data().name}
                />
            ))
        }
    </SidebarContainer>
    
  )
}

export default Sidebar

const SidebarContainer=styled.div`
color: white;
background-color: var(--pychat-color);
flex: 0.3;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;
overflow-y: scroll;

> hr{
    margin-top: 10px;
    margin-bottom: 10px;
    border:  1px solid #49274b;
}

`
const SidebarHeader=styled.div`
display: flex;
border-bottom: 1px solid #492744;
padding: 13px;

> .MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}
`
const SidebarInfo=styled.div`
flex: 1;

>h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}

>h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}

>h3 > .MuiSvgIcon-root{
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}
`