import React, {Component} from 'react';
import {Col, FormInput, FormSelect} from "shards-react";

class DonneeMachine extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  deleteMachine = e => {


  };

  changeMachine = e => {};

  onChangeNbHeures(a){
    console.log(a.target.value);
  }
  clickedDelete =e => {
    this.props.getToDeleteId(this.props.listMachine._id);
  }

  render() {
    return (
      <tr>
        <td>  </td>
        <td>{this.props.listMachine.name}</td>
        <td>{this.props.listMachine.prix_par_hr}</td>
        <td>{this.props.listMachine.nombre_hr_travail}</td>
        <td>{this.props.listMachine.nbHeure}
        </td>
        <td><img onClick={this.clickedDelete.bind(this)} style={{width: '30px', height: '30px', borderRadius: '10px'}}
                 src={window.location.origin + '/images/poubelle.png'}/>
        </td>
      </tr>

    );
  }
}

export default DonneeMachine;
