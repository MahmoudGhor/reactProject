import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CreerUtilisateur} from '../buttons/index';
import ListeUtilisateurs from './listeUtilisateurs';
import Tables from '../../views/Tables';
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


class Utilisateur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      etat:false,
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/user/'

    }).then((res) => {
      console.log(res.data.data.users);
      this.setState({
        etat:true,
        users: res.data.data.users,
      })
    })



  };

  getIdUserToDelete = e => {
    axios({
      method: 'delete',
      url: 'http://localhost:3001/application/user/'+e

    }).then((res) => {
      this.setState({
        users: res.data.data.users,
      })
    })
  }
  render() {
    if (this.state.users.length === 0 && this.state.etat === false ) {
      return <Spinner/>;
    }

    const {classes} = this.props;
    let inerfaceTableUsers= [];
    try {
      inerfaceTableUsers = <Tables idUserFromDate={this.getIdUserToDelete.bind(this)} users={this.state.users}/>

    } catch (err) {
      inerfaceTableUsers = "no users";
    }
    return (
      <React.Fragment>
        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}><CreerUtilisateur/></Paper>
              </Grid>


            </Grid>
            <div>

            </div>
            <div>
              {inerfaceTableUsers}
            </div>


          </div>
        </main>
      </React.Fragment>
    );


  }
}

export default withStyles(styles)(Utilisateur);
