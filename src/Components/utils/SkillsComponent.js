import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { ReactComponent as MaterialUIIcon } from "../../assets/tech icons/material-ui.svg";
import { ReactComponent as ReactJSIcon } from "../../assets/tech icons/react.svg";
import { ReactComponent as FirebaseIcon } from "../../assets/tech icons/firebase.svg";
import { ReactComponent as MySQLIcon } from "../../assets/tech icons/mysql.svg";
import { ReactComponent as LambdaIcon } from "../../assets/tech icons/aws-lambda.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/tech icons/bootstrap.svg";
import { ReactComponent as CssIcon } from "../../assets/tech icons/css-3.svg";
import { ReactComponent as EnzymeIcon } from "../../assets/tech icons/enzyme.svg";
import { ReactComponent as ExpressIcon } from "../../assets/tech icons/express.svg";
import { ReactComponent as HTMLIcon } from "../../assets/tech icons/html-5.svg";
import { ReactComponent as JavaIcon } from "../../assets/tech icons/java.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/tech icons/javascript.svg";
import { ReactComponent as JestIcon } from "../../assets/tech icons/jest.svg";
import { ReactComponent as JQueryIcon } from "../../assets/tech icons/jquery.svg";
import { ReactComponent as NodeJSIcon } from "../../assets/tech icons/nodejs-icon.svg";
import { ReactComponent as RESTAPIIcon } from "../../assets/tech icons/restapi.svg";
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
import { ReactComponent as GraphQLIcon } from "../../assets/tech icons/graphql.svg";
import { ReactComponent as TailwindIcon } from "../../assets/tech icons/tailwind.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/tech icons/mongodb.svg";
import { ReactComponent as NextJSIcon } from "../../assets/tech icons/nextjs.svg";
import { ReactComponent as StrapiIcon } from "../../assets/tech icons/strapi.svg";
import { ReactComponent as SanityIcon } from "../../assets/tech icons/sanity.svg";
import { ReactComponent as TypeScriptIcon } from "../../assets/tech icons/ts.svg";
import { ReactComponent as VercelIcon } from "../../assets/tech icons/vercel.svg";
import { ReactComponent as GithubActionsIcon } from "../../assets/tech icons/githubactions.svg";
import { Typography } from "@material-ui/core";
import "@fontsource/source-code-pro";
import "@fontsource/source-code-pro/400.css";

import FadeInWhenVisible from "./FadeInWhenVisible";

const useStyles = makeStyles(() => ({
  chip: {
    marginTop: "10px",
    marginLeft: "15px",
    backgroundColor: "#fff",
    transition: "transform 0.15s ease-in-out",
    fontSize: "15px",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    fontFamily: "Source Code Pro",

    fontWeight: "bold",
  },
  avatar: {
    backgroundColor: "#fff",
  },
  typography: {
    marginTop: "20px",
    fontFamily: "Source Code Pro",
    fontSize: "1rem",
    fontWeight: "bold",
  },
}));

