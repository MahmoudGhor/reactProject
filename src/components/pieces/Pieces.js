import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CreatePieceButton} from '../buttons/index';
import TableMatiereUtilise from './TableMatiereUtilisé';
import TableMachineUtilise from './TableMachineUtilisé';
import TablePiece from './TablePiece';
import axios from "axios";
import Button from "@material-ui/core/Button";
import {Card, CardBody, CardHeader, Col, Container, FormInput, Row} from "shards-react";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class Pieces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donneeMatiere: null,
      machine: [],
      prixPiece: 0,
      prixMachine: 0,
      prixTotal: 0,
      prixSousTraitance: 0,
      prixElement: 0,
      piece: null
    }
  }

  getMatiere = e => {
    this.setState({donneeMatiere: e});
  };

  submitAll = e => {
    console.log(this.state.donneeMatiere);
    console.log(this.state.machine);
    console.log(this.state.piece);
    axios({
      method: 'post',
      url: 'http://localhost:3001/application/ordre',
      data: {piece:this.state.piece , machines:this.state.machine , stock:this.state.donneeMatiere},

    }).then(()=> {
      this.props.history.push("/OffresDePrix");
    })


  };
  getAllMachine = e => {
    var machines = this.state.machine;
    machines.push(e);
    this.setState({machine: machines});
  };
  getPrixMatiere = e => {
    var prix = this.state.prixTotal;
    var prixfinal = prix - this.state.prixPiece + e;
    this.setState({prixTotal: prixfinal});
    this.setState({prixPiece: e});
  };
  getPrixAllMachine = e => {
    var prix = this.state.prixTotal;
    var prixfinal = prix - this.state.prixMachine + e;
    this.setState({prixTotal: prixfinal});
    this.setState({prixMachine: e});

  };
  getPiece = e => {
    var prix = this.state.prixTotal;
    var prixfinal = prix - parseInt(this.state.prixSousTraitance) + parseInt(e.sousTraitance) - parseInt(this.state.prixElement) + parseInt(e.elementStandards);
    this.setState({prixTotal: prixfinal});
    this.setState({prixSousTraitance: parseInt(e.sousTraitance)});
    this.setState({prixElement: parseInt(e.elementStandards)});
    this.setState({piece: e});
  };

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}><CreatePieceButton/></Paper>
              </Grid>


            </Grid>
            <TableMatiereUtilise getPrixMatiere={this.getPrixMatiere.bind(this)}
                                 getMatiere={this.getMatiere.bind(this)}/>
            <TableMachineUtilise getPrixAllMachine={this.getPrixAllMachine.bind(this)}
                                 getAllMachine={this.getAllMachine.bind(this)}/>
            <TablePiece getPiece={this.getPiece.bind(this)}/>

            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardBody className="p-0 pb-3">
                    <table className="table mb-0">
                      <thead className="bg-light">
                      <tr>
                        <th scope="col" className="border-0">
                          prix total : {this.state.prixTotal}
                        </th>
                      </tr>
                      </thead>
                    </table>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.submitAll.bind(this)}
            >
              Valider la piece
            </Button>
          </div>
        </main>
      </React.Fragment>
    );


  }
}

export default withStyles(styles)(Pieces);
