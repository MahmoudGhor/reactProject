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


class SidebarActions extends Component {
  render() {
    return (
      <Container fluid className="main-content-container px-4">


        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="p-3">
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">flag</i>
            <strong className="mr-1">Quantites:</strong> 10{" "}

          </span>
              <span className="d-flex mb-2">
            <i className="material-icons mr-1">visibility</i>
            <strong className="mr-1">Client:</strong>{" "}
                <strong className="text-success">Ons</strong>{" "}

          </span>
              <span className="d-flex mb-2">
            <i className="material-icons mr-1">calendar_today</i>
            <strong className="mr-1">Date:</strong> 28/06/2019{" "}

          </span>
              <span className="d-flex">
            <i className="material-icons mr-1">score</i>
            <strong className="mr-1">Numero offre de prix:</strong>{" "}
                <strong className="text-warning">2</strong>
          </span>

              <span className="d-flex">
            <i className="material-icons mr-1">score</i>
            <strong className="mr-1">Matieres:</strong>{" "}
                <strong className="text-warning">Métal--Fer</strong>
          </span>
            </ListGroupItem>
            </ListGroup>
        </CardBody>
      </Container>
    );
  }
}

export default SidebarActions;
