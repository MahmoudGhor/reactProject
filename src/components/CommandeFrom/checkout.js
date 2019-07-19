import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import axios from "axios";

import Review from './ReviewForm';
import Dialog from '@material-ui/core/Dialog';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Selectionnez le client',  'à propos loffre de prix'];

class Checkout extends React.Component {
  state = {
    client: null,
    activeStep: 0,
    offreDePrix:null,
  };

  handleClose = () => {
    this.props.onClose(this.state.offreDePrix);

  };
  getClient =e =>{
    axios({
      method: 'get',
      url: 'http://localhost:3001/application/clients/'+e

    }).then((res) => {
      this.setState({
        client: res.data.data.clients,
      })
    });

  };

  getoffrePrix = e => {
    this.setState({offreDePrix : e});
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm ClientSelected={this.getClient.bind(this)} />;
      case 1:

        return <Review getOffrePrix={this.getoffrePrix.bind(this)} selectedClient={this.state.client} />;
      default:
        throw new Error('Unknown step');
    }
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    if (this.state.activeStep === 1){
      this.handleClose();
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {

    const { activeStep } = this.state;
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <React.Fragment>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                offre de prix
            </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                    félicitation  .
                  </Typography>
                    <Typography variant="subtitle1">
                      l'offre a  été enregistrée avec succès
                  </Typography>
                  </React.Fragment>
                ) : (
                    <React.Fragment>
                      {this.getStepContent(activeStep)}
                      <div className={classes.buttons}>
                        {activeStep !== 0 && (
                          <Button onClick={this.handleBack} className={classes.button}>
                            retoure
                      </Button>
                        )}
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                        </Button>
                      </div>
                    </React.Fragment>

                  )}
              </React.Fragment>
            </Paper>
          </main>
        </React.Fragment>
      </Dialog>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(Checkout);

