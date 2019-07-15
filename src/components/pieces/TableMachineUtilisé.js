import React, {Component} from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody} from "shards-react";

import PageTitle from "../common/PageTitle";
import DonneeMachine from "./DonneeMachine";
import axios from "axios";
import Spinner from "../common/Spinner";

class TableMachineUtilisé extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [],
      machine: [],
      prixTotal: 0
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

  getPrixMachine = e => {
    let prixTot = this.state.prixTotal;
    prixTot =  e;
    this.setState({prixTotal: prixTot});
  };

  getRemovedMachine = e => {
    let mach = this.state.machines;
    let mach2 = mach.splice(e, 1);
    this.setState({
      machines: mach2
    });
  };

  getSelectedMachine = e => {
    let mach = this.state.machines;
    mach[this.state.machines.length - 1].id = e._id;
  };

  getValueToReduce = e => {
    let prixTot = this.state.prixTotal;
    prixTot = prixTot- e;
    this.setState({prixTotal: prixTot});
  }


  render() {
    let interfaceDonneeMachine = [];
    const {machines, machine} = this.state;
    interfaceDonneeMachine = machines.map(machines => (
      <DonneeMachine valueToReduceFromPrice={this.getValueToReduce.bind(this)} key={machines.id} getSelectedMachine={this.getSelectedMachine.bind(this)}
                     removedMachine={this.getRemovedMachine.bind(this)} machine={machines}
                     listMachine={machine} prixMachine={this.getPrixMachine.bind(this)}/>
    ));
    const addRow = e => {
      const machine = {
        id: '',
        nb_heures: ''
      };
      var newmachines = this.state.machines;
      newmachines.push(machine);
      this.setState({machines: newmachines});
    };
    if (this.state.machine.length === 0 && this.state.etat === false) {
      return <Spinner/>;
    }
    return (
      <React.Fragment>
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Machine Utilisé" subtitle="" className="text-sm-left"/>
          </Row>
          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Machine</h6>
                  <img onClick={addRow.bind(this)} style={{width: '30px', height: '30px', borderRadius: '10px'}}
                       src={window.location.origin + '/images/1004733.png'}/>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <table className="table mb-0">
                    <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        Nom Machine
                      </th>
                      <th scope="col" className="border-0">
                        Prix Machine Par heures
                      </th>
                      <th scope="col" className="border-0">
                        Nombres total heures
                      </th>
                      <th scope="col" className="border-0">
                        Nombres heures
                      </th>
                      <th> actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {interfaceDonneeMachine}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Prix total : {this.state.prixTotal}</td>
                    </tr>
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </Col>
          </Row>


        </Container>
      </React.Fragment>
    );
  }
}

export default TableMachineUtilisé;
