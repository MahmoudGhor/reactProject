import React, {Component} from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody} from "shards-react";

import PageTitle from "../common/PageTitle";
import DonneeMachine from "./DonneeMachine";
import axios from "axios";
import Spinner from "../common/Spinner";
import {SelectMachine} from '../buttons/index';

class TableMachineUtilisé extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machine: [],
      listeMachineUtilise: [],
      fullPrice: 0
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


  getSelectedMachine = e => {
    if (e !== null) {
      var mymachines = this.state.listeMachineUtilise;
      mymachines.push(e);
      this.setState({listeMachineUtilise: mymachines});
      var prix = this.state.fullPrice;
      prix = (e.nbHeure * e.prix_par_hr);
      var prixtotal = this.state.fullPrice + prix;
      this.setState({fullPrice: prixtotal});
      this.props.getAllMachine({
        id_machine: e._id,
        nb_heures: e.nbHeure
      });
      this.props.getPrixAllMachine(prixtotal);
    }
  };
  deletedMachine = e => {
    for (let i = 0; i < this.state.listeMachineUtilise.length; i++) {
      if (this.state.listeMachineUtilise[i]._id === e) {
        var prixToReduce = this.state.listeMachineUtilise[i].nbHeure * this.state.listeMachineUtilise[i].prix_par_hr;
        var prixTot = this.state.fullPrice - prixToReduce;
        var mymachines = this.state.listeMachineUtilise;
        console.log(i);
        var list = mymachines.splice(i, 1);
        this.setState({fullPrice: prixTot});
        this.setState({listeMachineUtilise: list});
      }
    }
  };


  render() {
    let interfaceDonneeMachine = [];
    const {machine} = this.state;
    if (this.state.listeMachineUtilise.length > 0) {
      interfaceDonneeMachine = this.state.listeMachineUtilise.map(machines => (
        <DonneeMachine getToDeleteId={this.deletedMachine.bind(this)} key={machines._id} listMachine={machines}/>
      ));
    }


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
                  <SelectMachine getSelectedMachine={this.getSelectedMachine.bind(this)}/>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <table className="table mb-0">
                    <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
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
                      <td></td>
                      <td>Prix total : {this.state.fullPrice}</td>
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
