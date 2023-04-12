import React from "react";
import { Notification } from "~/routes/notifs";
import {
  ListItem,
  ListItemAvatar,
  IconButton,
  Checkbox,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
} from "@mui/material";
import { Done, Delete } from "@mui/icons-material";

type Props = {
  notification: Notification;
  selectedNotifications: number[];
  handleSelect: (id: number) => void;
  handleDeleteNotification: (id: number) => void;
};

function Notif({
  notification,
  handleSelect,
  selectedNotifications,
  handleDeleteNotification,
}: Props) {
  return (
    <ListItem
      key={notification.id}
      alignItems="center"
      sx={{
        "&:hover": { bgcolor: "background.paper" },
        bgcolor: "ThreeDFace",
        cursor: "pointer",
      }}
    >
      <ListItemAvatar>
        <IconButton onClick={() => handleSelect(notification.id)}>
          {selectedNotifications.includes(notification.id) ? (
            <Checkbox icon={<Done />} checkedIcon={<Done />} />
          ) : (
            <Checkbox />
          )}
        </IconButton>
      </ListItemAvatar>
      <ListItemText
        primary={notification.companyName}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ display: "inline" }}
              color="text.primary"
            >
              {notification.date}
            </Typography>
            {" - " + notification.text}
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleDeleteNotification(notification.id)}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Notif;
