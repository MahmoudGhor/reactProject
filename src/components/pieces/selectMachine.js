import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {Col, FormInput, FormSelect} from "shards-react";
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
import swal from 'sweetalert';
import axios from "axios";
import Spinner from "../common/Spinner";


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

class SelectMachine extends React.Component {
  state = {
    machine: [],
    etat: false,
    errors: {},
    id: '',
    prixMachineParHeure: 0,
    NombreTotalHeures: 0,
    nbHeure: 0
  };


  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/machine/functionMachine'

    }).then((res) => {
      this.setState({
        etat: true,
        machine: res.data.data.machines,
      })
    })
  }

  handleClose = () => {
    for (let i = 0; i < this.state.machine.length; i++) {
      if (this.state.machine[i]._id === this.state.id) {
        const myMachine = {
          ...this.state.machine[i],
          nbHeure: this.state.nbHeure
        }

        this.props.onClose(myMachine);
      }
    }
  };
  handlecheckboxchange = () => {
    this.setState(state => ({fonctionne: !state.fonctionne}))

  };
  handleCloseWithoutNothing = () => {
    this.props.onClose(null)
  };

  changeMachine = e => {
    for (let i = 0; i < this.state.machine.length; i++) {
      if (this.state.machine[i]._id === e.target.value) {
        this.setState({
          id: this.state.machine[i]._id,
          prixMachineParHeure: this.state.machine[i].prix_par_hr,
          NombreTotalHeures: this.state.machine[i].nombre_hr_travail
        });
      }
    }
  };


  setnbHeure = e => {
    this.setState({nbHeure: e.target.value})
  };


  render() {

    const {activeStep} = this.state;
    const {classes, onClose, selectedValue, ...other} = this.props;
    if (this.state.machine.length === 0 && this.state.etat === false) {
      return <Spinner/>;
    }

    return (
      <Dialog onClose={this.handleCloseWithoutNothing} aria-labelledby="simple-dialog-title" {...other}>

        <main className={classes.main}>
          <CssBaseline/>
          <Paper className={classes.paper}>
            <img
              style={{maxWidth: "60px"}}
              src={window.location.origin + '/images/1004733.png'}
              alt="Shards Dashboard"
            />
            <Typography component="h1" variant="h5">
              Selectionnez votre machine
            </Typography>
            <div className={classes.form}>
              <FormSelect onClick={this.changeMachine.bind(this)}>
                <option>Choose ...</option>
                {this.state.machine.map((item) => <option value={item._id}>{item.name}</option>)}
              </FormSelect>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="NombreTotalHeures">NombreTotalHeures</InputLabel>
                <Input name="nombre_hr_travail" value={this.state.NombreTotalHeures} disabled
                       type="number" id="nombre_hr_travail" autoComplete="current-nombre_hr_travail"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="prixMachineParHeure">prixMachineParHeure</InputLabel>
                <Input name="prixMachineParHeure" disabled value={this.state.prixMachineParHeure}
                       type="number" id="nombre_hr_travail" autoComplete="current-nombre_hr_travail"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="prixMachineParHeure">nombre d'heure de travail</InputLabel>
                <Input name="prixMachineParHeure" onChange={this.setnbHeure.bind(this)}
                       type="number" id="nombre_hr_travail" autoComplete="current-nombre_hr_travail"/>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleClose.bind(this)}
              >
                Valider la machine Machine
              </Button>
            </div>
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
)(SelectMachine);
