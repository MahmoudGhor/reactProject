import React, {Component} from 'react';
import MenuItem from "@material-ui/core/MenuItem";

class ListClient extends Component {
  render() {
    return (
      <MenuItem value={10}>{this.props.client.name}</MenuItem>
    );
  }
}

export default ListClient;
