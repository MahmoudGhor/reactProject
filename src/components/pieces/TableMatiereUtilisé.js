import React, {Component} from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, FormSelect, FormInput, FormGroup} from "shards-react";
import PageTitle from "../common/PageTitle";
import axios from "axios";
import Spinner from "../common/Spinner";
import IconButton from '@material-ui/core/IconButton';
import toRenderProps from 'recompose/toRenderProps';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";


class TableMatiereUtilisé extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      stocks: [],
      prix_parKg:null,
      etat: false,
      poids:null,
      prixMatiereTotal:null,
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/stock/'

    }).then((res) => {
      this.setState({
        etat: true,
        stocks: res.data.data.stocks,
      })
    })
  }

  changeStock =e => {
    const {stocks} = this.state;
    for (let i = 0; i < stocks.length; i++) {
      if (stocks[i]._id === e.target.value){
        this.setState({prix_parKg: stocks[i].prix_par_kg});
        this.setState({id:stocks[i]._id});
      }
    }
  };

  onchangePoids = e => {
    this.setState({poids: e.target.value});
    this.setState({prixMatiereTotal : e.target.value * this.state.prix_parKg});
    this.props.getMatiere({
      id_stock:this.state.id,
      poids:e.target.value
    });
    var pricee = e.target.value * this.state.prix_parKg
    this.props.getPrixMatiere(pricee);
  };

  render() {
    if (this.state.stocks.length === 0 && this.state.etat === false) {
      return <Spinner/>;
    }
    return (
      <React.Fragment>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Matiere Utilisé" subtitle="" className="text-sm-left"/>
          </Row>
          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Matiere</h6>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <table className="table mb-0">
                    <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        Nom matiere
                      </th>
                      <th scope="col" className="border-0">
                        Prix par kg
                      </th>
                      <th scope="col" className="border-0">
                        Poids
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <Col md="5" className="form-group">
                          <FormSelect onClick={this.changeStock.bind(this)}>
                            <option>Choose ...</option>
                            {this.state.stocks.map((item) => <option  value={item._id} >{item.nomP}</option>)}
                          </FormSelect>
                        </Col>
                      </td>
                      <td>{this.state.prix_parKg}</td>
                      <td>
                        <FormInput
                          placeholder="Choissiez le poids"
                          onChange={this.onchangePoids.bind(this)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td/>
                      <td>Prix total:  {this.state.prixMatiereTotal}</td>
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

export default TableMatiereUtilisé;
