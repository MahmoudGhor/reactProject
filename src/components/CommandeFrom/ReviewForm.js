import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Col, FormInput, FormSelect} from "shards-react";
import axios from "axios";
import Spinner from "../common/Spinner";
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import {DatePicker} from "shards-react";


const products = [
  {name: 'Product 1', desc: 'A nice thing', price: '$9.99'},
  {name: 'Product 2', desc: 'Another thing', price: '$3.45'},
  {name: 'Product 3', desc: 'Something else', price: '$6.51'},
  {name: 'Product 4', desc: 'Best thing of all', price: '$14.11'},
  {name: 'Shipping', desc: '', price: 'Free'},
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  {name: 'Card type', detail: 'Visa'},
  {name: 'Card holder', detail: 'Mr John Smith'},
  {name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234'},
  {name: 'Expiry date', detail: '04/2024'},
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});


class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_client:null,
      id_ordreProduction:null,
      listOrdres: [],
      etat: false,
      dateEntree: '',
      dateSortie: '',
      sousTraitance: '',
      elementStandards: '',
      prix_traitement: '',
      prix_peinture: ''
    }
  }

  componentDidMount() {
    this.state.id_client=this.props.selectedClient._id;
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/ordre/'

    }).then((res) => {
      this.setState({
        etat: true,
        listOrdres: res.data.data.ordre,
      })
    })
  }

  selectPiece = e => {
    for (let i = 0; i < this.state.listOrdres.length; i++) {
      if (this.state.listOrdres[i]._id === e.target.value) {
        this.setState({
          id_ordreProduction:this.state.listOrdres[i]._id,
          dateEntree: this.state.listOrdres[i].dateEntree,
          dateSortie: this.state.listOrdres[i].dateSortie,
          sousTraitance: this.state.listOrdres[i].sousTraitance,
          elementStandards: this.state.listOrdres[i].elementStandards
        });

      }
    }
  };

  setPrixTraitement = e => {
    this.setState({
      prix_traitement: e.target.value
    })
  };

  setPrixPeiture = e => {
    this.setState({
      prix_peinture: e.target.value
    })

    var offreDePrix = {
      id_client: this.state.id_client,
      id_ordreProduction: this.state.id_ordreProduction,
      prix_traitement:this.state.prix_traitement,
      prix_peinture:e.target.value

    };
    this.props.getOffrePrix(offreDePrix);
  };


  render() {
    const {classes} = this.props;

    if (this.state.listOrdres.length === 0 && this.state.etat === false) {
      return <Spinner/>;
    }

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Client
        </Typography>

        <TextField
          id="name"
          label="Nom"
          value={this.props.selectedClient.name}
          //onChange={handleChange('age')}
          type="string"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="name"
          label="Prenom"
          value={this.props.selectedClient.lastname}
          //onChange={handleChange('age')}
          type="string"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

        <Typography variant="h6" gutterBottom>
          Date de l'offre
        </Typography>
        <div className={classes.margin}>
          <TextField
            id="name"
            label="Prenom"
            type="date"
            value={this.state.dateEntree}
            disabled
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="Date fin"
            type="date"
            disabled
            className={classes.textField}
            value={this.state.dateSortie}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <br/>
        <Typography variant="h6" gutterBottom>
          piece choisie
        </Typography>

        <FormSelect onClick={this.selectPiece.bind(this)}>
          <option>Choose ...</option>
          {this.state.listOrdres.map((item) => <option value={item._id}>{item.name}</option>)}
        </FormSelect>
        <div className={classes.margin}>
          <TextField
            id="standard-number"
            label="prix element standard"
            value={this.state.elementStandards}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="prix de soutretance"
            value={this.state.sousTraitance}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="prix de traitement"
            //value={values.age}
            onChange={this.setPrixTraitement.bind(this)}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="prix de peinture"
            //value={values.age}
            onChange={this.setPrixPeiture.bind(this)}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />

        </div>

      </React.Fragment>
    );
  }
}

ReviewForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ReviewForm);
