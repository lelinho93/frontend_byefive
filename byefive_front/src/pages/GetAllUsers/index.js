import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const CardContainer = styled.div`
box-shadow: 0 2px 6px 0 rgb(0, 0, 0);
width: 20vw;
border-radius: 5px;
margin: 15px;
padding: 5px;
min-width: 300px;
`

export default function GetAllUsers() {

const [users, setUsers] = useState([])
    
    useEffect(() => {
    axios.get('https://backend-byefive.herokuapp.com/api/user/all')
    .then(response => {
        setUsers(response.data)        
    })
    .catch(err => {
        alert(err.message)
    })
},[users])

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