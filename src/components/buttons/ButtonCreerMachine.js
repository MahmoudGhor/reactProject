import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import CreerMachine from '../machine/CreerMachine';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginLeft: -12,
    marginRight: 1000,
    backgroundColor:'#3f51b5' ,
    color:'#ffffff'
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
    this.setState({ open: false });
    this.props.NewMachine(value)
  };

  render() {
    const {classes} = this.props;

      return (
        <div>
          <Button variant="contained" className={classes.button} onClick={this.handleClickOpen}>
            nouveau Machine
          </Button>
          <CreerMachine
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
