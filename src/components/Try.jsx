import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Try = () => {
    var [hname,setHname]=useState("");
    const ChangeHname=() =>{
        setHname(" To Home Page")
    }
    const ChangeIname=() =>{
        setHname("To Gallery Page")
    }
    const ChangeJname=() =>{
        setHname("To Contacts Page")
    }
    
  return (
    <div>
        <Button variant='contained' color='primary' onClick={ChangeHname}>Home</Button>
        <br/>
        <br/>
        <Button variant='contained' color='secondary' onClick={ChangeIname}>Gallery</Button>
        <br/>
        <br/>
        <Button variant='contained' color='success' onClick={ChangeJname}>Contact</Button>
        <br/>
        <br/>
        <Typography variant ='h2'>Welcome {hname}</Typography>
    </div>
  )
}

export default Try