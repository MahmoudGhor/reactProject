import React, {Component} from 'react';
import {Col, FormInput, FormSelect} from "shards-react";

class DonneeMachine extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: null,
      prixMachineParHeure: null,
      NombreTotalHeures: null,
      nbHeure: null,
      index: null,
      priceTodelete: null
    }
  }

  changeMachine = e => {
    this.props.listMachine.forEach((machina, index) => {
        if (machina._id === e.target.value) {
          this.setState({
            index: index,
            id: machina._id,
            prixMachineParHeure: machina.prix_par_hr,
            NombreTotalHeures: machina.nombre_hr_travail
          });
        }
      }
    );
  };

  makeSelectedMachine = e => {
    this.props.getSelectedMachine(this.props.listMachine[e]);
  };

  onChangeNbHeures = e => {
    let nbH = e.target.value;
    let machPrice = nbH * this.state.prixMachineParHeure;
    this.props.prixMachine({machPrice, machIndex: this.props.machIndex});
  };

  deleteMachine = e => {
    const {machPrice} = this.state;
    this.props.removedMachine(this.props.machIndex);
    this.props.valueToReduceFromPrice({machIndex: this.props.machIndex});
  };

  render() {
    return (
      <tr>
        <td><Col md="10" className="form-group">
          <FormSelect onClick={this.changeMachine.bind(this)}>
            <option>Choose ...</option>
            {this.props.listMachine.map((item, idx) => <option key={idx} value={item._id}>{item.name}</option>)}
          </FormSelect>
        </Col>
        </td>
        <td>{this.state.prixMachineParHeure}</td>
        <td>{this.state.NombreTotalHeures}</td>
        <td><FormInput
          placeholder="heures"
          onChange={this.onChangeNbHeures.bind(this)}
        />
        </td>
        <td>
          <img onClick={this.deleteMachine.bind(this)} style={{width: '30px', height: '30px', borderRadius: '10px'}}
                 src={window.location.origin + '/images/poubelle.png'}/>
        </td>
      </tr>

    );
  }
}

export default DonneeMachine;
