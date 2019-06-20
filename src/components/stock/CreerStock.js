import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Dialog from '@material-ui/core/Dialog';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
class CreerStock extends React.Component {
  state = {
    activeStep: 0,
    disponibilté: false
  };

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };
  handlecheckboxchange =() =>{
    this.setState(state => ({disponibilté: !state.disponibilté}))
  }


  render() {

    const { activeStep } = this.state;
    const { classes, onClose, selectedValue, ...other } = this.props;


  return (
    <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>

    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <div >
          <img
            style={{ maxWidth: "60px" }}
            src={window.location.origin + '/images/panier.jpg'}
            alt="Shards Dashboard"
          />
        </div>
        <Typography component="h1" variant="h5">
         Nouveau Produit
        </Typography>
        <form className={classes.form}>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor=" Name">Nom</InputLabel>
            <Input id=" Name" name=" Name" autoComplete=" Name" autoFocus />
          </FormControl>


          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor=" quantité">quantité</InputLabel>
            <Input id=" quantité" name=" quantité" autoComplete=" quantité" autoFocus />
          </FormControl>


          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="prix_par_kg">prix par kg</InputLabel>
            <Input id="prix_par_kg" name="prix_par_kg" autoComplete="prix_par_kg" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="poids">poids</InputLabel>
            <Input name="poids" type="poids" id="poids" autoComplete="current-poids" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value={this.state.disponibilté} onChange={this.handlecheckboxchange} color="primary" />}
            label={this.state.disponibilté? "disponible" : "indisponible"}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ajouter un produit
          </Button>
        </form>
      </Paper>
    </main>
    </Dialog>
  );
}
}
CreerStock.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(CreerStock);
