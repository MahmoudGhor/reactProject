import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import CreateClientButton from '../../../buttons/ButtonCreerClient';
import CreateOffreDePrixButton from '../../../buttons/ButtonCreerOffreDePrix';

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <CreateClientButton/>
        <CreateOffreDePrixButton/>
      </div>
    );
  }
}
