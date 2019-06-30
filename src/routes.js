import React, {Component} from 'react';

import { DefaultLayout } from "./layouts";
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Client from "./components/client/Clients";
import Utilisateur from "./components/utilisateur/Utilisateurs";
import Devis from "./components/devis/Devis";
import Stock from "./components/stock/Stocks";
import Machine from "./components/machine/Machines";
import OffrePrix from "./components/offreDePrix/OffreDePrixs";
import Pieces from "./components/pieces/Pieces";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/SignUp/CreerUtilistaseur";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PrivateRoute from "./components/common/PrivateRoute";
import PrivateRouteUser from "./components/common/PrivateRouteUser";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Routes extends Component {
  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props) {
    const { isAuth } = props;

    if (isAuth) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }
  render() {
    const { isAuthenticated } = this.state;
    return (
      <Router>
        <React.Fragment>
        {isAuthenticated ? <DefaultLayout key={1} /> :null}
        <Switch>
          <PrivateRoute exact path="/Clients" component={Client} />
          <PrivateRouteUser exact path="/Utilisateurs" component={Utilisateur} />
          <PrivateRoute exact path="/Devis" component={Devis} />
          <PrivateRoute exact path="/Stocks" component={Stock} />
          <PrivateRoute exact path="/Machines" component={Machine} />
          <PrivateRoute exact path="/OffresDePrix" component={OffrePrix} />
          <PrivateRoute exact path="/Pieces" component={Pieces} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/BlogPosts" component={BlogPosts} />
          <Route exact path="/AddNewPost" component={AddNewPost} />
          <Route exact path="/ComponentsOverview" component={ComponentsOverview} />
          <Route exact path="/Tables" component={Tables} />
          <Route exact path="*" component={SignIn} />


        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated
  };
};

Routes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

export default connect(mapStateToProps) (Routes);
