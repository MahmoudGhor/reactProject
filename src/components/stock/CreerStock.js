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
import swal from 'sweetalert';


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
  constructor(props) {
    super(props);
    this.state = {
    activeStep: 0,
    nomP: "",
    quantité: 0,
    prix_par_kg :"",
    etat:false,

      errors: {}
  };
}

  handleClose = () => {

    if (this.state.quantité > 0){
      this.setState({etat: true});
    }else{
      this.setState({etat: false});
    }
    const userdata = {
      nomP : this.state.nomP,
      prix_par_kg : this.state.prix_par_kg,
      quantité : this.state.quantité,
      etat : this.state.etat,
    };
    if (userdata.nomP.trim() ==''){
      swal("nom produit vide!", {
        icon: "warning",
      });
      
    }else if(userdata.quantité.trim() ==''){
      swal(" quantité vide!", {
        icon: "warning",
      });
    }else if (userdata.prix_par_kg.trim()==''){
      swal(" prix  vide!", {
        icon: "warning",
      });

    }else



    this.setState({etat: false});
    this.setState({nomP: ""});
    this.setState({quantité: 0});
    this.setState({prix_par_kg: ""});
    this.props.onClose(userdata);


  };

  handleCloseWithoutAnything = () => {
    this.props.onClose(null);
  }
  changenomP(e) {
    this.setState({nomP: e.target.value});
  }

  changequantité(e) {
    this.setState({quantité: e.target.value});
    if (e.target.value > 0){
      this.setState({etat: true});
    }
  }
  changeprix_par_kg(e) {
    this.setState({prix_par_kg: e.target.value});
  }





  render() {

    const { classes, onClose, selectedValue, ...other } = this.props;



  return (
    <Dialog onClose={this.handleCloseWithoutAnything} aria-labelledby="simple-dialog-title" {...other}>

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
        <div className={classes.form}>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor=" Name">Nom</InputLabel>
            <Input id=" Name"    onChange={this.changenomP.bind(this)} name=" Name" autoComplete=" Name" autoFocus />
          </FormControl>


          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor=" quantité">quantité</InputLabel>
            <Input id="quantité"  type='number' onChange={this.changequantité.bind(this)}name=" quantité" autoComplete=" quantité"  />
          </FormControl>


          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="prix_par_kg">prix par kg</InputLabel>
            <Input id="prix_par_kg" type='number' onChange={this.changeprix_par_kg.bind(this)} name="prix_par_kg" autoComplete="prix_par_kg"  />
          </FormControl>


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleClose.bind(this)}
          >
            ajouter un produit
          </Button>
        </div>
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
const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
});

export default compose(
  (withStyles(styles)),
  connect(
    mapStateToProps,
    )
)(CreerStock);;


