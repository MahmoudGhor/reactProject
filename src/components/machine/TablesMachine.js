import React, {Component} from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody} from "shards-react";
import swal from 'sweetalert';


import PageTitle from "../common/PageTitle";
import IconButton from '@material-ui/core/IconButton';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

class Tables extends Component {

  clicked = () => {
    swal({
      title: "Êtes-vous sûr?",
      text: "Une fois supprimé, vous ne pourrez plus récupérer cette machine!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("La machine a été supprimé avec succes!", {
            icon: "success",
          });
        } else {
          swal("Suppression annulée");
        }
      });
  };

  render() {

    return (
      <div>


        <WithState>
          {({anchorEl, updateAnchorEl}) => {
            const open = Boolean(anchorEl);
            const handleClose = () => {
              updateAnchorEl(null);
            };

            return (
              <React.Fragment>
                <Container fluid className="main-content-container px-4">
                  {/* Page Header */}
                  <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Liste des machines" subtitle="" className="text-sm-left"/>
                  </Row>

                  {/* Default Light Table */}
                  <Row>
                    <Col>
                      <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                          <h6 className="m-0"></h6>
                        </CardHeader>
                        <CardBody className="p-0 pb-3">
                          <table className="table mb-0">
                            <thead className="bg-light">
                            <tr>
                              <th scope="col" className="border-0">
                                Nom du Machine
                              </th>
                              <th scope="col" className="border-0">
                                Reference
                              </th>
                              <th scope="col" className="border-0">
                                Prix par heure
                              </th>
                              <th scope="col" className="border-0">
                                Nombre d'heures totals
                              </th>
                              <th scope="col" className="border-0">
                                Etat
                              </th>
                              <th scope="col" className="border-0">
                                Supprimer
                              </th>
                              <th scope="col" className="border-0">
                                Edit
                              </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>Russian Federation</td>
                              <td>Gdańsk</td>
                              <td>107-0339</td>
                              <td>107-0339</td>
                              <td>107-0339</td>
                              <td><IconButton onClick={this.clicked.bind(this)}>
                                <img style={{width: '30px', height: '30px', borderRadius: '10px'}}
                                     src={window.location.origin + '/images/poubelle.png'}/>
                              </IconButton></td>
                              <td><IconButton>
                                <img style={{width: '30px', height: '30px', borderRadius: '10px'}}
                                     src={window.location.origin + '/images/update.png'}/>
                              </IconButton></td>

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
          }}
        </WithState>


      </div>
    );
  }
}

export default Tables;
