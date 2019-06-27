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
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "recompose";


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
class CreerMachine extends React.Component {
  state = {
    activeStep: 0,
    fonctionne: false,
    name: "",
    reference: "",
    prix_par_hr:"",
    nombre_hr_travail :"",
    etat: false,
    
      errors: {}
  };
  changereference(e) {
    this.setState({reference: e.target.value});
  }

  changename(e) {
    this.setState({name: e.target.value});
  }
  changeprix_par_Heur(e) {
    this.setState({prix_par_hr: e.target.value});
  }
  changenombre_hr_travail(e) {
    this.setState({nombre_hr_travail: e.target.value});
  }
  changeetat() {
    this.setState(state => ({etat: !state.etat}));
    console.log(this.state.etat)
  }
  clicked (e){
  
      const userdata = {
        name: this.state.name,
        reference : this.state.reference,
        name : this.state.name,
        prix_par_hr: this.state.prix_par_hr,
        nombre_hr_travail: this.state.nombre_hr_travail,
        etat : this.state.etat
      }
        console.log(userdata);
    }

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };
  handlecheckboxchange =() =>{
    this.setState(state => ({fonctionne: !state.fonctionne}))
  }


  render() {

    const { activeStep } = this.state;
    const { classes, onClose, selectedValue, ...other } = this.props;
    

    


  return (
    <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>

    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         nouveua machine
        </Typography>
        <form className={classes.form}>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor=" Name">Nom</InputLabel>
            <Input id="Name" name=" Name" autoComplete="Name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor=" Name">reference</InputLabel>
            <Input id="Name"  onChange={this.changename.bind(this)} name=" Name" autoComplete="Name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="prix_par_Heur">prix par Heur</InputLabel>
            <Input id="prix_par_Heur"  onChange={this.changeprix_par_Heur.bind(this)} name="prix_par_Heur" autoComplete="prix_par_Heur" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="nombre_hr_travail">nombre d'heur de travail </InputLabel>
            <Input name="nombre_hr_travail"  onChange={this.changenombre_hr_travail.bind(this)} type="nombre_hr_travail" id="nombre_hr_travail" autoComplete="current-nombre_hr_travail" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox  onChange={this.changeetat.bind(this)} color="primary" />}
            label={this.state.etat? "fonctionnelle" : "en panne"}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.clicked.bind(this)}
          >
            ajouter une Machine
          </Button>
        </form>
      </Paper>
    </main>
    </Dialog>
  );
}
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default compose(
  (withStyles(styles)),
  connect(
    mapStateToProps,
    )
)(CreerMachine);;
