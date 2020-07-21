import React from 'react';
import {TextField, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import * as firebase from 'firebase/app';
import firebaseConfig from '../../Firebase';


firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles({
  registerComponent:{
    background: '#16161a',
    width: '100%',
    height: '100vh',
    position: 'relative',
  },
  registerForm:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textField:{
    background: '#fffffe',
    borderRadius: '5px',
  }

})

const Register = () =>{
  
  const classes = useStyles();

  return(
    <div className={classes.registerComponent}>
        <Grid container>
          <Grid item xs={12}>

       <form className={classes.registerForm}>
        <TextField 
          className={classes.textField} 
          variant='outlined' 
          label='Tài khoản'>
          fullWidth
        </TextField>      

      </form>
          </Grid>
        </Grid> 
    </div>
  )

}

export default Register;

