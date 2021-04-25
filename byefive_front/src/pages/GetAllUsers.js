import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


const Container = styled.div`
display: flex;
flex-direction: collumn;
justify-content: center;
`

const CardContainer = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 20vw;
border-radius: 5px;
margin: 15px;
padding: 10px;
`

export default function GetAllUsers() {

const [users, setUsers] = useState([])
console.log(users)

    
    useEffect(() => {
    axios.get('http://localhost:5000/api/user/all')
    .then(response => {
        setUsers(response.data)        
    })
    .catch(err => {
        alert(err.message)
    })
},[])

const result = users.map((user) => (
    <CardContainer>    
        <Typography gutterBottom variant="h6"> Nome: {user.name}</Typography>
        <p>Email: {user.email}</p>
        <p>ID: {user._id}</p>
    </CardContainer>
))

    return(
        <div>
            <Box fontSize={40} m={2}>Usuários cadastrados</Box>            
            <Container>{result}</Container>
        </div>
    )        
}