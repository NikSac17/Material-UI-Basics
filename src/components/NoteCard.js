import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={()=>handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.cat}
        />
        <CardContent>
          <Typography variant="body2" color="lightgrey">
            {note.detail}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
