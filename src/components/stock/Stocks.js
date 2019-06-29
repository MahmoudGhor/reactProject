import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CreateStockButton} from '../buttons/index';
import ListStock from './StockList';
import MUIDataTable from "mui-datatables";


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

const columns = ["Nom", "Quantité", "Prix par kg", "Quantite"];

const data = [
  ["fer", "100 kg", "10 D", "Oui"],
  ["fer", "100 kg", "10 D", "Oui"],
  ["fer", "100 kg", "10 D", "Oui"],
  ["fer", "100 kg", "10 D", "Oui"],
];
const options = {
  filterType: 'checkbox',
};

class Stocks extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}><CreateStockButton/></Paper>
              </Grid>


            </Grid>
            <div>
              <MUIDataTable
                title={"Stock List"}
                data={data}
                columns={columns}
                options={options}
              />
            </div>

          </div>
        </main>
      </React.Fragment>
    );


  }
}

export default withStyles(styles)(Stocks);
