import { Avatar, Divider, Typography, makeStyles } from "@material-ui/core";
import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import femaleProfile from "../../assets/images/profileDrawer.jpg";
import maleProfile from "../../assets/images/blueProfile.webp"
import { Button, MenuItem, Menu} from "@mui/material"
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FiLogOut } from "react-icons/fi";  
import { AiOutlineEdit } from "react-icons/ai";  
import { setIsLogin } from "../../redux/actions/isLoginActions";

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
  const dispatch = useDispatch()
  const activeUser = useSelector((state) => state.activeUser.activeUser);
  
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(setIsLogin(false))
  }

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
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
        <MenuItem>
          <ListItemIcon>
            <AiOutlineEdit fontSize="medium" style={{color: "black"}}/>
          </ListItemIcon>
          Edit Profile
        </MenuItem>
        <MenuItem onClick = {logoutHandler}>
          <ListItemIcon>
            <FiLogOut fontSize="medium" style={{color: "black"}} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default AppBarFile;
