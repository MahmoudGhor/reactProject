import React from "react";
import {Nav} from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import {Store} from "../../../flux";
import {loginUser, logoutUser} from "../../../store/actions/authActions";
import {connect} from "react-redux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    const {navItems: items} = this.state;
    console.log('aaa');
    console.log(items);
    if (this.props.auth.user.permissionLevel !==1){
      items.splice(1,1)
    }

    return (
      <div className="nav-wrapper">
        <Nav>
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item}/>
          ))}
        </Nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,

});

export default connect(
  mapStateToProps,
  {loginUser}
)(SidebarNavItems);
