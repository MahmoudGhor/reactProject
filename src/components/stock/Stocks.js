import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CreateStockButton} from '../buttons/index';

import MUIDataTable from "mui-datatables";
import axios from "axios";
import Spinner from "../common/Spinner";


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

const columns = ["Nom", "Prix par kg", "Quantité" , "Etat"];


const options = {
  filterType: 'checkbox',
};

class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      etat: false,
    }

  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/stock/'

    }).then((res) => {
      this.setState({
        etat: true,
        stocks: res.data.data.stocks,
      })
    })
  }

  getNewStock = e => {
    if (e !== null){
      axios({
        method: 'post',
        url: 'http://localhost:3001/application/stock',
        data: e,

      }).then((res) => {
        this.setState({
          stocks: res.data.data.stocks,
        })
      })
    }
  };

  removed =e => {
    for (let i = 0; i < e.length; i++) {
      axios({
        method: 'delete',
        url: 'http://localhost:3001/application/stock/'+e[i]

      }).then((res) => {
        this.setState({
          stocks: res.data.data.stocks,
        })
      })
    }
  }

  render() {
    const options = {
      serverSide: true,
      onRowsDelete: (rowData) => {
        const idTable =[];
          for (let i = 0; i < rowData.data.length; i++){
            idTable.push(stocks[rowData.data[i].dataIndex]._id)
          }
          this.removed(idTable);


      }
    };
    const {classes} = this.props;
    if (this.state.stocks.length === 0 && this.state.etat === false) {
      return <Spinner/>;
    }
    const {stocks} = this.state;
    const data = [];

    for (let i = 0; i < stocks.length; i++) {
      const object = [];
      object.push(stocks[i].nomP);
      object.push(stocks[i].prix_par_kg);
      object.push(stocks[i].quantité);
      if (stocks[i].etat === true) {
        object.push("disponible");
      } else {
        object.push("non disponible")
      }
      data.push(object);
    }

    return (

      <React.Fragment>
        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}><CreateStockButton NewStock={this.getNewStock.bind(this)}/></Paper>
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

export default withStyles(styles)

(
  Stocks
)
;
