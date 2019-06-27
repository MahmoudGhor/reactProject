import React, {Component} from 'react';
import {ReactMUIDatatable} from "react-material-ui-datatable";
import Spinner from "../common/Spinner";

const columns = [
  {
    name: "adresse",
    label: "adresse"
  }, {
    name: "adresseemail",
    label: "adresse email"
  }, {
    name: "datenaissance",
    label: "date"
  },
  {
    name: "name",
    label: "name"
  },
  {
    name: "lastname",
    label: "lastname"
  },
  {
    name: "numero",
    label: "numero"
  },

];


class ListeUtilisateurs extends Component {
  render() {
    let listClient;
    listClient = <ReactMUIDatatable title={""} data={this.props.clients} columns={columns}/>
    const {clients} = this.props.clients;
    return (
      <div>
        {listClient}
      </div>
    );
  }
}

export default ListeUtilisateurs;
