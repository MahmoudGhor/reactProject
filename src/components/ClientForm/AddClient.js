import React, { Component } from 'react';
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

class  AddClient extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      adresseEmail:"",
      numerotelephone :"",
      fax:"",
      adresse:"",
      datenaissance:"",
      errors: {}
    };
  }


  changeEmailAddress(e) {
    this.setState({adresseEmail: e.target.value});
  }

  changenam(e) {
    this.setState({name: e.target.value});
  }
  changelastname(e) {
    this.setState({lastname: e.target.value});
  }
  changenumerotelephone(e) {
    this.setState({numerotelephone: e.target.value});
  }
  changefax(e) {
    this.setState({fax: e.target.value});
  }
  changdatenaissance(e) {
    this.setState({datenaissance: e.target.value});
  }
  changeadresse(e) {
    this.setState({adresse: e.target.value});
  }

  clicked (e){
    if (this.state.pwd === this.state.pwd2){
      const userdata = {
        adresseEmail : this.state.email,
        adresse : this.state.adresse,
        name : this.state.name,
        lastname: this.state.lastname,
        numero_de_telephone : this.state.numerotelephone,

      }
        this.props.registerUser(userdata);
    }else{
      console.log('no');
    }
  }


  render() {
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
        <div >
          <img
            style={{ maxWidth: "80px" }}
            src={window.location.origin + '/images/client2.png'}
            alt="Shards Dashboard"
          />
        </div>
        <Typography component="h1" variant="h5">
        Ajouter un Client
        </Typography>
        <form className={classes.form}>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="lastname">nom </InputLabel>
            <Input id="lastname" onChange={this.changelastname.bind(this)}  name="lastname" autoComplete="lastname" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">prenom </InputLabel>
            <Input id="name" onChange={this.changenam.bind(this)}  name="name" autoComplete="name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" onChange={this.changeEmailAddress.bind(this)}  name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="numthlph">numero de téléphone</InputLabel>
            <Input id="numthlph" onChange={this.changenumerotelephone.bind(this)}  name="numthlph" autoComplete="numthlph" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="fax">numéro de fax </InputLabel>
            <Input id="fax"  onChange={this.changefax.bind(this)}  name="fax" autoComplete="fax" autoFocus />
          </FormControl>





          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          valider


          </Button>
        </form>
      </Paper>
    </main>
  );
}
}

AddClient.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default compose(
  (withStyles(styles)),
  connect(
    mapStateToProps,
    )
)(AddClient);