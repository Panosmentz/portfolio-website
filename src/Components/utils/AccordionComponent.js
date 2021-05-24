import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
  },
  details: {
    flexDirection: "column",
  },
}));

export default function AccordionComponent() {
  const classes = useStyles();
  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="education-content"
        id="education-header"
      >
        <Typography>
          University of West Attica / BSc in Computer Systems Engineering
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Typography variant="subtitle1" gutterBottom>
          SEP 2010 – AUG 2018, Athens, Greece
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Upper Second-Class Honours(2:1)
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Relevant Coursework:
        </Typography>
        <Typography variant="body1" gutterBottom>
          Object Oriented Programming, Structured Programming(C), Algorithms and
          Data Structures, Systems Kernel Programming, Parallel Processing
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
