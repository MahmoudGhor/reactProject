import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import IconButton from '@material-ui/core/IconButton';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));
function Tables () {
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
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left"/>
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
              <tr>
                <th scope="col" className="border-0">
                  #
                </th>
                <th scope="col" className="border-0">
                  First Name
                </th>
                <th scope="col" className="border-0">
                  Last Name
                </th>
                <th scope="col" className="border-0">
                  Country
                </th>
                <th scope="col" className="border-0">
                  City
                </th>
                <th scope="col" className="border-0">
                  Phone
                </th>
                <th scope="col" className="border-0">
                  Delete
                </th>
                <th scope="col" className="border-0">
                  Edit
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Ali</td>
                <td>Kerry</td>
                <td>Russian Federation</td>
                <td>Gdańsk</td>
                <td>107-0339</td>
                <td><IconButton>
                  <img style={{width: '30px', height: '30px', borderRadius: '10px'}}
                       src={window.location.origin + '/images/trash-icon.png'}/>
                </IconButton></td>
                <td><IconButton>
                  <img style={{width: '30px', height: '30px', borderRadius: '10px'}}
                       src={window.location.origin + '/images/update.png'}/>
                </IconButton></td>
                <td/>
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

export default  Tables;

