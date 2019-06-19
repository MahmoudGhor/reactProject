import React, {Component} from 'react';
import { ReactMUIDatatable } from "react-material-ui-datatable";

const columns = [
  {
    name: "firstName",
    label: "First Name"
  },
  {
    name: "lastName",
    label: "Last Name"
  },
  {
    name: "age",
    label: "Age"
  }
];

const data = [
  { firstName: "Kylynn", lastName: "Lathey", age: 19 },
  { firstName: "Cly", lastName: "Dukelow", age: 46 },
  { firstName: "Afton", lastName: "Chaffer", age: 34 },
  { firstName: "Deva", lastName: "Cowope", age: 22 }
];

class ListeUtilisateurs extends Component {

  render() {
    return (
      <div>
        <ReactMUIDatatable title={""} data={data} columns={columns}  />
      </div>
    );
  }
}

export default ListeUtilisateurs;
