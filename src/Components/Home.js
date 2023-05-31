import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Button } from "@material-ui/core";
import HashLoader from "react-spinners/HashLoader";
import "@fontsource/source-code-pro";
import "@fontsource/source-code-pro/400.css";
import Particle from "./utils/Particles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "black",
    textAlign: "center",
  },
  particle: {
    position: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  loader: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  title: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    fontSize: 30,
    color: "#fff",
  },
  title2: {
    marginTop: "50px",
    display: "flex",
    alignItems: "baseline",
    fontSize: 30,
    color: "#fff",
    textAlign: "left",
  },
  typography: {
    marginTop: 30,
    fontFamily: "Source Code Pro",
    fontSize: "1.4rem",
  },
  button: {
    marginTop: 100,
    color: "#fff",
    backgroundColor: "#7f10a1",
    "&:hover": {
      backgroundColor: "#290036",
    },
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
    textTransform: "none",
  },
  writer: {
    marginTop: 30,
  },
}));

function Home() {
  //loader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const classes = useStyles();

  return (
    <div>
      {loading ? (
        <div className={classes.loader}>
          <HashLoader color={"#7f10a1"} loading={loading} size={50} />
        </div>
      ) : (
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.root}
        >
          <div className={classes.particle}>
            <Particle />
          </div>
          <Grid item lg={12} xs={12} className={classes.title}>
            <motion.div
              initial={{ y: "-1000px" }}
              animate={{ y: "0px" }}
              transition={{
                type: "tween",

                duration: 2,
              }}
            >
              <Typography
                className={classes.typography}
                display="inline"
                variant="h3"
              >
                Hi!
                <motion.div
                  initial={{ x: "-10px" }}
                  animate={{ x: "0px" }}
                  transition={{
                    type: "spring",
                    stiffness: 1000,
                    repeat: Infinity,
                    duration: 1,
                  }}
                >
                  👋
                </motion.div>{" "}
                I'm Panos
                <div className={classes.writer}>
                  <Typewriter
                    options={{
                      strings: [
                        "Senior Integration Engineer",
                        "Full-Stack Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </Typography>
            </motion.div>
          </Grid>

          <Grid item lg={6} xs={12} className={classes.title2}>
            <motion.div
              initial={{ y: "1000px" }}
              animate={{ y: "0px" }}
              transition={{
                type: "tween",

                duration: 2,
              }}
            >
              <Typography
                className={classes.typography}
                variant="h4"
                gutterBottom
              >
                I'm a highly self-motivated and goal-oriented IT professional
                with a strong background in Software Engineering and Technical
                Operations. I have extensive experience building scalable and
                secure full-stack web applications, utilizing a range of
                programming languages and technologies, including React,
                Next.JS, Node.JS, TypeScript, SQL and NoSQL databases, REST
                APIs, and more. This exposure to a wide variety of technologies
                has allowed me to develop a well-rounded skill set, enabling me
                to adapt to new programming languages and technologies quickly
                and efficiently.
              </Typography>

              <Typography
                className={classes.typography}
                variant="h4"
                gutterBottom
              >
                As a continuous and quick learner I enjoy expanding my knowledge
                both in depth and in breadth while producing consistent tangible
                value. Furthermore, I have repeatedly received feedback about
                demonstrating strong analytical and problem-solving skills,
                leading projects to completion successfully, as well as
                mentoring colleagues effectively.
              </Typography>
            </motion.div>
          </Grid>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            href="/about"
          >
            About Me
          </Button>
          <Footer />
        </Grid>
      )}
    </div>
  );
}

export default Home;
