import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import Footer from "./Footer";
import HashLoader from "react-spinners/HashLoader";
import "@fontsource/source-code-pro";
import "@fontsource/source-code-pro/400.css";
import Particle from "./utils/Particles";
import { Grid } from "@material-ui/core";

const validationSchema = yup.object({
  name: yup.string("Enter your name").max(40).required("Your name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
    .max(40),
  subject: yup.string("Enter a subject").max(40).required("Cannot be blank"),

  message: yup
    .string("Enter your message")
    .max(500)
    .required("Cannot be blank"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#7f10a1",
  },
  typography: {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  form: {
    width: "100%",
  },
  button: {
    color: "#fff",
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#7f10a1",
    "&:hover": {
      backgroundColor: "#290036",
    },
    width: "100px",
    fontFamily: "Source Code Pro",
    fontSize: "1.2rem",
  },
  textfield: {
    "& .MuiOutlinedInput-input": {
      color: "#fff",
      fontFamily: "Source Code Pro",
      fontSize: "1.2rem",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
      fontFamily: "Source Code Pro",
      fontSize: "1.2rem",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      fontFamily: "Source Code Pro",
      fontSize: "1.2rem",
    },

    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#fff",
      fontFamily: "Source Code Pro",
      fontSize: "1.2rem",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      fontFamily: "Source Code Pro",
      fontSize: "1.2rem",
    },
  },
}));

function Contact() {
  //loader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm(
          "service_amhdbn5",
          "template_uk0zasm",
          "form",
          "user_C1Ytu0nlrfPYynNIZQJYD"
        )
        .then(
          function (response) {
            if (response.status === 200) {
              toast.success(
                "Thank you for contacting me. Your form has been submitted",
                {
                  position: "bottom-center",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                }
              );
            }
          },
          function (err) {
            alert("FAILED...", err);
          }
        );
      resetForm({ values: "" });
    },
  });
  function handleReset() {}

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
          <Grid item lg={12} xs={12}>
            <Typography
              className={classes.typography}
              component="h1"
              variant="h5"
            >
              Contact{" "}
              <Avatar
                className={classes.avatar}
                style={{ justifyContent: "center", display: "flex" }}
              >
                <ContactMailIcon />
              </Avatar>
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} xs={12} align="center">
            <form
              className={classes.form}
              onSubmit={formik.handleSubmit}
              id="form"
            >
              <TextField
                className={classes.textfield}
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                className={classes.textfield}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                className={classes.textfield}
                variant="outlined"
                margin="normal"
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                error={formik.touched.subject && Boolean(formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
              />
              <TextField
                className={classes.textfield}
                variant="outlined"
                margin="normal"
                multiline
                rows={6}
                fullWidth
                id="message"
                label="Your message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.button}
                onClick={handleReset}
              >
                SUBMIT
              </Button>
            </form>
          </Grid>
          <Footer />
        </Grid>
      )}
    </div>
  );
}

export default Contact;
