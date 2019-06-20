import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 225,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [offre, setAge] = React.useState('');
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

  return (
    <form autoComplete="off">
      <Button className={classes.button} onClick={handleOpen}>
        ajouter un devis
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel style={{fontWeight: 'bold'}} htmlFor="demo-controlled-open-select">choisir l'offre correspondant </InputLabel>
        <Select style={{fontWeight: 'bold'}}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={offre}
          onChange={handleChange}
          inputProps={{
            name: 'offre',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>offre1</MenuItem>
          <MenuItem value={20}>offre2</MenuItem>
          <MenuItem value={30}>offre3</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
