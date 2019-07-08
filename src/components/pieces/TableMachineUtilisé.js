import React, {Component} from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody} from "shards-react";

import PageTitle from "../common/PageTitle";
import DonneeMachine from "./DonneeMachine";
import IconButton from '@material-ui/core/IconButton';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import Tables from "../../views/Tables";
import TableDonnéeUtilisateur from "../utilisateur/tableDonnéeUtilisateur";

class TableMachineUtilisé extends Component {
  constructor(props) {
    super(props);
  this.state = {
    machines : [{
      id:'',
      name:'',
      reference:'',
      prix_par_hr:'',
      nb_heures: ''
    }]
  }

  }


  render() {
    let interfaceDonneeMachine= [];
    const {machines} = this.state;
    console.log('aa');
      interfaceDonneeMachine = machines.map(machine => (
        <DonneeMachine  key={machine.id} machine={machine}/>
      ));


    const addRow = e => {
      console.log('e')
      const machine = {
        id:'',
        name:'',
        reference:'',
        prix_par_hr:'',
        nb_heures: ''
      };
      var newmachines = this.state.machines;
      newmachines.push(machine);
      this.setState({machines:newmachines});
      console.log(this.state.machines);
    };
    return (
      <React.Fragment>
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Machine Utilisé" subtitle="" className="text-sm-left"/>
          </Row>

          {/* Default Light Table */}
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
                      <td>Prix total : 50339</td>
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
