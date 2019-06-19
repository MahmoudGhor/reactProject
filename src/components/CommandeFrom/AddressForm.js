import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ButtonClientCommande from './ButtonClientCommande';
import PubSub from 'pubsub-js';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,

  },
}));

function AdressForm() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setAge(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);

  }

  const openClientForm = () => {
    PubSub.publish('openCrerclient', null);
  }


  return (
    <form autoComplete="off">
<div style={{display : 'flex'}}>
  <div style={{marginRight:'20px',borderWidth:'2px'}}>
      <Button className={classes.button} onClick={handleOpen}>
        Déja client
      </Button>
  <FormControl className={classes.formControl}>
    <div >
      <InputLabel htmlFor="demo-controlled-open-select">selectionner un client</InputLabel>
      <Select style={{width:'200px'}}
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={age}
              onChange={handleChange}
              inputProps={{
                name: 'selectionner un client ',
                id: 'demo-controlled-open-select',
              }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

    </div>
  </FormControl>
  </div>


      <div >
        <Button variant="contained" color="primary" className={classes.button}
                onClick={openClientForm}>
          ajouter un client
        </Button>
      </div>
</div>
    </form>
  );
}

export default AdressForm;
