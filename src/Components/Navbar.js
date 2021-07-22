import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
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
import logo2 from "../assets/logo2.png";
import "@fontsource/source-code-pro";
import "@fontsource/source-code-pro/400.css";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  logo: {
    marginLeft: 25,
    maxWidth: 70,
  },
  appBar: {
    height: 70,
    backgroundColor: "#000000",
    boxShadow: "none",
  },

  title: {
    flexGrow: 1,
    display: "flex",
    marginLeft: "100px",
  },
  navList: {
    marginRight: "100px",
    display: "flex",
    color: "#7f10a1",
  },
  button: {
    cursor: "pointer",
    position: "relative",
    color: "#fff",
    "&:hover": {
      color: "#7f10a1",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "3px",
      bottom: 0,
      left: 0,
      backgroundColor: "#7f10a1",
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
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
    textAlign: "center",
  },
  paper: {
    background: "#000000",
    color: "#7f10a1",
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
            <Button onClick={() => history.push("/")} className={classes.logo}>
              <img src={logo2} alt="Pmentzdev logo" />
            </Button>
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
