import * as React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { sideMenuItems } from "./tileData";
import "./Dashboard.css";
import { Avatar } from "antd";
import { Col } from "antd";
import { Menu, Dropdown, Icon } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="userProfile">
      <Icon type="user" />
      <a href="http://www.alipay.com/">Profile</a>
    </Menu.Item>
    <Menu.Item key="profileSettings">
      <Icon type="setting" theme="outlined" />
      <a href="http://www.taobao.com/">Settings</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout">
      <Icon type="poweroff" theme="outlined" />
      Logout
    </Menu.Item>
  </Menu>
);

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 800,
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing.unit * 9
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3
    }
  });

interface IDashboardProps {
  classes: Record<
    | "root"
    | "appBar"
    | "appBarShift"
    | "menuButton"
    | "hide"
    | "drawerPaper"
    | "drawerPaperClose"
    | "toolbar"
    | "content",
    string
  >;
}

class Dashboard extends React.Component<IDashboardProps> {
  state = {
    open: false
  };

  projectNavigationListItems = sideMenuItems.map(listItem => {
    return (
      <Link
        to={`/dashboard/${listItem.actionKey}`}
        style={{ textDecoration: "none" }}
        key={"linkTo_" + listItem.id}
      >
        <ListItem button={true} key={listItem.id}>
          <ListItemIcon>{listItem.iconType}</ListItemIcon>
          <ListItemText primary={listItem.text} />
        </ListItem>
      </Link>
    );
  });

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    debugger;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.state.open} className="row">
            <Col span={20}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                noWrap={true}
                className="headerLeftTitle"
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  My Custom Dashboard
                </Link>
              </Typography>
            </Col>
            <Col span={4}>
              <div className="headerRightDiv">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
                </Dropdown>
              </div>
            </Col>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />

          <List>{this.projectNavigationListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
