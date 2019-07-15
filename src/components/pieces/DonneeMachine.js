import React, {Component} from 'react';
import {Col, FormInput, FormSelect} from "shards-react";

class DonneeMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      prixMachineParHeure: null,
      NombreTotalHeures: null,
      nbHeure: null,
      index:null,
      priceTodelete:null
    }
  }

  changeMachine = e => {
    for (let i = 0; i < this.props.listMachine.length; i++) {
      if (this.props.listMachine[i]._id === e.target.value) {
        this.setState({
          index:i,
          id:this.props.listMachine[i]._id,
          prixMachineParHeure: this.props.listMachine[i].prix_par_hr,
          NombreTotalHeures: this.props.listMachine[i].nombre_hr_travail
        });
        //this.makeSelectedMachine(i)
      }
    }
  };

  makeSelectedMachine =e => {
    this.props.getSelectedMachine(this.props.listMachine[e]);
   // console.log(this.state.prixMachineParHeure)
  }

  onChangeNbHeures =e => {
    this.setState({nbHeure:e.target.value});
    this.props.prixMachine(e.target.value * this.state.prixMachineParHeure);
  };

  deleteMachine =e => {
    console.log(this.state.index);
    this.props.removedMachine(this.state.index);
    this.props.valueToReduceFromPrice(this.state.prixMachineParHeure*this.state.nbHeure);
  };

  render() {
    return (
      <tr>
        <td><Col md="10" className="form-group">
          <FormSelect onClick={this.changeMachine.bind(this)}>
            <option>Choose ...</option>
            {this.props.listMachine.map((item) => <option value={item._id}>{item.name}</option>)}
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
        <td><img onClick={this.deleteMachine.bind(this)} style={{width: '30px', height: '30px', borderRadius: '10px'}}
                 src={window.location.origin + '/images/poubelle.png'}/>
        </td>
      </tr>

    );
  }
}

export default DonneeMachine;
