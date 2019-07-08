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
import withStyles from '@material-ui/core/styles/withStyles';
import {loginUser} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {compose} from "recompose";
import {Link, Redirect} from "react-router-dom";

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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pwd: "",
      errors: {}
    };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/clients");
    }

    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/clients");
    }
  }

  changeEmailAddress(e) {
    this.setState({email: e.target.value});
  }

  changepassword(e) {
    this.setState({pwd: e.target.value});
  }

  clickLogin(e) {
    const {email, pwd} = this.state;
    const auth = {
      email,
      password: pwd
    };
    this.props.loginUser(auth);
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
        <CssBaseline/>
        <Paper className={classes.paper}>
          <div className={classes.avatar}>
            <img
              style={{maxWidth: "80px"}}
              src={window.location.origin + '/images/logo.png'}
              alt="Shards Dashboard"
            />
          </div>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" error={errors.email} onChange={this.changeEmailAddress.bind(this)} name="email"
                     autoComplete="email"
                     autoFocus/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" error={errors.password} onChange={this.changepassword.bind(this)} type="password"
                     id="password"
                     autoComplete="current-password"/>
            </FormControl>
            {errors.message ? (

              <InputLabel htmlFor="email">{errors.message}</InputLabel>
            ) : (
              ""
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"/>}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.clickLogin.bind(this)}
            >
              Sign in
            </Button>
            <Typography component="h6" variant="h6" style={{marginTop: '10px', fontSize: '14px'}}>
              Vous n'avez pas de compte ?
              <Link to={"/signUp"}>

                <Button style={{marginTop: '0px'}}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                >
                  Sign Up
                </Button>
              </Link>
            </Typography>
          </div>
        </Paper>
      </main>

    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default compose(
  (withStyles(styles)),
  connect(
    mapStateToProps,
    {loginUser})
)(SignIn);
