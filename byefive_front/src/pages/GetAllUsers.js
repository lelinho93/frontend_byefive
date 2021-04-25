import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: collumn;
justify-content: center;
`

const Card = styled.div`
width: 20vw;
border: solid black 2px;
border-radius: 20px;
margin: 10px;
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
    <Card>    
    <p>Nome: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>ID: {user._id}</p>
    </Card>
))

    return(
        <div>
            <h2>Usuários cadastrados</h2>            
            <Container>{result}</Container>
        </div>
    )
        
        }