export default function SkillsComponent() {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center" justify="center">
      <Grid item xs={12}>
        <FadeInWhenVisible>
          <Typography
            className={classes.typography}
            style={{ textDecoration: "underline" }}
          >
            Web Technologies
          </Typography>
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <HTMLIcon />
              </Avatar>
            }
            label="HTML5"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <CssIcon />
              </Avatar>
            }
            label="CSS3"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <JavascriptIcon />
              </Avatar>
            }
            label="JavaScript"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <TypeScriptIcon />
              </Avatar>
            }
            label="TypeScript"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <ReactJSIcon />
              </Avatar>
            }
            label="React"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <NextJSIcon />
              </Avatar>
            }
            label="Next.JS"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <NodeJSIcon />
              </Avatar>
            }
            label="Node.JS"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <ExpressIcon />
              </Avatar>
            }
            label="Express.JS"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <JQueryIcon />
              </Avatar>
            }
            label="jQuery"
          />
        </FadeInWhenVisible>
      </Grid>

      <Grid item xs={12}>
        <FadeInWhenVisible>
          <Typography
            className={classes.typography}
            style={{ textDecoration: "underline" }}
          >
            Web tools
          </Typography>
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <FirebaseIcon />
              </Avatar>
            }
            label="Firebase"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <RESTAPIIcon />
              </Avatar>
            }
            label="REST APIs"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <GraphQLIcon />
              </Avatar>
            }
            label="GraphQL"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <MaterialUIIcon />
              </Avatar>
            }
            label="Material UI"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <BootstrapIcon />
              </Avatar>
            }
            label="Bootstrap"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <TailwindIcon />
              </Avatar>
            }
            label="Tailwind"
          />

          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <AJAXIcon />
              </Avatar>
            }
            label="AJAX"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <StrapiIcon />
              </Avatar>
            }
            label="Strapi"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <SanityIcon />
              </Avatar>
            }
            label="Sanity"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <LambdaIcon />
              </Avatar>
            }
            label="Lambda Functions"
          />
        </FadeInWhenVisible>
      </Grid>

      <Grid item xs={12}>
        <FadeInWhenVisible>
          <Typography
            className={classes.typography}
            style={{ textDecoration: "underline" }}
          >
            Databases
          </Typography>

          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <FirestoreIcon />
              </Avatar>
            }
            label="Firebase Firestore"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <MySQLIcon />
              </Avatar>
            }
            label="MySQL"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <MongoDBIcon />
              </Avatar>
            }
            label="MongoDB"
          />
        </FadeInWhenVisible>
      </Grid>

      <Grid item xs={12}>
        <FadeInWhenVisible>
          <Typography
            className={classes.typography}
            style={{ textDecoration: "underline" }}
          >
            Testing
          </Typography>
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <JestIcon />
              </Avatar>
            }
            label="Jest"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <EnzymeIcon />
              </Avatar>
            }
            label="Enzyme"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <TestcafeIcon />
              </Avatar>
            }
            label="Testcafe"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <CypressIcon />
              </Avatar>
            }
            label="Cypress"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <NightwatchIcon />
              </Avatar>
            }
            label="Nightwatch"
          />
        </FadeInWhenVisible>
      </Grid>

      <Grid item xs={12}>
        <FadeInWhenVisible>
          <Typography
            className={classes.typography}
            style={{ textDecoration: "underline" }}
          >
            Tools
          </Typography>
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <PostmanIcon />
              </Avatar>
            }
            label="Postman"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <VSCodeIcon />
              </Avatar>
            }
            label="VS Code"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <FigmaIcon />
              </Avatar>
            }
            label="Figma"
          />
        </FadeInWhenVisible>
      </Grid>

      <Grid item xs={12}>
        <FadeInWhenVisible>
          <Typography
            className={classes.typography}
            style={{ textDecoration: "underline" }}
          >
            DevOps
          </Typography>
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <GitIcon />
              </Avatar>
            }
            label="Git"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <GithubIcon />
              </Avatar>
            }
            label="Github"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <GithubActionsIcon />
              </Avatar>
            }
            label="Github Actions"
          />

          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <NetlifyIcon />
              </Avatar>
            }
            label="Netlify"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <HerokuIcon />
              </Avatar>
            }
            label="Heroku"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <HerokuIcon />
              </Avatar>
            }
            label="CI/CD on Heroku"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <VercelIcon />
              </Avatar>
            }
            label="Vercel"
          />
        </FadeInWhenVisible>
      </Grid>

      <Grid item xs={12}>
        <FadeInWhenVisible>
          <Typography
            className={classes.typography}
            style={{ textDecoration: "underline" }}
          >
            System Administration
          </Typography>
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <WindowsServer2012Icon />
              </Avatar>
            }
            label="Windows Server 2012"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <ActiveDirectoryIcon />
              </Avatar>
            }
            label="Windows Active Directory"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <Office365Icon />
              </Avatar>
            }
            label="Office 365 Admin Center"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <ExchangeIcon />
              </Avatar>
            }
            label="Microsoft Exchange"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <LinuxIcon />
              </Avatar>
            }
            label="Linux"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <SCCMIcon />
              </Avatar>
            }
            label="SCCM"
          />
        </FadeInWhenVisible>
      </Grid>

      <Grid item xs={12}>
        <FadeInWhenVisible>
          <Typography
            className={classes.typography}
            style={{ textDecoration: "underline" }}
          >
            Other
          </Typography>
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <PowerShellIcon />
              </Avatar>
            }
            label="PowerShell"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <CIcon />
              </Avatar>
            }
            label="C"
          />
          <Chip
            className={classes.chip}
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ height: "30px", width: "30px" }}
              >
                <JavaIcon />
              </Avatar>
            }
            label="Java"
          />
        </FadeInWhenVisible>
      </Grid>
    </Grid>
  );
}
