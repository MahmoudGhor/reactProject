import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CreatePieceButton} from '../buttons/index';
import TableMatiereUtilise from './TableMatiereUtilisé';
import TableMachineUtilise from './TableMachineUtilisé';
import TablePiece from './TablePiece';


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


class Pieces extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}><CreatePieceButton/></Paper>
              </Grid>


            </Grid>

            <TableMatiereUtilise/>
            <TableMachineUtilise/>
            <TablePiece/>


          </div>
        </main>
      </React.Fragment>
    );


  }
}

export default withStyles(styles)(Pieces);
