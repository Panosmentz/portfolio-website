import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import ProjectsImage from "../assets/projects.svg";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/Fab";
import GithubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Me from "../assets/me.jpg";
import whatsapp from "../assets/whatsapplogo.png";
import stocks from "../assets/stocks.jpg";
import tickets from "../assets/ticket.jpg";
import expenses from "../assets/savings.svg";
import recipes from "../assets/recipe.jpg";
import weather from "../assets/weather-icon.png";
import auctions from "../assets/auction.jpg";
import { ReactComponent as MaterialUIIcon } from "../assets/tech icons/material-ui.svg";
import { ReactComponent as ReactJSIcon } from "../assets/tech icons/react.svg";
import { ReactComponent as FirebaseIcon } from "../assets/tech icons/firebase.svg";
import { ReactComponent as EmailJSIcon } from "../assets/tech icons/emailjs.svg";
import { ReactComponent as FormikIcon } from "../assets/tech icons/formik.svg";
import { ReactComponent as MySQLIcon } from "../assets/tech icons/mysql.svg";
import { ReactComponent as LambdaIcon } from "../assets/tech icons/aws-lambda.svg";
import { ReactComponent as AxiosIcon } from "../assets/tech icons/axios.svg";
import { ReactComponent as BcryptIcon } from "../assets/tech icons/bcrypt.svg";
import { ReactComponent as BootstrapIcon } from "../assets/tech icons/bootstrap.svg";
import { ReactComponent as CssIcon } from "../assets/tech icons/css-3.svg";
import { ReactComponent as EnzymeIcon } from "../assets/tech icons/enzyme.svg";
import { ReactComponent as ExpressIcon } from "../assets/tech icons/express.svg";
import { ReactComponent as FramerMotionIcon } from "../assets/tech icons/framermotion.svg";
import { ReactComponent as HTMLIcon } from "../assets/tech icons/html-5.svg";
import { ReactComponent as JavaIcon } from "../assets/tech icons/java.svg";
import { ReactComponent as JavascriptIcon } from "../assets/tech icons/javascript.svg";
import { ReactComponent as JestIcon } from "../assets/tech icons/jest.svg";
import { ReactComponent as JQueryIcon } from "../assets/tech icons/jquery.svg";
import { ReactComponent as JWTIcon } from "../assets/tech icons/jwt2.svg";
import { ReactComponent as MongoDBIcon } from "../assets/tech icons/mongodb.svg";
import { ReactComponent as MongooseIcon } from "../assets/tech icons/mongoose.svg";
import { ReactComponent as NodeJSIcon } from "../assets/tech icons/nodejs-icon.svg";
import { ReactComponent as PassportIcon } from "../assets/tech icons/passport.svg";
import HashLoader from "react-spinners/HashLoader";
import "@fontsource/source-code-pro";
import "@fontsource/source-code-pro/400.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
  },
  loader: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  banner: {
    height: "100px",
    color: "#fff",
    backgroundImage: `url(${ProjectsImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    alignItems: "center",
  },
  typography: {
    fontFamily: "Source Code Pro",
    fontSize: "2.2rem",
    fontWeight: "bold",
  },
  card: {
    maxWidth: 500,
    marginTop: "80px",
    //transition: "transform 0.15s ease-in-out",
    // "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    "& .MuiFab-root": {
      backgroundColor: "#fff",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    "&:hover": {
      backgroundColor: "#d7d7d9",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  description: {
    fontFamily: "Source Code Pro",
    fontSize: "1rem",
  },
  icons: {
    color: "#2a2829",
    "&:hover": {
      backgroundColor: "#d7d7d9",
    },
  },
  techicon: {
    width: "25px",
    height: "25px",
    marginLeft: "2px",
    marginRight: "10px",
  },
  paper: {
    textAlign: "center",
  },
}));

export default function Projects() {
  const classes = useStyles();
  //loader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);
  const [expanded7, setExpanded7] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };
  const handleExpandClick7 = () => {
    setExpanded7(!expanded7);
  };

  return (
    <div>
      {loading ? (
        <div className={classes.loader}>
          <HashLoader color={"#7f10a1"} loading={loading} size={50} />
        </div>
      ) : (
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          className={classes.root}
        >
          <Grid item xs={12} className={classes.banner} align="center">
            <Typography
              className={classes.typography}
              component="h1"
              variant="h5"
            >
              Projects
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="headshot"
                    className={classes.avatar}
                    src={Me}
                  ></Avatar>
                }
                title="WhatsApp Clone"
                subheader="March 10, 2021"
              />
              <CardMedia
                className={classes.media}
                image={whatsapp}
                title="whatsapp"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.description}
                >
                  A WhatsApp clone. Built with React, Material UI, Firebase,
                  EmailJS, Formik and much more. Users can sign up with email &
                  password with a password reset feature or use their Google
                  account to log in. Once logged in, users can view and create
                  chat rooms.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <a
                  href="https://youthful-haibt-148fc8.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <VisibilityIcon />
                  </Fab>
                </a>
                <a
                  href="https://github.com/Panosmentz/Whats-App-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <GithubIcon />
                  </Fab>
                </a>

                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded1,
                  })}
                  onClick={handleExpandClick1}
                  aria-expanded={expanded1}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography className={classes.description} paragraph>
                    Technologies:
                  </Typography>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <ReactJSIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        React JS
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <MaterialUIIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Material UI
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <FirebaseIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Firebase
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <EmailJSIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        EmailJS
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <FormikIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Formik-yup
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="headshot"
                    className={classes.avatar}
                    src={Me}
                  ></Avatar>
                }
                title="Stock Portfolio"
                subheader="December 17, 2020"
              />
              <CardMedia
                className={classes.media}
                image={stocks}
                title="stock portfolio"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.description}
                >
                  A stock portfolio where users can Sign Up/Sign In, search for
                  stocks, get information on them and follow/unfollow stocks
                  they are interested in. Technologies used in this full-stack
                  project are : ReactJS, Material UI, Firebase, React-Toastify,
                  Axios and more.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <a
                  href="https://happy-snyder-f3436c.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <VisibilityIcon />
                  </Fab>
                </a>
                <a
                  href="https://github.com/Panosmentz/stock-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <GithubIcon />
                  </Fab>
                </a>

                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded2,
                  })}
                  onClick={handleExpandClick2}
                  aria-expanded={expanded2}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography className={classes.description} paragraph>
                    Technologies:
                  </Typography>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <ReactJSIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        React JS
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <MaterialUIIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Material UI
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <FirebaseIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Firebase{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <AxiosIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Axios
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="headshot"
                    className={classes.avatar}
                    src={Me}
                  ></Avatar>
                }
                title="Ticket Viewer"
                subheader="October 8, 2020"
              />
              <CardMedia
                className={classes.media}
                image={tickets}
                title="Ticket Viewer"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.description}
                >
                  A ticket viewer using Zendesk's API. To log in, users enter
                  their Email Address and Password. If the credentials are
                  correct, users are able to see a list of their tickets and
                  more information such as Priority, Status, Date Created and
                  more. Fully responsive design using Material-UI.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <a
                  href="https://github.com/Panosmentz/ticket-viewer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <GithubIcon />
                  </Fab>
                </a>

                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded3,
                  })}
                  onClick={handleExpandClick3}
                  aria-expanded={expanded3}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded3} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography className={classes.description} paragraph>
                    Technologies:
                  </Typography>
                  .
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <ReactJSIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        React JS
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <MaterialUIIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Material UI
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <AxiosIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Axios
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <EnzymeIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Enzyme{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <JestIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Jest{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="headshot"
                    className={classes.avatar}
                    src={Me}
                  ></Avatar>
                }
                title="Expense Tracker"
                subheader="August 18, 2020"
              />
              <CardMedia
                className={classes.media}
                image={expenses}
                title="Expense Tracker"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.description}
                >
                  A fullstack web application to track your income and expenses,
                  built with the MERN stack. The back-end is written in
                  Node.js/Express, a remote noSQL database sits on MongoDB Atlas
                  and the front-end is written in ReactJS with the use of
                  React-Hooks.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <a
                  href="https://mernexpenseapp.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <VisibilityIcon />
                  </Fab>
                </a>
                <a
                  href="https://github.com/Panosmentz/MERN-Expenses-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <GithubIcon />
                  </Fab>
                </a>

                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded4,
                  })}
                  onClick={handleExpandClick4}
                  aria-expanded={expanded4}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded4} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography className={classes.description} paragraph>
                    Technologies:
                  </Typography>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <ReactJSIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        React JS
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <NodeJSIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Node JS{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <ExpressIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Express JS{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <MongoDBIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        MongoDB{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <JWTIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        JSON Web Token{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <PassportIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Passport JS{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <BcryptIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Bcrypt{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <MongooseIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Mongoose{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <AxiosIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Axios{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <BootstrapIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Bootstrap{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <FramerMotionIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Framer Motion{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="headshot"
                    className={classes.avatar}
                    src={Me}
                  ></Avatar>
                }
                title="Recipe Finder"
                subheader="March 1, 2020"
              />
              <CardMedia
                className={classes.media}
                image={recipes}
                title="Recipe Finder"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.description}
                >
                  A recipe finder application. Simply search for an ingredient
                  and a list of recipes will be presented to you. The
                  application displays all ingredients needed, calories and
                  nutrients. The app is using the edamam web API and was
                  developed with HTML5, CSS3 and ReactJS.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <a
                  href="https://nifty-davinci-b034e9.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <VisibilityIcon />
                  </Fab>
                </a>
                <a
                  href="https://github.com/Panosmentz/React-Recipes-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <GithubIcon />
                  </Fab>
                </a>

                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded5,
                  })}
                  onClick={handleExpandClick5}
                  aria-expanded={expanded5}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded5} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography className={classes.description} paragraph>
                    Technologies:
                  </Typography>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <ReactJSIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        React JS{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <FramerMotionIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Framer Motion{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="headshot"
                    className={classes.avatar}
                    src={Me}
                  ></Avatar>
                }
                title="Weather App"
                subheader="January 4, 2020"
              />
              <CardMedia
                className={classes.media}
                image={weather}
                title="Weather App"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.description}
                >
                  A weather forecast application using the DarkSky Web API. The
                  App prompts you to allow your location and gives you the
                  current and an hour-by-hour forecast based on your longitude
                  and latitude. This was made with HTML5, CSS3, Bootstrap and
                  Vanilla JavaScript.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <a
                  href="https://musing-kalam-1029f1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <VisibilityIcon />
                  </Fab>
                </a>
                <a
                  href="https://github.com/Panosmentz/WeatherAPP-netlify-aws-lambda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <GithubIcon />
                  </Fab>
                </a>

                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded6,
                  })}
                  onClick={handleExpandClick6}
                  aria-expanded={expanded6}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded6} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography className={classes.description} paragraph>
                    Technologies:
                  </Typography>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <HTMLIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        HTML{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <CssIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        CSS{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <JavascriptIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        JavaScript{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <LambdaIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        AWS Lambda Functions{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <JQueryIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        jQuery{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <BootstrapIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Bootstrap{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="headshot"
                    className={classes.avatar}
                    src={Me}
                  ></Avatar>
                }
                title="Auctions Project"
                subheader="July 12, 2018"
              />
              <CardMedia
                className={classes.media}
                image={auctions}
                title="Auction Project"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.description}
                >
                  This is a Java application that allows users to create and
                  edit auctions as well as place bids. This application features
                  User Authentication with credentials stored in the mySQL
                  database, an administrator account with an admin console and
                  more. Click on View Demo for more details.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <a
                  href="https://www.youtube.com/watch?v=mrgYUsr4rBY&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <VisibilityIcon />
                  </Fab>
                </a>
                <a
                  href="https://github.com/Panosmentz/softenglab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fab size="small" className={classes.icons}>
                    <GithubIcon />
                  </Fab>
                </a>

                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded7,
                  })}
                  onClick={handleExpandClick7}
                  aria-expanded={expanded7}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded7} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography className={classes.description} paragraph>
                    Technologies:
                  </Typography>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <JavaIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        Java{" "}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <MySQLIcon className={classes.techicon} />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description}>
                        {" "}
                        MySQL{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Footer />
        </Grid>
      )}
    </div>
  );
}
