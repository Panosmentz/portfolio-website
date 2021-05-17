import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import Wave2 from "../assets/wave2.svg";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
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
  skills: {},
  chip: {},
  avatar: {},

  //style={{ objectFit: "cover" }}
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.typography}>
            <Typography variant="h2" component="h1" gutterBottom>
              About
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.about}>
            <Typography variant="h2" component="h1" gutterBottom>
              blablabla
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.skills}>
            <Chip
              className={classes.chip}
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar className={classes.avatar}>
                  <HTMLIcon />
                </Avatar>
              }
              label="HTML"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <CssIcon />
                </Avatar>
              }
              label="CSS"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <JavascriptIcon />
                </Avatar>
              }
              label="JavaScript"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <ReactJSIcon />
                </Avatar>
              }
              label="React JS"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <NodeJSIcon />
                </Avatar>
              }
              label="Node.JS"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <ExpressIcon />
                </Avatar>
              }
              label="Express.JS"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <JQueryIcon />
                </Avatar>
              }
              label="jQuery"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <JavaIcon />
                </Avatar>
              }
              label="Java"
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.skills}>
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <MaterialUIIcon />
                </Avatar>
              }
              label="Material UI"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <BootstrapIcon />
                </Avatar>
              }
              label="Bootstrap"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <FramerMotionIcon />
                </Avatar>
              }
              label="Framer Motion"
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.skills}>
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <MySQLIcon />
                </Avatar>
              }
              label="MySQL"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <MongoDBIcon />
                </Avatar>
              }
              label="MongoDB"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <MongooseIcon />
                </Avatar>
              }
              label="Mongooose"
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.skills}>
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <JestIcon />
                </Avatar>
              }
              label="Jest"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <EnzymeIcon />
                </Avatar>
              }
              label="Enzyme"
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.skills}>
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <FirebaseIcon />
                </Avatar>
              }
              label="Firebase"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <AxiosIcon />
                </Avatar>
              }
              label="Axios"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <LambdaIcon />
                </Avatar>
              }
              label="Lambda Functions"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <BcryptIcon />
                </Avatar>
              }
              label="Bcrypt"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <JWTIcon />
                </Avatar>
              }
              label="JSONWebToken"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <PassportIcon />
                </Avatar>
              }
              label="Passport.JS"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <FormikIcon />
                </Avatar>
              }
              label="Formik"
            />
            <Chip
              style={{ backgroundColor: "#fff" }}
              avatar={
                <Avatar>
                  <EmailJSIcon />
                </Avatar>
              }
              label="Email.JS"
            />
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
