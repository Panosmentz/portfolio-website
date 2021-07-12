import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import Footer from "./Footer";
import HashLoader from "react-spinners/HashLoader";

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
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
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
    backgroundColor: "#2a2829",
  },
  typography: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#2a2829",
  },
  form: {
    width: "100%",
  },
  button: {
    color: "#2a2829",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2a2829",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#403e3f",
    },
  },
  textfield: {
    "& .MuiOutlinedInput-input": {
      color: "#2a2829",
    },
    "& .MuiInputLabel-root": {
      color: "#2a2829",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2a2829",
    },

    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#2a2829",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2a2829",
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
    }, 8000);
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
                  autoClose: 3000,
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
          <HashLoader color={"#143e55"} loading={loading} size={50} />
        </div>
      ) : (
        <div className={classes.paper}>
          <Container component="main" maxWidth="xs">
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
                className={classes.submit}
                onClick={handleReset}
              >
                SUBMIT
              </Button>
            </form>
          </Container>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default Contact;
