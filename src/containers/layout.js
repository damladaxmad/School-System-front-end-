import {
  Avatar,
  Divider,
  Drawer,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { MdMenuOpen } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import BottomProfile from "./BottomProfile";
import jaabirLogo from "../assets/images/jaabirLogo.jpg"
import profile from "../assets/images/profileDrawer.jpg"

const drawerWidth = 225;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#F0F2FA",
      width: "100%",
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
      fontWeight: "700"
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

    toolbar: theme.mixins.toolbar,
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
      icon: <SiGoogleclassroom style = {{fontSize: "20px", color: "white"}}/>,
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
    <div className={classes.root} style={{ backgroundColor: "#f2f2f2",
 }}>
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
           <img src = {profile} style = {{
            width: '100%',
            height: '100%',
        }}/>
          </Avatar>
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        color="secondary"
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div style={{display:"flex", justifyContent: "center",
      alignItems: "center", padding: "10px"}}>
          <Avatar style ={{backgroundColor: "white", color: "orange"}}>
          <img src = {jaabirLogo} style = {{
            width: '100%',
            height: '100%',
        }}/>
          </Avatar>
          <Typography variant="h5" className={classes.title}>
            JAABIR
          </Typography>
          <MdMenuOpen style={{fontSize: "20px",
        color: "rgba(255, 255, 255, 0.5)",
        marginLeft: "50px", cursor: "pointer"}}/>
        </div>
        <Divider style={{ backgroundColor: "white", opacity: 0.1 }} />
        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              classes={{
                primary: classes.fontSize,
              }}
              className={
                location.pathname === item.path
                  ? classes.active
                  : classes.inActive
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
       <BottomProfile/>
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
