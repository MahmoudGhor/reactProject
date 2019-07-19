import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button, Container
} from "shards-react";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import Spinner from "../common/Spinner";


class SidebarActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etat: false,
      offre: null,
      machine:[]
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/offrePrix/getbyid/'+this.props.idselected

    }).then((res) => {
      this.setState({
        etat: true,
        offre: res.data.data,
      });
      for (let i = 0; i < res.data.data.ordre.ordreMachine.length; i++) {
        axios({
          method: 'get',
          url: 'http://localhost:3001/application/machine/'+res.data.data.ordre.ordreMachine[i].id_machine

        }).then((res1) => {
          const mach = {
            machine: res1.data.data.machines,
            nb_heures:res.data.data.ordre.ordreMachine[i].nb_heures
          };
          var listMachine = this.state.machine;
          listMachine.push(mach);
          this.setState({
            machine:listMachine
          })
        })
      }
    })
  }


  render() {
    if (this.state.offre === null && this.state.etat === false) {
      return <Spinner/>;
    }
    return (
      <Container fluid className="main-content-container px-4">

        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <div>
                <div id="container" style={{position: 'relative', padding: '4%'}}>
                  <div id="header" style={{height: '80px'}}>
                    <div id="logo"><img src="http://localhost:3000/images/logo.png" alt
                                        style={{width: '6%', float: 'left'}}/>
                    </div>
                    <div id="reference" style={{float: 'right', textAlign: 'right'}}><h3 style={{margin: '0px'}}>
                      <strong>Offre de Prix</strong></h3><h4
                      style={{margin: '0px', fontSize: '85%', fontWeight: 600}}>Réf. :
                      FA1703-00001</h4><p style={{margin: '2% 0px 0px', fontSize: '85%'}}>Date facturation :
                      16/06/2019</p>
                    </div>
                  </div>
                  <div id="fromto" style={{height: '160px'}}>
                    <div id="from" style={{
                      float: 'left',
                      width: '45%',
                      background: 'rgb(239, 239, 239)',
                      marginTop: '30px',
                      fontSize: '85%',
                      height: '85%',
                      padding: '1.5%'
                    }}><p><strong>SOPROCOM</strong><br/>rue mohamed abed laziz Souse <br/>4060 Souse <br/><br/>Tél.: 01
                      00 00 00
                      00 <br/>Email: contact@website.com </p></div>
                    <div id="to" style={{
                      float: 'right',
                      border: '1px solid grey',
                      width: '45%',
                      minHeight: '90px',
                      marginTop: '30px',
                      fontSize: '85%',
                      padding: '1.5%',
                      lineHeight: '120%'
                    }}><p><strong>flen fouleni </strong><br/>10 rue zouhour<br/>5000 MOUNASTIR</p></div>
                  </div>
                  <br/>
                  <div id="fromto" style={{height: '130px'}}>

                    <div id="from" style={{
                      float: 'left',
                      border: '1px solid grey',
                      width: '45%',
                      minHeight: '90px',
                      marginTop: '30px',
                      fontSize: '85%',
                      padding: '1.5%',
                      lineHeight: '120%'
                    }}>
                      <p>
                        <strong>
                          Quantite:
                        </strong>
                        20
                        <br/>
                        <br/>
                        <strong>
                          Clients:
                        </strong>
                        {this.state.offre.client.name} {this.state.offre.client.lastname}
                        <br/>
                        <br/>
                        <strong>
                          Date:
                        </strong>
                        {this.state.offre.client.date_de_naissance}
                        <br/>
                        <br/>
                        <strong>
                          Numero Offre de Prix:
                        </strong>
                        {this.state.offre.offreprixs._id}
                        <br/>
                        <br/>
                        <strong>
                          Matieres:
                        </strong>
                        {this.state.offre.stock.nomP}

                      </p>
                    </div>
                  </div>
                  <br/><br/><br/><br/>
                  <div id="items"><p
                    style={{fontWeight: 700, textAlign: 'right', marginBottom: '1%', fontSize: '65%'}}>Tableau des
                    taches</p>
                    <table style={{width: '100%', fontSize: '85%', border: 'solid grey 1px'}}>
                      <tbody>
                      <tr style={{border: 'solid grey 1px'}}>
                        <th style={{textAlign: 'left', fontWeight: 400, padding: '1px 4px', width: '33%'}}>
                          <center>Machine</center>
                        </th>
                        <th style={{fontWeight: 400, padding: '1px 4px', width: '33%'}}>
                          <center>Nombre d'heure</center>
                        </th>
                        <th style={{fontWeight: 400, padding: '1px 4px', width: '34%'}}>
                          <center>Prix de fabrication</center>
                        </th>

                      </tr>
                      {this.state.machine.map((item) =>
                      <tr>
                        <td style={{paddingTop: '8px'}}>
                          <center>{item.machine.name}</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>{item.nb_heures}</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>{item.machine.prix_par_hr}</center>
                        </td>

                      </tr>
                      )}
                      <tr>
                        <td/>
                        <td/>
                        <td/>
                      </tr>
                      </tbody>
                    </table>
                  </div>

                  <br/><br/>


                  <div id="items"><p
                    style={{fontWeight: 700, textAlign: 'right', marginBottom: '1%', fontSize: '65%'}}>Tableau de sous
                    traitance</p>
                    <table style={{width: '100%', fontSize: '85%', border: 'solid grey 1px'}}>
                      <tbody>
                      <tr style={{border: 'solid grey 1px'}}>
                        <th style={{textAlign: 'left', fontWeight: 400, padding: '1px 4px', width: '33%'}}>
                          <center>Prix de sous traitance</center>
                        </th>
                        <th style={{textAlign: 'left', fontWeight: 400, padding: '1px 4px', width: '33%'}}>
                          <center>Prix de l'element standars</center>
                        </th>
                        <th style={{fontWeight: 400, padding: '1px 4px', width: '33%'}}>
                          <center>Prix de traitement</center>
                        </th>
                        <th style={{fontWeight: 400, padding: '1px 4px', width: '34%'}}>
                          <center>Prix de peinture</center>
                        </th>

                      </tr>
                      <tr>
                        <td style={{paddingTop: '8px'}}>
                          <center>{this.state.offre.ordre.sousTraitance}</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>{this.state.offre.ordre.elementStandards}</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>{this.state.offre.offreprixs.prix_traitement}</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>{this.state.offre.offreprixs.prix_peinture}</center>
                        </td>

                      </tr>
                      <tr>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                      </tr>
                      </tbody>
                    </table>
                  </div>




                  <br/><br/>


                  <div id="items"><p
                    style={{fontWeight: 700, textAlign: 'right', marginBottom: '1%', fontSize: '65%'}}>Tableau de sous
                    traitance</p>
                    <table style={{width: '100%', fontSize: '85%', border: 'solid grey 1px'}}>
                      <tbody>
                      <tr style={{border: 'solid grey 1px'}}>
                        <th style={{textAlign: 'left', fontWeight: 400, padding: '1px 4px', width: '33%'}}>
                          <center>Date Entree</center>
                        </th>
                        <th style={{textAlign: 'left', fontWeight: 400, padding: '1px 4px', width: '33%'}}>
                          <center>Date Sortie</center>
                        </th>
                        <th style={{fontWeight: 400, padding: '1px 4px', width: '33%'}}>
                          <center>Poids ordre</center>
                        </th>
                      </tr>
                      <tr>
                        <td style={{paddingTop: '8px'}}>
                          <center>{this.state.offre.ordre.dateEntree}</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>{this.state.offre.ordre.dateSortie}</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>{this.state.offre.ordre.poids}</center>
                        </td>

                      </tr>
                      <tr>
                        <td/>
                        <td/>
                        <td/>

                      </tr>
                      </tbody>
                    </table>
                  </div>


                  <div id="footer" style={{
                    margin: 'auto',
                    position: 'absolute',
                    left: '4%',
                    bottom: '4%',
                    right: '4%',
                    borderTop: 'solid grey 1px'
                  }}><p style={{marginTop: '1%', fontSize: '65%', lineHeight: '140%', textAlign: 'center'}}>Société à
                    responsabilité limité (SARL) - Capital de 1 000 000 € - SIRET: 87564738493127 <br/>NAF-APE: 6202A -
                    Num.
                    TVA: FR28987856541</p></div>
                  <div><p align="right"><input type="button" defaultValue=" valider"/></p><br/><br/><br/><br/><br/><p
                    align="right"><input type="button" defaultValue=" imprimer"/></p></div>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Container>
    );
  }
}

export default SidebarActions;
