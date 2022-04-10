import {
  Avatar,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
// import { MdMenuOpen } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import profile from "../assets/images/profileDrawer.jpg";
import Footer from "./Footer";
import DrawerFile from "./DrawerContainers/DrawerFile";

const drawerWidth = 225;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#F0F2FA",
      width: "100%",
      marginTop: "90px"
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      marginTop: "10px",
    },

    drawerPaper: {
      width: drawerWidth,
      color: "#FFFFFF",
      fontSize: "5px",
      background: "#0061F7",
    },
    active: {
      borderRight: "2px solid white",
      height: "40px",
      padding: "0px 15px",
    },
    inActive: {
      opacity: 0.6,
      padding: "0px 15px",
      height: "40px",
    },
    title: {
      padding: theme.spacing(2),
      fontSize: 18,
      fontWeight: "700",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      color: "#041E42",
      backgroundColor: "#ffffff",
    },
    appBarTitle: {
      flexGrow: 1,
      fontWeight: "bold",
      fontSize: "26px",
    },
    avatar: {
      marginLeft: theme.spacing(2),
      cursor: "pointer",
    },

  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon style={{ color: "white" }} />,
      path: "/dashboard",
    },
    {
      text: "Students",
      icon: <GroupIcon style={{ color: "white" }} />,
      path: "/students",
    },
    {
      text: "Classes",
      icon: <SiGoogleclassroom style={{ fontSize: "20px", color: "white" }} />,
      path: "/classes",
    },
    {
      text: "Dashboard",
      icon: <GroupIcon style={{ color: "white" }} />,
      // path: "/dashboard",
    },
    {
      text: "Customers",
      icon: <AddCircleIcon style={{ color: "white" }} />,
      // path: "/customers",
    },
    {
      text: "Transactions",
      icon: <DashboardIcon style={{ color: "white" }} />,
      // path: "/lends",
    },
  ];

  return (
    <div className={classes.root} style={{ backgroundColor: "#f2f2f2" }}>
      {/* app bar */}
      <AppBar
        position="fixed"
        className={classes.appBar}
        elevation={1}
        color="primary"
      >
        <Toolbar>
          <Typography className={classes.appBarTitle}>
            {/* Lending Management System */}
          </Typography>
          <Typography style={{ fontWeight: "bold" }}></Typography>
          <Avatar
            className={classes.avatar}
            style={{ backgroundColor: "#041E42" }}
          >
            <img
              src={profile}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Avatar>
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      <DrawerFile/>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}>
          {children}
          <Divider
            style={{
              backgroundColor: "#E0E1EA",
              marginTop: "40px",
            }}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
