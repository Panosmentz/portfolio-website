import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import Wave2 from "../assets/wave2.svg";
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  typography: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${Wave2})`,
    backgroundSize: "cover",
    width: "100%",
    alignItems: "center",
    marginTop: "100px",
    height: "200px",
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {},
  icons: {
    color: "#2a2829",

    "&:hover": {
      backgroundColor: "#403e3f",
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
  footer: {
    marginTop: "250px",
    width: "100%",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.typography}>
            <Typography variant="h2" component="h1" gutterBottom>
              Projects
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
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
              <Typography variant="body2" color="textSecondary" component="p">
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
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Technologies:</Typography>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <ReactJSIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> React JS</Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <MaterialUIIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Material UI</Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <FirebaseIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Firebase</Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <EmailJSIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> EmailJS</Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <FormikIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Formik-yup</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={4}>
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
              <Typography variant="body2" color="textSecondary" component="p">
                A stock portfolio where users can Sign Up/Sign In, search for
                stocks, get information on them and follow/unfollow stocks they
                are interested in. Technologies used in this full-stack project
                are : ReactJS, Material UI, Firebase, React-Toastify, Axios and
                more.
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
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Technologies:</Typography>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <ReactJSIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> React JS</Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <MaterialUIIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Material UI</Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <FirebaseIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Firebase </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <AxiosIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Axios</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={4}>
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
              <Typography variant="body2" color="textSecondary" component="p">
                A ticket viewer using Zendesk's API. To log in, users enter
                their Email Address and Password. If the credentials are
                correct, users are able to see a list of their tickets and more
                information such as Priority, Status, Date Created and more.
                Fully responsive design using Material-UI.
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
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Technologies:</Typography>.
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <ReactJSIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> React JS</Typography>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <MaterialUIIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Material UI</Typography>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <AxiosIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Axios</Typography>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <EnzymeIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Enzyme </Typography>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <JestIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Jest </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={4}>
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
              <Typography variant="body2" color="textSecondary" component="p">
                A fullstack web application to track your income and expenses,
                built with the MERN stack. The back-end is written in
                Node.js/Express, a remote noSQL database sits on MongoDB Atlas
                and the front-end is written in ReactJS with the use of
                React-Hooks.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <a
                href="https://guarded-wildwood-06153.herokuapp.com/"
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
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Technologies:</Typography>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <ReactJSIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> React JS</Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <NodeJSIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Node JS </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <ExpressIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Express JS </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <MongoDBIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> MongoDB </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <JWTIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> JSON Web Token </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <PassportIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Passport JS </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <BcryptIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Bcrypt </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <MongooseIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Mongoose </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <AxiosIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Axios </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <BootstrapIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Bootstrap </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <FramerMotionIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Framer Motion </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={4}>
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
              <Typography variant="body2" color="textSecondary" component="p">
                A recipe finder application. Simply search for an ingredient and
                a list of recipes will be presented to you. The application
                displays all ingredients needed, calories and nutrients. The app
                is using the edamam web API and was developed with HTML5, CSS3
                and ReactJS.
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
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Technologies:</Typography>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <ReactJSIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> React JS </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <FramerMotionIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Framer Motion </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={4}>
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
              <Typography variant="body2" color="textSecondary" component="p">
                A weather forecast application using the DarkSky Web API. The
                App prompts you to allow your location and gives you the current
                and an hour-by-hour forecast based on your longitude and
                latitude. This was made with HTML5, CSS3, Bootstrap and Vanilla
                JavaScript.
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
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Technologies:</Typography>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <HTMLIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> HTML </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <CssIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> CSS </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <JavascriptIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> JavaScript </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <LambdaIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> AWS Lambda Functions </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <JQueryIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> jQuery </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <BootstrapIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Bootstrap </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={4}>
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
              <Typography variant="body2" color="textSecondary" component="p">
                This is a Java application that allows users to create and edit
                auctions as well as place bids. This application features User
                Authentication with credentials stored in the mySQL database, an
                administrator account with an admin console and more. Click on
                View Demo for more details.
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
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Technologies:</Typography>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <JavaIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> Java </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <MySQLIcon className={classes.techicon} />
                  </Grid>
                  <Grid item>
                    <Typography> MySQL </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}
