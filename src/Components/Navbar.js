import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  logo: {
    marginLeft: 25,
    maxWidth: 70,
  },
  appBar: {
    height: 70,
    backgroundColor: "#3d2f58",
  },

  title: {
    flexGrow: 1,
    display: "flex",
  },
  navList: {
    marginRight: "100px",
    display: "flex",
    color: "#bf2c26",
  },
  button: {
    cursor: "pointer",
    position: "relative",
    color: "#fff",
    "&:hover": {
      color: "green",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "3px",
      bottom: 0,
      left: 0,
      backgroundColor: "red",
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s ease-in-out 0s",
    },
    "&:hover::before": {
      visibility: "visible",
      transform: "scale(1)",
    },
  },
  listItemText: {
    fontFamily: "Roboto Slab",
    fontSize: "1.2rem",
    textAlign: "center",
  },
  paper: {
    background: "#fdcc51",
    color: "#bf2c26",
    width: "100%",
    height: "50%",
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  let history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const itemsList = [
    {
      text: "Home",
      onClick: () => history.push("/"),
    },
    {
      text: "About",
      onClick: () => history.push("/about"),
    },
    {
      text: "Projects",
      onClick: () => {
        history.push("/projects");
      },
    },
    {
      text: "Contact",
      onClick: () => {
        history.push("/contact");
      },
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar classes={classes.appBarWrapper}>
          <Typography variant="h6" className={classes.title}>
            <motion.img
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                loop: 0,
                repeatDelay: 1,
              }}
              src={logo}
              alt="Little Red Edu Logo"
              className={classes.logo}
            />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={"left"}
                open={state}
                classes={{ paper: classes.paper }}
                onClose={toggleDrawer(false)}
              >
                <div onClick={toggleDrawer(false)}>
                  <List>
                    {itemsList.map((item, index) => {
                      const { text, onClick } = item;
                      return (
                        <ListItem
                          key={text}
                          onClick={onClick}
                          className={classes.button}
                        >
                          <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary={text}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
              </Drawer>
            </>
          ) : (
            <List className={classes.navList}>
              {itemsList.map((item, index) => {
                const { text, onClick } = item;
                return (
                  <ListItem
                    key={text}
                    onClick={onClick}
                    className={classes.button}
                  >
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={text}
                    />
                  </ListItem>
                );
              })}
            </List>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
