import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CreateMachineButton} from '../buttons/index';
import ListMachine from './MachineList';
import Tables from './TablesMachine';
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


class Machines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etat:false,
      machine:[]
    }

  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/machine/'

    }).then((res) => {
      this.setState({
        etat: true,
        machine: res.data.data.machines,
      })
    })
  }

  getNewMachine = e => {
    if (e !== null){
    axios({
      method: 'post',
      url: 'http://localhost:3001/application/machine',
      data: e,

    }).then((res) => {
      this.setState({
        machine: res.data.data.machines,
      })
    })
    }
  };
  updateMachine = e => {
    if (e !== null){
    axios({
      method: 'put',
      url: 'http://localhost:3001/application/machine/'+e.id,
      data: e,
    }).then((res) => {
      this.setState({
        machine: res.data.data.machines,
      })
    });
    }
  };

  getValueForDelete =e => {
    axios({
      method: 'delete',
      url: 'http://localhost:3001/application/machine/'+e

    }).then((res) => {
      this.setState({
        machine: res.data.data.machines,
      })
    })
  }

  render() {
    const {classes} = this.props;

    let interfaceListeMachine= [];
    try {
      interfaceListeMachine = <Tables valueForDelete={this.getValueForDelete.bind(this)} idMachineToUpdate={this.updateMachine.bind(this)}  machine={this.state.machine}/>

    } catch (err) {
      interfaceListeMachine = "no machines";
    }
    return (
      <React.Fragment>
        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}><CreateMachineButton NewMachine={this.getNewMachine.bind(this)}/></Paper>
              </Grid>


            </Grid>
            <div>
              {interfaceListeMachine}
            </div>

          </div>
        </main>
      </React.Fragment>
    );


  }
}

export default withStyles(styles)(Machines);
