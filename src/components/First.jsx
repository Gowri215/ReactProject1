import React from 'react'
import { TextField, Typography } from '@mui/material';

const First = () => {
  return (
    <div>
        <h1>Gowri Saadhika</h1>
    <input placeholder="Name"/>
    <br/>
    <input type='password' placeholder="Password"/>
    <br/>
    <button>Submit</button>

    <br/>

    <Typography variant='h1'>Gowri Saadhika</Typography>
    <br/>
    <TextField variant='outlined' label='Name'/>
    <br/>
    <TextField variant='standard' label='Password'/>
    <br/>
    <TextField variant='filled' label='Email id'/>
    <br/>
    </div>
  )
}

export default First