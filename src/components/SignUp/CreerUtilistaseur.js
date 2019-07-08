import React, {Component} from 'react';
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
import {registerUser} from '../../store/actions/registreAction';
import withStyles from '@material-ui/core/styles/withStyles';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "recompose";

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

class SignUp extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
     pwd: "",
     pwd2:"",
     name : "",
     lastname:"",
    errors: {}
    };
  }

  changeEmailAddress(e) {
    this.setState({email: e.target.value});
  }
  changename(e) {
    this.setState({name: e.target.value});
  }
  changelastname(e) {
    this.setState({lastname: e.target.value});
  }

  changepassword(e) {
    this.setState({pwd: e.target.value});
  }
  changepassword2(e) {
    this.setState({pwd2: e.target.value});
  }
  clicked (e){
    if (this.state.pwd === this.state.pwd2){
      const userdata = {
        email : this.state.email,
        password : this.state.pwd,
        name : this.state.name,
        lastname: this.state.lastname
      }
        this.props.registerUser(userdata);
    }else{

    }
  }



  render () {
    const {from} = this.props.location.state || {from: {pathname: "/clients"}};
    const {auth} = this.props;
    if (auth.isAuthenticated === true) {
      return <Redirect to={from}/>;
    }

const {classes} = this.props;
const {errors} = this.state;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <div className={classes.avatar}>
          <img
            style={{ maxWidth: "80px" }}
            src={window.location.origin + '/images/logo.png'}
            alt="Shards Dashboard"
          />
        </div>
        <Typography component="h1" variant="h5">
          Bienvenue à SOPROCOM
        </Typography>
        <div className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" onChange={this.changeEmailAddress.bind(this)} name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="nom">Nom</InputLabel>
            <Input id="nom" onChange={this.changename.bind(this)} name="nom" autoComplete="nom" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="prenom">Prenom</InputLabel>
            <Input id="prenom"  onChange ={this.changelastname.bind(this)} name="prenom" autoComplete="prenom"  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" onChange={this.changepassword.bind(this)} type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Confirmation Password</InputLabel>
            <Input name="password"  onChange={this.changepassword2.bind(this)} type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <Button
          onClick ={this.clicked.bind(this)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </div>
      </Paper>
    </main>
  );
  }
}
SignUp.propTypes = {

  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
});

export default compose(
  (withStyles(styles)),
  connect(
    mapStateToProps,
    {registerUser})
)(SignUp);
