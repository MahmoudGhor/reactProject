import React, {Component} from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, FormInput} from "shards-react";

import PageTitle from "../common/PageTitle";
import swal from 'sweetalert';
import IconButton from '@material-ui/core/IconButton';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';

class TablePiece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element:0,
      name:'',
      soustraitance:0,
      dateEntre:'',
      dateSortie:''
    }
  }

  changeName =e => {
    this.setState({name:e.target.value});
  }

  changeElement =e => {
    this.setState({element:e.target.value});
  };

  changeSousTraitance = e => {
    this.setState({soustraitance:e.target.value});
  };

  changeDateEntree = e => {
    this.setState({dateEntre:e.target.value});
  };

  changeDateSortis = e => {
    this.setState({dateSortie:e.target.value});
    var piece = {
      dateEntree: this.state.dateEntre,
      dateSortie: e.target.value,
      sousTraitance: this.state.soustraitance,
      elementStandards: this.state.element,
      name: this.state.name
    }
    if (piece.dateEntre.trim() ==''){
       swal("dateEntre vide!", {
        icon: "warning",
      });
    }else if(piece.value.trim() ==''){
      swal(" dateSortie vide!", {
        icon: "warning",
      });
    }else if(piece.soustraitance.trim() ==''){
      swal(" sousTraitance vide!", {
        icon: "warning",
      });
    }else if(piece.elementStandards.trim() ==''){
      swal("  element Standards vide!", {
        icon: "warning",
      });
    }else

    this.props.getPiece(piece);
  };
  render() {
    return (
      <React.Fragment>
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Pieces" subtitle="" className="text-sm-left"/>
          </Row>

          {/* Default Light Table */}
          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Piece</h6>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <table className="table mb-0">
                    <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        Nom piece
                      </th>
                      <th scope="col" className="border-0">
                        Element Standard
                      </th>
                      <th scope="col" className="border-0">
                        SousTraitance
                      </th>
                      <th scope="col" className="border-0">
                        Date Entré
                      </th>
                      <th scope="col" className="border-0">
                        Date Sortis
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><FormInput type="string" onChange={this.changeName.bind(this)}
                      /></td>
                      <td><FormInput type="number" onChange={this.changeElement.bind(this)}
                      /></td>
                      <td><FormInput type="number" onChange={this.changeSousTraitance.bind(this)}
                      /></td>
                      <td><FormInput
                       type="date"
                       onChange={this.changeDateEntree.bind(this)}
                      /></td>
                      <td><FormInput
                        type="date" onChange={this.changeDateSortis.bind(this)}/></td>

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

export default TablePiece;
