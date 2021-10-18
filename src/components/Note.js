import React, { useEffect, useState } from "react";
import { Grid, Paper, Container } from "@material-ui/core";

const Note = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <Container>
      {/* <Grid container>
        12 column grid system
        <Grid item xs={12} s={6} md={3}>
            <Paper>1</Paper>
        </Grid>
      </Grid> */}

      <Grid container>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Note;
