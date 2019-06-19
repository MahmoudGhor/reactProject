import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
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

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/clients",
    layout: DefaultLayout,
    component: Client
  },{
    path: "/Utilisateurs",
    layout: DefaultLayout,
    component: Utilisateur
  },{
    path: "/Devis",
    layout: DefaultLayout,
    component: Devis
  },{
    path: "/Stocks",
    layout: DefaultLayout,
    component: Stock
  },{
    path: "/Machines",
    layout: DefaultLayout,
    component: Machine
  },{
    path: "/OffresDePrix",
    layout: DefaultLayout,
    component: OffrePrix
  },{
    path: "/Pieces",
    layout: DefaultLayout,
    component: Pieces
  },
];
