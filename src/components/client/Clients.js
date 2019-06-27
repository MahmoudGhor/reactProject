import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CreerClientForClientNavBar} from '../buttons/index';
import Tables from '../../views/Tables';
import ListeUtilisateurs from '../utilisateur/listeUtilisateurs';
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


class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      etat:false,
      test:['aaa','bbbb']
    }

  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/clients/'

    }).then((res) => {
      console.log(res.data.data.clients);
      this.setState({
        etat:true,
        clients: res.data.data.clients,
      })
    })



  }

  buttonCreerClientForClient =e => {
    axios({
      method: 'post',
      url: 'http://localhost:3001/application/clients/',
      data: e,

    }).then(() => {
      axios({
        method: 'get',
        url: 'http://localhost:3001/application/clients/'

      }).then((res) => {
        console.log(res.data.data.clients);
        this.setState({
          clients : [],
          etat: false
        });
        setTimeout((this.setState({
          etat:true,
          clients: res.data.data.clients,
        })),2000);
      })

    })
  }


  render() {
    if (this.state.clients.length === 0 && this.state.etat === false ) {
      return <Spinner/>;
    }
    const {classes} = this.props;
    const {clients} = this.state;
    const data = [];
    let listClient;
    try {

      for(let i=0 ; i<clients.length ; i++){
        const object = {
        name : clients[i].name,
        lastname : clients[i].lastname,
        adresseemail : clients[i].adresseEmail,
        adresse : clients[i].adresse,
        numero : clients[i].numero_de_telephone,
        datenaissance : clients[i].date_de_naissance
      };
        data.push(object);
      }
      listClient = <ListeUtilisateurs clients={data} test={this.state.test}/>
    } catch (err) {
      listClient = "no clients";
    }
    return (
      <React.Fragment>
        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
          <div className={classes.root} id="diiiv">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}><CreerClientForClientNavBar  buttonCreerClient={this.buttonCreerClientForClient.bind(this)}/></Paper>
              </Grid>


            </Grid>


            {listClient}
          </div>
        </main>
      </React.Fragment>
    );


  }
}

export default withStyles(styles)(Clients);
