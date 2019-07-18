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
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "recompose";
import axios from "axios";
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

class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      adresseEmail: "",
      numerotelephone: "",
      fax: "",
      adresse: "",
      datenaissance: "",
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

  clicked(e) {

    const userdata = {
      name: this.state.name,
      lastname: this.state.lastname,
      adresseEmail: this.state.adresseEmail,
      numero_de_telephone: this.state.numerotelephone,
      fax: this.state.fax,
      adresse: this.state.adresse,
      date_de_naissance: this.state.datenaissance
    };
    if (userdata.name.trim() ==''){
      swal("prenom client vide!", {
        icon: "warning",
      });
      
    }else if(userdata.lastname.trim() ==''){
      swal("  nom client vide!", {
        icon: "warning",
      });
    }else if(userdata.adresseEmail.trim() ==''){
      swal("adresse email  vide!", {
        icon: "warning",
      });
    }else if(userdata.numero_de_telephone.trim() ==''){
      swal("numero de  telephone  machine vide!", {
        icon: "warning",
      });
    }else if(userdata.fax.trim() ==''){
      swal("fax client  vide!", {
        icon: "warning",
      });
    }else if (userdata.adresse.trim()==''){
      swal("adresse client vide!", {
        icon: "warning",
      });
    }else if (userdata.date_de_naissance.trim()==''){
      swal("date de naissance  vide!", {
        icon: "warning",
      });

    }else
   
    this.props.getClient(userdata);

  }


  render() {


    const {classes} = this.props;
    const {errors} = this.state;

    return (
      <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <div>
            <img
              style={{maxWidth: "80px"}}
              src={window.location.origin + '/images/client2.png'}
              alt="Shards Dashboard"
            />
          </div>
          <Typography component="h1" variant="h5">
            Ajouter un Client
          </Typography>
          <div className={classes.form}>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="lastname">nom </InputLabel>
              <Input id="lastname" onChange={this.changelastname.bind(this)} name="lastname" autoComplete="lastname"
                     autoFocus required={true}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">prenom </InputLabel>
              <Input id="name" onChange={this.changenam.bind(this)} name="name" autoComplete="name" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="adresse">Adresse </InputLabel>
              <Input  id="adresse" onChange={this.changeadresse.bind(this)} name="adresse" autoComplete="adresse" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input  id="email" type="email" onChange={this.changeEmailAddress.bind(this)} name="email" autoComplete="email"
                     />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="date">Date de Naissance</InputLabel>
              <Input id="dateDeNaissance" type ='date' onChange={this.changdatenaissance.bind(this)} name="DateDeNaissance" autoComplete="Date Naissance"
                     />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="numthlph">numero de téléphone</InputLabel>
              <Input id="numthlph" type ='number' onChange={this.changenumerotelephone.bind(this)} name="numthlph"
                     autoComplete="numthlph" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="fax">numéro de fax </InputLabel>
              <Input id="fax"   type ='number' onChange={this.changefax.bind(this)} name="fax" autoComplete="fax" />
            </FormControl>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.clicked.bind(this)}
            >
              valider


            </Button>
          </div>
        </Paper>
      </main>
    );
  }
}

AddClient.propTypes = {
  classes: PropTypes.object.isRequired,
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
  )
)(AddClient);
