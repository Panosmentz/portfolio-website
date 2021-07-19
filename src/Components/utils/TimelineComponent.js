import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paperstyle: {
    padding: "8px 1px",
    textAlign: "center",
  },
  dot: {
    backgroundColor: "#143e55",
  },
  connector: {
    backgroundColor: "#143e55",
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
              03/2018 - 09/2018 : Internship - IT Support Engineer @ Dixons
              South-East Europe - Athens, Greece
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
              10/2019 - 09/2020 : IT Support Engineer @Evros Technology Group -
              Dublin, Ireland
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
              09/2020 - present : Senior IT Support Engineer @Evros Technology
              Group - Dublin, Ireland
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Grid>
  );
}
