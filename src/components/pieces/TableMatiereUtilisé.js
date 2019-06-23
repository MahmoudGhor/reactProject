import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../common/PageTitle";
import IconButton from '@material-ui/core/IconButton';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));
function TableMatiereUtilis () {
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };

        return (
          <React.Fragment>
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Matiere Utilisé" subtitle="" className="text-sm-left"/>
    </Row>

    {/* Default Light Table */}
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
                <td><select>
                  <option> aaa</option>
                  <option> aaa</option>
                  <option> aaa</option>
                  <option> aaa</option>
                  <option> aaa</option>
                  <option> aaa</option>
                </select></td>
                <td>Ali</td>
                <td>Kerry</td>
              </tr>
              <tr>
                <td></td>
                <td/>
                <td>Prix total</td>
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
  );
}

export default  TableMatiereUtilis;

