import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Nom client 
        </Typography>
        
        <TextField
            id="name"
            label="Nom"
            //value={values.age}
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
            //value={values.age}
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
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="Date fin"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <br/>
        <Typography variant="h6" gutterBottom>
         piece choisie
        </Typography>
        
        <TextField
            id="name"
            label="Nom piece"
            //<Col md="10" className="form-group">
          //<FormSelect onClick={this.changePiece.bind(this)}>
         // <option>Choose ...</option>
          //{this.props.listPiece.map((item) => <option value={item._id}>{item.name}</option>)}
        //</FormSelect>
      //</Col>
            //value={values.age}
            //onChange={handleChange('age')}
            type="string"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
        <div className={classes.margin}>
          <TextField
            id="standard-number"
            label="prix element standard"
            //value={values.age}
            //onChange={handleChange('age')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="prix aaaa"
            //value={values.age}
            //onChange={handleChange('age')}
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
            //value={values.age}
            //onChange={handleChange('age')}
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
            //onChange={handleChange('age')}
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
            //onChange={handleChange('age')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <Typography variant="h6" gutterBottom>
         Autre 
        </Typography>
        <TextField
            id="prix-totale"
            label="prix-totale"
            //value={values.age}
            //onChange={handleChange('age')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
           <TextField
            id="prix-taxé"
            label="prix taxé"
            //value={values.age}
            //onChange={handleChange('age')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
           <TextField
            id="droit-timbre"
            label="droit de timbre"
            //value={values.age}
            //onChange={handleChange('age')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
           <TextField
            id="prix-marge"
            label="marge de prix "
            //value={values.age}
            //onChange={handleChange('age')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          </div>
          <Typography variant="h6" gutterBottom>
          desicion 
         </Typography>
         <div>
            <TextField
            id="prix-offset"
            label="prix totale offset"
            //value={values.age}
            //onChange={handleChange('age')}
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
