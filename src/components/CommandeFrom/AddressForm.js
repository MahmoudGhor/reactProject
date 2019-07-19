import React, {Component} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ButtonClientCommande from './ButtonClientCommande';
import PubSub from 'pubsub-js';
import axios from "axios";
import ListClient from "../offreDePrix/ListClient";
import TableDonnéeUtilisateur from "../utilisateur/tableDonnéeUtilisateur";


const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },
});


class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      open: false,
      clients: [],
      selectedClient: null
    }
  };

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/clients/'

    }).then((res) => {
      this.setState({
        etat: true,
        clients: res.data.data.clients,
      })
    });
  }

  handleChange = value => {
    //console.log(value.target.value);
    this.setState({selectedClient: value.target.value});
    this.props.ClientSelected(value.target.value);
  };

  handleClose = value => {
    this.setState({open: false});
  };


  handleOpen = value => {
    this.setState({open: true});
  };

  render() {
    const {classes} = this.props;


    const openClientForm = () => {
      PubSub.publish('openCrerclient', null);
    };


    return (
      <form autoComplete="off">
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '20px', borderWidth: '2px'}}>
            <Button className={classes.button} onClick={this.handleOpen}>
              Déja client
            </Button>
            <FormControl className={classes.formControl}>
              <div>
                <InputLabel htmlFor="demo-controlled-open-select">selectionner un client</InputLabel>
                <Select  style={{width: '200px'}}
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.selectedClient}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'selectionner un client ',
                          id: 'demo-controlled-open-select',
                        }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {this.state.clients.map((item) => <MenuItem value={item._id} key={item._id}>{item.name}</MenuItem>)}
                </Select>

              </div>
            </FormControl>
          </div>


          <div>
            <Button variant="contained" color="primary" className={classes.button}
                    onClick={openClientForm}>
              ajouter un client
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(AddressForm);
