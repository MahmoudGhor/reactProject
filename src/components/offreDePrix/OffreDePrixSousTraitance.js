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


class SidebarActions extends Component {
  render() {
    return (
      <Container fluid className="main-content-container px-4">

        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <div>
                <div id="container" style={{position: 'relative', padding: '4%'}}>
                  <div id="header" style={{height: '80px'}}>
                    <div id="logo"><img src="http://localhost:3000/images/logo.png" alt style={{width: '6%', float: 'left'}}/>
                    </div>
                    <div id="reference" style={{float: 'right', textAlign: 'right'}}><h3 style={{margin: '0px'}}>
                      <strong>Offre de Prix</strong></h3><h4 style={{margin: '0px', fontSize: '85%', fontWeight: 600}}>Réf. :
                      FA1703-00001</h4><p style={{margin: '2% 0px 0px', fontSize: '85%'}}>Date facturation : 16/06/2019</p>
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
                    }}><p><strong>SOPROCOM</strong><br/>rue mohamed abed laziz Souse <br/>4060 Souse <br/><br/>Tél.: 01 00 00 00
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
                        Ons
                        <br/>
                        <br/>
                        <strong>
                          Date:
                        </strong>
                        28/06/2019
                        <br/>
                        <br/>
                        <strong>
                          Numero Offre de Prix:
                        </strong>
                        3
                        <br/>
                        <br/>
                        <strong>
                          Matieres:
                        </strong>
                        Fer,Cuivre

                      </p>
                    </div>
                  </div>
                  <br/><br/><br/><br/>
                  <div id="items"><p
                    style={{fontWeight: 700, textAlign: 'right', marginBottom: '1%', fontSize: '65%'}}>Tableau des taches</p>
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
                      <tr>
                        <td style={{paddingTop: '8px'}}>
                          <center>machine1</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>225 heures</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>12dt</center>
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
                        <th style={{fontWeight: 400, padding: '1px 4px', width: '33%'}}>
                          <center>Prix de traitement</center>
                        </th>
                        <th style={{fontWeight: 400, padding: '1px 4px', width: '34%'}}>
                          <center>Prix de peinture</center>
                        </th>

                      </tr>
                      <tr>
                        <td style={{paddingTop: '8px'}}>
                          <center>25dt</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>100dt</center>
                        </td>
                        <td style={{paddingTop: '8px'}}>
                          <center>50dt</center>
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


                  <div id="summary" style={{height: '170px', marginTop: '30px'}}>
                    <div id="note" style={{float: 'left'}}><h4
                      style={{fontSize: '10px', fontWeight: 600, fontStyle: 'italic', marginBottom: '4px'}}>Note :</h4><p
                      style={{fontSize: '10px', fontStyle: 'italic'}}>Information complémentaire à ajouter.</p><textarea
                      defaultValue={""}/></div>
                    <div id="total">
                      <table border={1} style={{fontSize: '85%', width: '260px', float: 'right'}}>
                        <tbody>
                        <tr>
                          <td>Prix Total</td>
                          <td>399</td>
                        </tr>
                        <tr>
                          <td>Prix Taxé</td>
                          <td>380</td>
                        </tr>
                        <tr>
                          <td>Droit de Timbres</td>
                          <td>50</td>
                        </tr>
                        <tr>
                          <td>Marge de Prix</td>
                          <td>15%</td>
                        </tr>
                        <tr>
                          <td>Prix Total Offert</td>
                          <td>450</td>
                        </tr>
                        <tr style={{background: '#efefef', fontWeight: 600}}>
                          <td style={{padding: '3px 4px'}}>Total TTC</td>
                          <td>4,79</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="footer" style={{
                    margin: 'auto',
                    position: 'absolute',
                    left: '4%',
                    bottom: '4%',
                    right: '4%',
                    borderTop: 'solid grey 1px'
                  }}><p style={{marginTop: '1%', fontSize: '65%', lineHeight: '140%', textAlign: 'center'}}>Société à
                    responsabilité limité (SARL) - Capital de 1 000 000 € - SIRET: 87564738493127 <br/>NAF-APE: 6202A - Num.
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
