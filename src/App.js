import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {Grid, Paper} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme => ({
  root:{
    flexGrow: 1,
  },
  paper:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})))


function App() {
  const classes = useStyle();
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
