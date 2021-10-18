import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core"; //makeStyle is a function, so it cannot be imported without destructuring
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useState } from "react";
import { useHistory } from "react-router";

//custom css to material ui components
const useStyles = makeStyles({
  //   btn: {
  //     fontSize: 60,
  //     backgroundColor: "violet",
  //   },
  //   title:{
  //       textDecoration: 'underline',
  //       marginBottom: 20
  //   }
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Create = () => {
  const classes = useStyles();

  const history = useHistory();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [cat, setCat] = useState("money");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (detail === "") {
      setDetailError(true);
    }

    if (title && detail) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, detail, cat }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetail(e.target.value)}
          className={classes.field}
          label="Note Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailError}
        />

        <RadioGroup value={cat} onChange={(e) => setCat(e.target.value)}>
          <FormControlLabel value="money" control={<Radio />} label="Money" />
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel
            value="reminder"
            control={<Radio />}
            label="Reminder"
          />
          <FormControlLabel value="work" control={<Radio />} label="Work" />
        </RadioGroup>

        <Button
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          // startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>

      {/* <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>

      <ButtonGroup color="secondary" variant="contained">
          <Button>One</Button>
          <Button>One</Button>
          <Button>One</Button>
      </ButtonGroup> */}
    </Container>
  );
};

export default Create;
