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
      prixTotalArray: [],
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

  sumOfArray = (array) => {
    let sum = 0;
    array.forEach((el, i) => {
      if (el && el.machPrice)
        sum = sum + el.machPrice;
    });
    return sum;
  };

  getPrixMachine = e => {
    let {prixTotal, prixTotalArray} = this.state;
    // console.log(e)
    let newPrixTotalArray = [];
    if (e) {
      if (prixTotalArray.length === 0)
        newPrixTotalArray = [e];
      else {
        let priceIndex = e ? prixTotalArray.findIndex((x) => x.machIndex === e.machIndex) : -1;
        if (priceIndex === -1) {
          newPrixTotalArray = prixTotalArray.slice();
          newPrixTotalArray.push(e)

        } else newPrixTotalArray[priceIndex] = e;
      }

      this.setState({prixTotalArray: newPrixTotalArray, prixTotal: this.sumOfArray(newPrixTotalArray)})
    }
  };

  getRemovedMachine = e => {
    let mach = this.state.machines.slice();

    if (this.state.machines.length >= 2) {
      this.setState({
        machines: mach.splice(e, 1)
      });
    } else this.setState({
      machines: []
    });
  };

  getSelectedMachine = e => {
    let mach = this.state.machines;
    mach[this.state.machines.length - 1].id = e._id;
  };

  getValueToReduce = e => {
    let {prixTotal, prixTotalArray} = this.state, price = prixTotal - e;
    // console.log(price, prixTotal)
    let newPrixTotalArray = [];

    let priceIndex = prixTotalArray.findIndex((x) => x.machIndex === e.machIndex);
    if (priceIndex !== -1)
      newPrixTotalArray = prixTotalArray.splice(priceIndex, 1);

    this.setState({prixTotalArray: newPrixTotalArray, prixTotal: this.sumOfArray(newPrixTotalArray)});
  };


  render() {
    let interfaceDonneeMachine = [];
    const {machines, machine} = this.state;
    interfaceDonneeMachine = machines.map((_machines, ii) => (
      <DonneeMachine valueToReduceFromPrice={this.getValueToReduce.bind(this)} key={ii}
                     getSelectedMachine={this.getSelectedMachine.bind(this)} machIndex={ii}
                     removedMachine={this.getRemovedMachine.bind(this)} machine={_machines}
                     listMachine={machine} prixMachine={this.getPrixMachine.bind(this)}/>
    ));

    const addRow = e => {
      const machine = {
        id: '',
        nb_heures: ''
      };

      var newmachines = this.state.machines.slice();

      newmachines.push(machine);

      this.setState({machines: newmachines});
    };

    if (this.state.machine.length === 0 && this.state.etat === false) {
      return <Spinner/>;
    }
    return (
      <React.Fragment>
        <Container fluid className="main-content-container px-4">
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
