import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CreateOffreDePrixButton} from '../buttons/index';
import ListOffreDePrix from './OffreDePrixList';
import Tables from './TablesOffres';
import OffreDePrixMenu from './OffreDePrixMenu';
import OffreDePrixTache from './OffreDePrixTache';
import OffreDePrixSousTraitance from './OffreDePrixSousTraitance';
import FactureOffre from './FactureOffre';


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
            <OffreDePrixSousTraitance/>



          </div>
        </main>
      </React.Fragment>
    );


  }
}

export default withStyles(styles)(OffreDePrix);
