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
import { ReactComponent as JSONIcon } from "../../assets/tech icons/json.svg";
import { ReactComponent as RESTAPIIcon } from "../../assets/tech icons/restapi.svg";
import { ReactComponent as NPMIcon } from "../../assets/tech icons/npm.svg";
import { ReactComponent as AJAXIcon } from "../../assets/tech icons/ajax.svg";
import { ReactComponent as FirestoreIcon } from "../../assets/tech icons/firestore.svg";
import { ReactComponent as TestcafeIcon } from "../../assets/tech icons/testcafe.svg";
import { ReactComponent as CypressIcon } from "../../assets/tech icons/cypress.svg";
import { ReactComponent as NightwatchIcon } from "../../assets/tech icons/nightwatch.svg";
import { ReactComponent as PostmanIcon } from "../../assets/tech icons/postman.svg";
import { ReactComponent as VSCodeIcon } from "../../assets/tech icons/vscode.svg";
import { ReactComponent as FigmaIcon } from "../../assets/tech icons/figma.svg";
import { ReactComponent as GitIcon } from "../../assets/tech icons/git.svg";
import { ReactComponent as GithubIcon } from "../../assets/tech icons/github.svg";
import { ReactComponent as HerokuIcon } from "../../assets/tech icons/heroku.svg";
import { ReactComponent as NetlifyIcon } from "../../assets/tech icons/netlify.svg";
import { ReactComponent as WindowsServer2012Icon } from "../../assets/tech icons/windowsserver2012.svg";
import { ReactComponent as ActiveDirectoryIcon } from "../../assets/tech icons/activedirectory.svg";
import { ReactComponent as Office365Icon } from "../../assets/tech icons/office365.svg";
import { ReactComponent as PowerShellIcon } from "../../assets/tech icons/powershell.svg";
import { ReactComponent as ExchangeIcon } from "../../assets/tech icons/exchange.svg";
import { ReactComponent as LinuxIcon } from "../../assets/tech icons/linux.svg";
import { ReactComponent as SCCMIcon } from "../../assets/tech icons/sccm.svg";
import { ReactComponent as CIcon } from "../../assets/tech icons/c.svg";
import { Typography } from "@material-ui/core";

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
        <Typography>Web Technologies</Typography>
        <Chip
          className={classes.chip}
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <HTMLIcon />
            </Avatar>
          }
          label="HTML5"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <CssIcon />
            </Avatar>
          }
          label="CSS3"
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
      </Grid>
      <Grid item xs={12}>
        <Typography>Web tools</Typography>
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
              <RESTAPIIcon />
            </Avatar>
          }
          label="REST APIs"
        />
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
              <AxiosIcon />
            </Avatar>
          }
          label="Axios"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <JSONIcon />
            </Avatar>
          }
          label="JSON"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <NPMIcon />
            </Avatar>
          }
          label="NPM"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <AJAXIcon />
            </Avatar>
          }
          label="AJAX"
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
        <Typography>Databases</Typography>
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <FirestoreIcon />
            </Avatar>
          }
          label="Firebase Firestore"
        />
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
        <Typography>Testing</Typography>
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
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <TestcafeIcon />
            </Avatar>
          }
          label="Testcafe"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <CypressIcon />
            </Avatar>
          }
          label="Cypress"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <NightwatchIcon />
            </Avatar>
          }
          label="Nightwatch"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Tools</Typography>
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <PostmanIcon />
            </Avatar>
          }
          label="Postman"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <VSCodeIcon />
            </Avatar>
          }
          label="VS Code"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <FigmaIcon />
            </Avatar>
          }
          label="Figma"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Version Control</Typography>
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <GitIcon />
            </Avatar>
          }
          label="Git"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <GithubIcon />
            </Avatar>
          }
          label="Github"
        />
      </Grid>

      <Grid item xs={12}>
        <Typography>Deployment</Typography>
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <HerokuIcon />
            </Avatar>
          }
          label="Heroku"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <NetlifyIcon />
            </Avatar>
          }
          label="Netlify"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>System Administration</Typography>
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <WindowsServer2012Icon />
            </Avatar>
          }
          label="Windows Server 2012"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <ActiveDirectoryIcon />
            </Avatar>
          }
          label="Windows Active Directory"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <Office365Icon />
            </Avatar>
          }
          label="Office 365 Admin Center"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <ExchangeIcon />
            </Avatar>
          }
          label="Microsoft Exchange"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <LinuxIcon />
            </Avatar>
          }
          label="Linux"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <SCCMIcon />
            </Avatar>
          }
          label="SCCM"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Other</Typography>
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <PowerShellIcon />
            </Avatar>
          }
          label="PowerShell"
        />
        <Chip
          style={{ backgroundColor: "#fff" }}
          avatar={
            <Avatar className={classes.avatar}>
              <CIcon />
            </Avatar>
          }
          label="C"
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
      <Grid item xs={12}></Grid>
    </div>
  );
}
