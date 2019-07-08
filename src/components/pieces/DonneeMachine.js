import React, {Component} from 'react';
import {Col, FormInput, FormSelect} from "shards-react";

class DonneeMachine extends Component {
  render() {
    return (
      <tr>
        <td><Col md="5" className="form-group">
          <FormSelect>
            <option>Choose ...</option>
            <option>...</option>
          </FormSelect>
        </Col>
        </td>
        <td>{this.props.machine.name}</td>
        <td>{this.props.machine.name}</td>
        <td> <FormInput
          placeholder="heures"
          onChange={() => {}}
        />
        </td>
        <td><img style={{width: '30px', height: '30px', borderRadius: '10px'}}
                 src={window.location.origin + '/images/poubelle.png'}/>
        </td>
      </tr>

    );
  }
}

export default DonneeMachine;
