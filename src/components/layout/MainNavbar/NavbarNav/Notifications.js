import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";

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
        <CreateOffreDePrixButton/>
        <CreateClientButton/>
        <CreateProfilButton/>
      </div>
    );
  }
}
