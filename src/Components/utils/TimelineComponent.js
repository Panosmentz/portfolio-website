import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  paperstyle: {
    padding: "20px 20px",
    textAlign: "center",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  dot: {
    backgroundColor: "#7f10a1",
  },
  connector: {
    backgroundColor: "#7f10a1",
  },
  date: {
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  job: {
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
  },
}));
export default function TimelineComponent() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={5} className={classes.paperstyle}>
              <Typography className={classes.date}>
                February 2023 - Present
              </Typography>
              <Typography className={classes.job}>
                Senior Integration Engineer @ PayPal - Dublin, Ireland
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={5} className={classes.paperstyle}>
              <Typography className={classes.date}>
                March 2022 - February 2023
              </Typography>
              <Typography className={classes.job}>
                Integration Engineer @ PayPal - Dublin, Ireland
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={5} className={classes.paperstyle}>
              <Typography className={classes.date}>
                October 2019 - March 2022
              </Typography>
              <Typography className={classes.job}>
                Senior IT Support Engineer @ eir evo - Dublin, Ireland
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={5} className={classes.paperstyle}>
              <Typography className={classes.date}>
                December 2018 - September 2019
              </Typography>
              <Typography className={classes.job}>
                Media Analyst @ Helenic Army - Athens, Greece
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={5} className={classes.paperstyle}>
              <Typography className={classes.date}>
                March 2018 - September 2018
              </Typography>
              <Typography className={classes.job}>
                Internship - IT Support Engineer @ Dixons South-East Europe -
                Athens, Greece
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Grid>
  );
}
