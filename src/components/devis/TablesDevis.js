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
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
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
                    <PageTitle sm="4" title="Liste des utilisateurs" subtitle="" className="text-sm-left"/>
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
                                Nom du client
                              </th>
                              <th scope="col" className="border-0">
                                Numero de l'offre
                              </th>
                              <th scope="col" className="border-0">
                                Date saisie
                              </th>
                              <th scope="col" className="border-0">
                                Date sortis
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
