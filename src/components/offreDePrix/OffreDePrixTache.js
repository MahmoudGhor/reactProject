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
        <CardHeader className="border-bottom">
          <center><h6 className="m-0">Tache</h6></center>
        </CardHeader>

        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="p-3">

              <table className="table mb-0">
                <thead className="bg-light">
                <tr>
                  <th style={{width:'33%'}} scope="col" className="border-0">
                    <center> Machine </center>
                  </th>
                  <th scope="col" style={{width:'33%'}} className="border-0">
                    <center> Nombre d'heure </center>
                  </th>
                  <th scope="col" style={{width:'34%'}} className="border-0">
                    <center>Prix de fabrication </center>
                  </th>

                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><center>machine1</center></td>
                  <td><center>225 heures</center></td>
                  <td><center>12dt</center></td>

                </tr>
                </tbody>
              </table>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Container>
    );
  }
}

export default SidebarActions;
