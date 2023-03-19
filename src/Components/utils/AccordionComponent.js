import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  bachelor: {
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  details: {
    flexDirection: "column",
  },
  date: {
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
    textAlign: "center",
  },
  grade: {
    marginTop: "30px",
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
    textAlign: "center",
  },
  coursework: {
    marginTop: "30px",
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
    textAlign: "center",
    fontWeight: "bold",
  },
  courses: {
    marginTop: "20px",
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
  },
}));

export default function AccordionComponent() {
  const classes = useStyles();
  return (
    <Accordion expanded={true}>
      <AccordionSummary aria-controls="education-content" id="education-header">
        <Typography className={classes.bachelor}>
          University of West Attica / BSc in Computer Systems Engineering
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Typography className={classes.date} gutterBottom>
          SEP 2010 – AUG 2018, Athens, Greece
        </Typography>
        <Typography className={classes.grade} gutterBottom>
          Upper Second-Class Honours(2:1)
        </Typography>
        <Typography className={classes.coursework} gutterBottom>
          Relevant Coursework:
        </Typography>

        <Typography className={classes.courses} gutterBottom>
          • Object Oriented Programming
        </Typography>
        <Typography className={classes.courses} gutterBottom>
          • Structured Programming(C)
        </Typography>
        <Typography className={classes.courses} gutterBottom>
          • Algorithms and Data Structures
        </Typography>
        <Typography className={classes.courses} gutterBottom>
          • Systems Kernel Programming
        </Typography>
        <Typography className={classes.courses} gutterBottom>
          • Parallel Processing
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
