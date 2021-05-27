import { makeStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: (props) => `${props.size * 0.8125}rem`,
    height: (props) => `${props.size * 32}px`,
    borderRadius: "9999px",
  },
  avatar: {
    "&&": {
      height: (props) => `${props.size * 24}px`,
      width: (props) => `${props.size * 24}px`,
      fontSize: (props) => `${props.size * 0.75}rem`,
    },
  },
}));

export default function CustomChip(props) {
  const { size = 1, ...restProps } = props;
  const classes = useStyles({ size });

  return (
    <Chip
      className={classes.root}
      classes={{ avatar: classes.avatar }}
      {...restProps}
    />
  );
}
