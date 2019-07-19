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
import InterfaceVide from './interfaceVide';
import axios from "axios";
import FactureOffre from './FactureOffre';
import Spinner from "../common/Spinner";
import DonneeOffre from "./DonneeOffre";


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
  constructor(props) {
    super(props);
    this.state = {
      etat: false,
      offrePrix: [],
      idSelected: null,
      showOffre: false,
    }

  }

  getOffre = e => {
    if (e !== null) {
      axios({
        method: 'post',
        url: 'http://localhost:3001/application/offrePrix',
        data: e,

      }).then((res) => {
        console.log(res.data.data.offreprixs);
        this.setState({
          offrePrix: res.data.data.offreprixs,
        })
      })
    }
  };


  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/offrePrix/'

    }).then((res) => {
      this.setState({
        etat: true,
        offrePrix: res.data.data.offreprixs,
      })
    })
  }

  getIdOffre = e => {
    this.setState({showOffre: false})
    console.log(e);
    this.setState({
      idSelected: e,
      showOffre: true
    });
  };


  render() {
    const {classes} = this.props;
    let interfaceShowOffre = [];

    if (this.state.offrePrix.length === 0 && this.state.etat === false) {
      return <Spinner/>;
    }

    if (this.state.showOffre){
    return (
      <React.Fragment>
        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}><CreateOffreDePrixButton
                  getOffreDePrix={this.getOffre.bind(this)}/></Paper>
              </Grid>


            </Grid>
            <div>
              <Tables getoffre={this.getIdOffre.bind(this)} listOffre={this.state.offrePrix}/>
            </div>

            <OffreDePrixSousTraitance idselected={this.state.idSelected}/>

          </div>
        </main>
      </React.Fragment>
    );
    }else{
      return (
        <React.Fragment>
          <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
            <div className={classes.root}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}><CreateOffreDePrixButton
                    getOffreDePrix={this.getOffre.bind(this)}/></Paper>
                </Grid>


              </Grid>
              <div>
                <Tables getoffre={this.getIdOffre.bind(this)} listOffre={this.state.offrePrix}/>
              </div>

            </div>
          </main>
        </React.Fragment>
      );
    }


  }
}

export default withStyles(styles)(OffreDePrix);
