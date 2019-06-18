
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import PubSub from 'pubsub-js';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));



function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>

      <Button variant="contained"  color="primary" className={classes.button}>
        ajouter un client
      </Button>


    </div>
  );
  }
export default ContainedButtons ;
