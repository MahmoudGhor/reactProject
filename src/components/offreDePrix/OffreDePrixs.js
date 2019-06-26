import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CreateOffreDePrixButton} from '../buttons/index';
import ListOffreDePrix from './OffreDePrixList';
import Tables from './TablesOffres';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class OffreDePrix extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}><CreateOffreDePrixButton/></Paper>
              </Grid>


            </Grid>
            <div>
              <Tables/>
            </div>

            <div>
              <p><h5><span> date: .... </span> <span> client:..... </span> <span> quantité : ...... </span></h5></p>
              <p> Numero d'offre de prix : ............ </p>
              <p> matières: ................ </p>
              <h5> tache </h5>
              <table border='2'>
                <tr>
                  <td> machine</td>
                  <td> nbre d'heure</td>
                  <td> prix de fabrication</td>
                </tr>
                <tr>
                  <td> machine1</td>
                  <td> 5 heures</td>
                  <td> 10 dinar</td>
                </tr>
              </table>
              <h5> Soutraitence </h5>
              <table border='2'>
                <tr>
                  <td> Prix de soutraitence</td>
                  <td> prix de traitement</td>
                  <td> prix de peinture</td>
                </tr>
                <tr>
                  <td> 10 dinar</td>
                  <td> 10 dinar</td>
                  <td> 10 dinar</td>
                </tr>
              </table>
              <center><h5> elemnt standars </h5></center>
              <ul>
                <li><h6> prix total = </h6> <p> aaaa </p></li>
                <li><h6> prix taxé = </h6> <p> aaaa </p></li>
                <li><h6> droit de timbres = </h6> <p> aaaa </p></li>
                <li><h6> marge de prix = </h6> <p> aaaa </p></li>
                <li><h6> prix total offert = </h6> <p> aaaa </p></li>
              </ul>
            </div>


          </div>
        </main>
      </React.Fragment>
    );


  }
}

export default withStyles(styles)(OffreDePrix);
