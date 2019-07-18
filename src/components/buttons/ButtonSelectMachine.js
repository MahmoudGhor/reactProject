import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkout from '../ClientForm/checkout'
import SelectMachine from '../pieces/selectMachine'
import PubSub from 'pubsub-js'

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

  constructor(props) {
    super(props);

  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({open: false});
    this.props.getSelectedMachine(value);
  };

  render() {
    const {classes} = this.props;

    return (
      <div>
        <img onClick={this.handleClickOpen} style={{width: '30px', height: '30px', borderRadius: '10px'}}
             src={window.location.origin + '/images/1004733.png'}/>
        <SelectMachine
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
