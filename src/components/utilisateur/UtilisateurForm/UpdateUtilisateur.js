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
class CreerUtilisateur extends React.Component {
  state = {
    activeStep: 0,
    email: this.props.user.email,
    name: this.props.user.name,
    lastname: this.props.user.Last_Name,
  };

  handleClose = () => {
    const infoUser = {
      id:this.props.user._id,
      email : this.state.email,
      name : this.state.name ,
      lastname : this.state.lastname
    };
    this.props.onClose(infoUser);
  };

  changeEmail = e => {
    this.setState({email : e.target.value});
  };

  changeLastName = e => {
    this.setState({lastname : e.target.value});
  };

  changeName = e => {
    this.setState({name : e.target.value});
  };


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
            src={window.location.origin + '/images/UpdateUser.png'}
            alt="Shards Dashboard"
          />
        </div>
        <Typography component="h1" variant="h5">
        Modifier un utilisateur
        </Typography>
        <div className={classes.form}>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Prenom</InputLabel>
            <Input id="name" name="name" autoComplete="Nom" onChange={this.changeName.bind(this)}  defaultValue={this.props.user.name} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="last Name">Nom</InputLabel>
            <Input id="Last Name" name="Last Name" onChange={this.changeLastName.bind(this)} autoComplete="Last Name"  defaultValue={this.props.user.Last_Name} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Addresse Email </InputLabel>
            <Input id="email" name="email" onChange={this.changeEmail.bind(this)} defaultValue={this.props.user.email} autoComplete="email"  />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
         onClick={this.handleClose.bind(this)} >
            Modifier utilisateur
          </Button>
        </div>
      </Paper>
    </main>
    </Dialog>
  );
}
}
CreerUtilisateur.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(CreerUtilisateur);
