import { BottomNavigation, BottomNavigationAction, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from "react-redux";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bottomNav: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 1399,
    boxShadow: "0px 1px 7px 3px rgba(0, 0, 0, 0.4)",
  },
}));
export default function Layout({ children }) {
    const classes = useStyles();
    const title = useSelector(state => state.main.title);
  
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{paddingTop:75,paddingBottom:75}}>
          {children}
        </div>
        <BottomNavigation
          showLabels
          className={classes.bottomNav}
        >
          <BottomNavigationAction 
            activeClassName="Mui-selected" 
            component={NavLink} 
            exact to={"/"} 
            label="Accueil"
            icon={<Home />} 
          />
          <BottomNavigationAction 
            activeClassName="Mui-selected"
            component={NavLink}
            exact to={"/page2"} 
            label="Page 2"
            icon={<FavoriteIcon />} 
          />
        </BottomNavigation>
      </div>
    );
}