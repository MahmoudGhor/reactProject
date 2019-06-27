import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AddClient from './AddClient';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import {connect} from "react-redux";
import {compose} from "recompose";

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

  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});





class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    };
  }


  getStepContent(step) {
    switch (step) {
      case 0:
        return <AddClient getClient={this.getClientFromAddClient.bind(this)}/>;

      default:
        throw new Error('Unknown step');
    }
  }

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);

  };

  getClientFromAddClient = e => {
    console.log('dkhal l checkout');
    this.props.valueclient(e);
  }


  render() {

    const {activeStep} = this.state;
    const {classes, onClose, selectedValue, ...other} = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <React.Fragment>
          <main className={classes.layout}>
            <Paper className={classes.paper}>

              <React.Fragment>

                <React.Fragment>

                </React.Fragment>

                <React.Fragment>
                  {this.getStepContent(activeStep)}

                </React.Fragment>


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
  valueclient: PropTypes.object
};

const mapStateToProps = state => ({});

export default compose(
  (withStyles(styles)),
  connect(
    mapStateToProps,
  )
)(Checkout);



