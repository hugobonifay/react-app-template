import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { 
  BottomNavigation, 
  BottomNavigationAction, 
  Typography 
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Home } from "@material-ui/icons";
import logo from "../Images/logo.png";
import { appName } from "../../utilities";

const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: "none"
    },
  },
  appBarMobile: {
    display: "none",
    [theme.breakpoints.down('xs')]: {
      display: "block"
    },
  },
  toolbar: {
    justifyContent: "space-between"
  },
  logo: {
    width: 30,
    cursor: "pointer"
  },
  navigation: {
    "& > *": {
      margin: "0 10px"
    }
  },
  navlink: {
    textDecoration: "none",
    color: "inherit",
    opacity: .5,
    fontWeight: 800,
    "&:hover": {
      opacity: 1
    }
  },
  main: {
    paddingTop: 75,
    maxWidth: 1250,
    margin: "0 auto",
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 75,
      margin: "0px 5px"
    },
  },
  bottomNavCont: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 1399,
    boxShadow: "0px 1px 7px 3px rgba(0, 0, 0, 0.4)",
    display: "none",
    [theme.breakpoints.down('xs')]: {
      display: "block"
    },
  },
  bottomNav: {
    //height: 45
  },
  label: {
    //display: "none"
  }
}));

const NavigationLink = ({ to, linkName }) => {
  const classes = useStyles();

  return (
    <NavLink 
      exact to={to}
      className={classes.navlink}
      activeStyle={{ opacity: 1 }}
    >
      {linkName}
    </NavLink>
  )
};

export default function Layout({ children }) {
  const history = useHistory();
  const classes = useStyles();

  const onRedirectToHome = () => {
    history.push("/");
  }
  
  return (
    <div>
      <div className={classes.appBar}>
        <AppBar position="fixed" color="inherit">
          <Toolbar className={classes.toolbar}>
            <div>
              <img
                src={logo}
                alt={"logo"}
                className={classes.logo}
                onClick={onRedirectToHome}
              />
            </div>
            <div className={classes.navigation}>
              <NavigationLink to={"/"} linkName={"Accueil"} />
              <NavigationLink to={"/page2"} linkName={"Page2"} />
            </div>
            <div>
              {/* Account avatar navlink */}
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.appBarMobile}>
        <AppBar position="fixed" color="inherit">
          <Toolbar className={classes.toolbar}>
            <div>
            </div>
            <div>
              <Typography color={"inherit"} variant={"h6"}>{appName}</Typography>
            </div>
            <div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.main}>
        {children}
      </div>
      <div className={classes.bottomNavCont}>
        <BottomNavigation showLabels className={classes.bottomNav}>
          <BottomNavigationAction 
            activeClassName="Mui-selected" 
            component={NavLink} 
            exact to={"/"} 
            label="Accueil"
            icon={<Home />} 
            classes={{
              label: classes.label
            }}
          />
          <BottomNavigationAction 
            activeClassName="Mui-selected"
            component={NavLink}
            exact to={"/page2"} 
            label="Page 2"
            icon={<FavoriteIcon />} 
            classes={{
              label: classes.label
            }}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}