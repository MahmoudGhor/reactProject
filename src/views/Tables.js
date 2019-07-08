import React, {Component} from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody} from "shards-react";
import swal from 'sweetalert';


import PageTitle from "../components/common/PageTitle";
import IconButton from '@material-ui/core/IconButton';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import TableDonnéeUtilisateur from "../components/utilisateur/tableDonnéeUtilisateur";

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

class Tables extends Component {

  getValueFromTable = e => {
    this.props.idUserFromDelete(e);
  };

  getValueForUpdate = e => {
    this.props.UserUpdated(e);
  };
  render() {

    let interfaceDetailsUsers = [];
    try {
      interfaceDetailsUsers = this.props.users.map(user => (
        <TableDonnéeUtilisateur valueForUpdate={this.getValueForUpdate.bind(this)} valueFromTable={this.getValueFromTable.bind(this)} key={user._id} user={user}/>
      ));

    } catch (err) {
      interfaceDetailsUsers = "no users";
    }



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
                                Nom
                              </th>
                              <th scope="col" className="border-0">
                                Prenom
                              </th>
                              <th scope="col" className="border-0">
                                Email
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
                            {interfaceDetailsUsers}
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
