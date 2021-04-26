import React from 'react';
import axios from 'axios';
import { useForm } from '../../hooks/useForm'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function DeleteUser() {
  const classes = useStyles();

  const { form, onChange } = useForm({id: ""})
  

  const handleInputChange = (event) => {
    const { value, name } = event.target

    onChange(value, name)
}

const onSubmitForm = (event) => {
    event.preventDefault()
        
    axios.delete("http://localhost:5000/api/user/delete", form)

    .then(response => { 
        console.log(response.data)     
        alert("Usuário excluído!")
    })
    .catch(error => {
      console.log(error.message)
    })
    
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Excluir usuário pelo ID
        </Typography>
        <form className={classes.form} onSubmit={onSubmitForm}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            label="ID"
            name="id"
            value={form.id}
            onChange={handleInputChange}
            autoComplete="id"
            autoFocus
          />          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Excluir
          </Button>          
        </form>
      </div>      
    </Container>
  );
}