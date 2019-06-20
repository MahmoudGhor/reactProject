import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkout from '../ClientForm/checkout'
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
   PubSub.subscribe('openCrerclient', this.handleClickOpen);
  }

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
          <Button variant="contained" style={{ width:'160px' , height:'40px' ,paddingRight: '0px' , paddingLeft: '0px' , marginRight: '1000px' , backgroundColor:'#3f51b5' , color:'#ffffff'}} className='classes.button' onClick={this.handleClickOpen}>
            nouveau client
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
