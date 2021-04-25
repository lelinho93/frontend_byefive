import React from 'react'
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Box from '@material-ui/core/Box';

const ButtonsContainer = styled.div`
padding: 5vw;
`

const Logout = () => {
    const history = useHistory()

    function logout() {
        window.localStorage.removeItem('token')
        history.push('/')
    }


  return (
  <div>   
    <Box fontSize={35} m={1}>Clique para sair</Box>  
    <ButtonsContainer>      
      <Link>
        <Button  variant={'contained'} color={'primary'} onClick={logout}>Sair do Sistema</Button>
      </Link>
    </ButtonsContainer>
  </div>
  )
}

export default Logout