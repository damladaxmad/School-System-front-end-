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
  import { MdMenuOpen } from "react-icons/md";
  import { SiGoogleclassroom } from "react-icons/si";
  import DashboardIcon from "@material-ui/icons/Dashboard";
  import GroupIcon from "@material-ui/icons/Group";
  import { GiTeacher } from 'react-icons/gi';
  import React, { useEffect } from "react";
  import { useNavigate, useLocation } from "react-router-dom";
  import jaabirLogo from "../../assets/images/jaabirLogo.jpg";
  import BottomProfile from "./BottomProfile"
  import { AiOutlineDollar } from "react-icons/ai";
  import { FaRegNewspaper } from "react-icons/fa";
  import { MdAdminPanelSettings } from "react-icons/md"; 
  import { FiSettings } from "react-icons/fi";
  import { HiPencilAlt } from "react-icons/hi"; 
  import { VscPerson } from "react-icons/vsc"; 
  import { FaHouseUser } from "react-icons/fa"; 
  import { HiOutlineDocumentReport } from "react-icons/hi";
  import { Schedule } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { setIsLogin, setIsReports } from "../../redux/actions/isLoginActions";
  
  
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
        opacity: 0.7,
        padding: "0px 15px",
        height: "40px",
      },
      title: {
        // padding: theme.spacing(1),
        fontSize: 16,
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
  
  const DrawerFile = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()
    
    const activeUser = useSelector(state => state.activeUser.activeUser)

    const menuItems = [
        {
          text: "Dashboard",
          icon: <DashboardIcon style={{fontSize: "20px", color: "white" }} />,
          path: "/dashboard",
        },
        {
          text: "Students",
          icon: <GroupIcon style={{fontSize: "20px", color: "white" }} />,
          path: "/students",
        },
        {
          text: "Teachers",
          icon: <GiTeacher style={{fontSize: "20px", color: "white" }} />,
          path: "/teachers",
        },
        {
          text: "Classes",
          icon: <SiGoogleclassroom style={{ fontSize: "20px", color: "white" }} />,
          path: "/classes",
        },
        {
          text: "Fees",
          icon: <AiOutlineDollar style={{ fontSize: "20px", color: "white" }} />,
          path: "/fees",
        }, 
        {
          text: "Employees",
          icon: <VscPerson style={{ fontSize: "20px", color: "white" }} />,
          path: "/emplooyees",
        }, 
        {
          text: "Examination",
          icon: <FaRegNewspaper style={{fontSize: "20px", color: "white" }} />,
          path: "/examination",
        },
        {
          text: "Adminstration",
          icon: <MdAdminPanelSettings style={{fontSize: "20px", color: "white" }} />,
          path: "/adminstration",
        },
        {
          text: "Settings",
          icon: <FiSettings style={{fontSize: "20px", color: "white" }} />,
          path: "/settings",
        },
        {
          text: "Admission",
          icon: <HiPencilAlt style={{fontSize: "20px", color: "white" }} />,
          path: "/admission",
        },
        {
          text: "Schedules",
          icon: <Schedule style={{fontSize: "20px", color: "white" }} />,
          path: "/schedules",
        },
        {
          text: "Reports",
          icon: <HiOutlineDocumentReport style={{fontSize: "20px", color: "white" }} />,
          path: "/reports",
        }
             
      ];

      useEffect(()=> {
        navigate({ replace: true })
      },[])

      useEffect(()=> {
        props.show(location.pathname)
      }, [location])
      

return (

<Drawer
        className={classes.drawer}
        color="secondary"
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Avatar style={{ backgroundColor: "white", color: "orange" }}>
            <img
              src={jaabirLogo}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Avatar>
          <Typography variant="h5" className={classes.title}>
            Racayaam Soft
          </Typography>
          <MdMenuOpen
            style={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.5)",
              // float: "left",
              cursor: "pointer",
            }}
          />
        </div>
        <Divider style={{ backgroundColor: "white", opacity: 0.1 }} />
        {/* links/list section */}
        <List>
          {menuItems.map((item, index) => {
            if (!activeUser?.privillages?.includes(item.text)) return
            else {
              
           return <ListItem
              button
              key={index}
              onClick={() => {
                if (item.text == "Reports" ) return dispatch(setIsReports(true))
                navigate(item.path)
              }}
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
            }
      })}
        </List>
        {/* <BottomProfile /> */}
      </Drawer>
)
  }

export default DrawerFile;