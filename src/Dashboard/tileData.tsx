import * as React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import StorageIcon from "@material-ui/icons/Storage";
import PeopleIcon from "@material-ui/icons/People";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";

export const sideMenuItems = [
  {
    text: "Kanban Board",
    actionKey: "kanban-board",
    id: 1,
    iconType: <DashboardIcon />
  },
  {
    text: "Tasks",
    actionKey: "tasks",
    id: 2,
    iconType: <AssignmentIcon />
  },
  {
    text: "Documents",
    actionKey: "documents",
    id: 3,
    iconType: <StorageIcon />
  },
  {
    text: "Team",
    actionKey: "team",
    id: 4,
    iconType: <PeopleIcon />
  },
  {
    text: "Activities",
    actionKey: "activities",
    id: 5,
    iconType: <NotificationsIcon />
  },
  {
    text: "Customize",
    actionKey: "customize",
    id: 6,
    iconType: <SettingsIcon />
  }
];
