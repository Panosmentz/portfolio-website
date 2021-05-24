import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper } from "@material-ui/core";

const paperstyle = {
  padding: "8px 1px",
  textAlign: "center",
};

export default function TimelineComponent() {
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={paperstyle}>
            03/2018 - 09/2018 : Internship - IT Support Engineer @ Dixons
            South-East Europe - Athens, Greece
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={paperstyle}>
            10/2019 - 09/2020 : IT Support Engineer @Evros Technology Group -
            Dublin, Ireland
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={paperstyle}>
            09/2020 - present : Senior IT Support Engineer @Evros Technology
            Group - Dublin, Ireland
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
