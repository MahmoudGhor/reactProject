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
import swal from 'sweetalert';

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
    email: '',
    name:'',
    lastname: '',
    password: '',
    password2:''
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

  changeMotDePasse = e => {
    this.setState({password : e.target.value});
  };

  repeatMotDePasse = e => {
    this.setState({password2 : e.target.value});
  }



  handleClose = () => {
    if (this.state.password === this.state.password2){
      const user = {
        name: this.state.name,
        email: this.state.email,
        lastname: this.state.lastname,
        password: this.state.password,
      };
      if (user.name.trim() ==''){
        swal("adresse name vide!", {
          icon: "warning",
        });
        
      }else if (user.password.trim() ==''){
        swal("mot de passe  vide!", {
          icon: "warning",
        });
  
      }else if (user.email.trim() ==''){
        swal("email  vide!", {
          icon: "warning",
        });
      }else if (user.lastname.trim() ==''){
          swal("prenom  vide!", {
            icon: "warning",
          });
        }else if (user.pwd ==! user.pwd2)
        {
          swal("mot de passe non comfirmer ", {
            icon: "warning",
          });
        }else 
      this.props.onClose(user);
    }else{
      this.props.onClose(null);
    }
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
            src={window.location.origin + '/images/1004733.png'}
            alt="Shards Dashboard"
          />
        </div>
        <Typography component="h1" variant="h5">
        Ajouter un utilisateur
        </Typography>
        <div className={classes.form}>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Prenom</InputLabel>
            <Input id="name" name="name"  onChange={this.changeName.bind(this)}  autoComplete="Nom" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="last Name">Nom</InputLabel>
            <Input id="Last Name" name="Last Name"  onChange={this.changeLastName.bind(this)} autoComplete="Last Name"  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Addresse Email</InputLabel>
            <Input id="email" name="email" onChange={this.changeEmail.bind(this)}  autoComplete="email"  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">mot de passe</InputLabel>
            <Input name="password" type="password" onChange={this.changeMotDePasse.bind(this)} id="password" autoComplete="current-password" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password"> confirmer le mot de passe</InputLabel>
            <Input name="password" type="password"   onChange={this.repeatMotDePasse.bind(this)}id="password" autoComplete="current-password" />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleClose.bind(this)}
          >
            Ajouter utilisateur
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
