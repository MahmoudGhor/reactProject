import React from "react";
import { Link } from "react-router-dom";
import {getCurrentProfile} from "../../../../store/actions/UserActions";
import {logoutUser} from "../../../../store/actions/authActions";
import {connect} from "react-redux";
import Spinner from "../../../common/Spinner";
import {loginUser} from "../../../../store/actions/authActions";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);

  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  clickedLogOut = e => {
    this.props.logoutUser();
    setTimeout(window.location.reload(), 300);
  }

  render() {
    console.log(this.props.auth.user.name);
    var a=""
    if (this.props.auth.user.name){
     a =(this.props.auth.user.name).charAt(0)+""+(this.props.auth.user.lastname).charAt(0);
    }
    const srcNom = "https://ui-avatars.com/api/name="+a+"?size=128";
    console.log(a);
    console.log(this.props.auth.user);
    if (this.props.profile === null ) {
      return <Spinner/>;

    }
    return (

      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src= {srcNom}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{this.props.auth.user.name} {this.props.auth.user.lastname}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem   onClick={this.clickedLogOut.bind(this)} className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}

UserActions.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,

});

export default connect(
  mapStateToProps,
  { loginUser , logoutUser }
)(UserActions);
