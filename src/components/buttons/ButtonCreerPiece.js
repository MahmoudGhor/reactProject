import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkout from '../CommandeFrom/checkout';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginLeft: -12,
    marginRight: 20,
  },
  input: {
    display: 'none',
  },
});

class ContainedButtons extends Component {

  state = {
    open: false,
  };


  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    const {classes} = this.props;

      return (
        <div>
          <Button variant="contained" className={classes.button} onClick={this.handleClickOpen}>
            nouveau piece
          </Button>
          <Checkout
              selectedValue={this.state.selectedValue}
              open={this.state.open}
              onClose={this.handleClose}
            />
        </div>
      );
    }
}
ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(ContainedButtons);
