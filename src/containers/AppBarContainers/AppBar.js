import { Avatar, Divider, Typography, makeStyles } from "@material-ui/core";
import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import femaleProfile from "../../assets/images/profileDrawer.jpg";
import maleProfile from "../../assets/images/blueProfile.webp"
import { Button, MenuItem, Menu} from "@mui/material"
import { useSelector } from "react-redux";

const drawerWidth = 225;
const useStyles = makeStyles((theme) => {
  return {
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

const AppBarFile = () => {
  const activeUser = useSelector((state) => state.activeUser.activeUser);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
      };
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      elevation={1}
      color="primary"
    >
      <Toolbar>
        <Typography className={classes.appBarTitle}></Typography>
        <Typography style={{ fontWeight: "bold" }}></Typography>
        <Typography style = {{fontWeight: "600", marginRight: "10px"}}>
       {activeUser ? activeUser.name : "Ahmed Ali"}
        </Typography>
        <Avatar
          className={classes.avatar}
          style={{ backgroundColor: "#041E42" }}
          onClick={handleClick}
        >
          <img
            src={femaleProfile}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Avatar>
      </Toolbar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style = {{}}
      >
        <MenuItem >Change Password</MenuItem>
        <MenuItem >Update username</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default AppBarFile;
