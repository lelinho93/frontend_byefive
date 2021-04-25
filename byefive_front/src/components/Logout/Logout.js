import React from 'react'
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { ButtonsContainer } from './styles';
import { Link } from 'react-router-dom';



const Logout = () => {
    const history = useHistory()

    function logout() {
        window.localStorage.removeItem('token')
        history.push('/')
    }


  return <div>   
    <ButtonsContainer>      
      <Link>
        <Button  variant={'contained'} color={'primary'} onClick={logout}>Sair do Sistema</Button>
      </Link>
    </ButtonsContainer>
  </div>
}

export default Logout