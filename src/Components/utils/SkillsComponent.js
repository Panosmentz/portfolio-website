import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { ReactComponent as MaterialUIIcon } from "../../assets/tech icons/material-ui.svg";
import { ReactComponent as ReactJSIcon } from "../../assets/tech icons/react.svg";
import { ReactComponent as FirebaseIcon } from "../../assets/tech icons/firebase.svg";
import { ReactComponent as EmailJSIcon } from "../../assets/tech icons/emailjs.svg";
import { ReactComponent as FormikIcon } from "../../assets/tech icons/formik.svg";
import { ReactComponent as MySQLIcon } from "../../assets/tech icons/mysql.svg";
import { ReactComponent as LambdaIcon } from "../../assets/tech icons/aws-lambda.svg";
import { ReactComponent as AxiosIcon } from "../../assets/tech icons/axios.svg";
import { ReactComponent as BcryptIcon } from "../../assets/tech icons/bcrypt.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/tech icons/bootstrap.svg";
import { ReactComponent as CssIcon } from "../../assets/tech icons/css-3.svg";
import { ReactComponent as EnzymeIcon } from "../../assets/tech icons/enzyme.svg";
import { ReactComponent as ExpressIcon } from "../../assets/tech icons/express.svg";
import { ReactComponent as FramerMotionIcon } from "../../assets/tech icons/framermotion.svg";
import { ReactComponent as HTMLIcon } from "../../assets/tech icons/html-5.svg";
import { ReactComponent as JavaIcon } from "../../assets/tech icons/java.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/tech icons/javascript.svg";
import { ReactComponent as JestIcon } from "../../assets/tech icons/jest.svg";
import { ReactComponent as JQueryIcon } from "../../assets/tech icons/jquery.svg";
import { ReactComponent as JWTIcon } from "../../assets/tech icons/jwt2.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/tech icons/mongodb.svg";
import { ReactComponent as MongooseIcon } from "../../assets/tech icons/mongoose.svg";
import { ReactComponent as NodeJSIcon } from "../../assets/tech icons/nodejs-icon.svg";
import { ReactComponent as PassportIcon } from "../../assets/tech icons/passport.svg";

const useStyles = makeStyles((theme) => ({
  root: {},
  chip: {},
  avatar: {
    backgroundColor: "#fff",
  },
}));

export default function SkillsComponent() {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12}>
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
            <Avatar className={classes.avatar}>
              <CssIcon />
            </Avatar>
          }
          label="CSS"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <JavascriptIcon />
            </Avatar>
          }
          label="JavaScript"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <ReactJSIcon />
            </Avatar>
          }
          label="React JS"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <NodeJSIcon />
            </Avatar>
          }
          label="Node.JS"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <ExpressIcon />
            </Avatar>
          }
          label="Express.JS"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <JQueryIcon />
            </Avatar>
          }
          label="jQuery"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <JavaIcon />
            </Avatar>
          }
          label="Java"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <MaterialUIIcon />
            </Avatar>
          }
          label="Material UI"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <BootstrapIcon />
            </Avatar>
          }
          label="Bootstrap"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <FramerMotionIcon />
            </Avatar>
          }
          label="Framer Motion"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <MySQLIcon />
            </Avatar>
          }
          label="MySQL"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <MongoDBIcon />
            </Avatar>
          }
          label="MongoDB"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <MongooseIcon />
            </Avatar>
          }
          label="Mongooose"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <JestIcon />
            </Avatar>
          }
          label="Jest"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <EnzymeIcon />
            </Avatar>
          }
          label="Enzyme"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <FirebaseIcon />
            </Avatar>
          }
          label="Firebase"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <AxiosIcon />
            </Avatar>
          }
          label="Axios"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <LambdaIcon />
            </Avatar>
          }
          label="Lambda Functions"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <BcryptIcon />
            </Avatar>
          }
          label="Bcrypt"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <JWTIcon />
            </Avatar>
          }
          label="JSONWebToken"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <PassportIcon />
            </Avatar>
          }
          label="Passport.JS"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <FormikIcon />
            </Avatar>
          }
          label="Formik"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <EmailJSIcon />
            </Avatar>
          }
          label="Email.JS"
        />
      </Grid>
    </div>
  );
}
