import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkout from '../CommandeFrom/checkout';
import PubSub from 'pubsub-js';

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
  //nhezouha HIYA W CHECKOUT lil app.js
  state = {
    open: false,
  };
  constructor(props) {
    super(props);
   PubSub.subscribe('openCrerCommande', this.handleClickOpen);
  }
//nhezouha lil app.js w chnbadlouha setState b pubsub.pUBLISH
  handleClickOpen = () => {
    console.log('hereee');
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
    this.props.getOffreDePrix(value);
  };

  render() {
    const {classes} = this.props;

      return (
        <div>
          <Button variant="contained"  style={{width:'160px' , height:'40px' , backgroundColor:'#3f51b5' , color:'#ffffff'}} className={classes.button} onClick={this.handleClickOpen}>
            nouveau offre
          </Button>
          {/**
          nhezouha lil app.js
          **/}
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
