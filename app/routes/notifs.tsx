import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneIcon from "@mui/icons-material/Done";
import withLayout from "~/HOC/withLayout";
import Notif from "~/components/Notification";
import Confirm from "~/Modal/Confirm";

export type Notification = {
  id: number;
  companyName: string;
  text: string;
  date: string;
};

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: 1,
      companyName: "Company A",
      text: "Notification 1",
      date: "2022-01-01",
    },
    {
      id: 2,
      companyName: "Company B",
      text: "Notification 2",
      date: "2022-01-02",
    },
    {
      id: 3,
      companyName: "Company C",
      text: "Notification 3",
      date: "2022-01-03",
    },
  ]);
  const [selectedNotifications, setSelectedNotifications] = React.useState<
    number[]
  >([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSelect = (id: number) => {
    if (selectedNotifications.includes(id)) {
      setSelectedNotifications(selectedNotifications.filter((n) => n !== id));
    } else {
      setSelectedNotifications([...selectedNotifications, id]);
    }
  };

  const handleSelectAll = () => {
    setSelectedNotifications(() => notifications?.map((notif) => notif.id));
    setIsModalOpen(true);
  };

  const handleDeleteSelected = () => {
    setNotifications(
      notifications.filter((n) => !selectedNotifications.includes(n.id))
    );
    setSelectedNotifications([]);
    setIsModalOpen(false);
  };

  const handleDeleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <Box sx={{  px: 2, maxWidth: 'lg', margin: '2rem auto' }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs:"column",sm:"row"} ,
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5">Notifications</Typography>
        <Button
          startIcon={<DoneAllIcon />}
          variant="contained"
          color="secondary"
          onClick={handleSelectAll}
          disabled={notifications.length === 0}
          sx = {{
            marginTop: {xs: 4, sm: 0}
          }}
        >
          Mark All as Read and Delete
        </Button>
      </Box>

      <List sx={{ width: "100%" }}>
        {notifications.map((notification) => (
          <Notif
            notification={notification}
            selectedNotifications={selectedNotifications}
            handleSelect={handleSelect}
            handleDeleteNotification={handleDeleteNotification}
          />
        ))}
      </List>
      <Confirm
        cancelText="No"
        confirmText="Yes"
        content="Are you sure to delete all notification?"
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteSelected}
        open={isModalOpen}
        title="Confirmation"
      />
    </Box>
  );
};

export default withLayout(NotificationList);
