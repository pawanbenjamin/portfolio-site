import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { motion } from "framer-motion";

import PawanBnW from "../../assets/PawanBnW.jpg";

import PBlogo from "../../assets/PBlogo.svg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("xs")]: {
      marginBottom: ".5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginRight: "25px",
    marginLeft: "50px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  logo: {
    marginLeft: "1.2em",
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    [theme.breakpoints.down("sm")]: {
      opacity: "0",
    },
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawer: {
    backgroundImage: `url(${PawanBnW})`,
    "& .MuiListIetmText-root": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "40px",
    width: "40px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appBar: {
    boxShadow: "none",
    backgroundColor: "transparent",
    zIndex: theme.zIndex.modal + 1,
  },
  name: {
    marginLeft: "2em",
    ...theme.typography.tab,
    opacity: ".7",
  },
}));

const svgVariants = {
  hidden: {
    opactiy: 0.7,
    rotate: -180,
  },
  visible: {
    opactiy: 0.7,
    rotate: 0,
    scale: 1.3,
    transition: {
      duration: 4,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

export default function Header(props) {
  const { value, setValue, selectedIndex, setSelectedIndex } = props;

  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { name: "Media", link: "/media" },
    { name: "Photos", link: "/photos" },
    { name: "Videos", link: "/videos" },
    { name: "Audio", link: "/audio" },
  ];

  // const routes = [
  //   { name: "Home", link: "/" },
  //   { name: "About Us", link: "/aboutus" },
  //   { name: "Products", link: "/products" },
  //   { name: "Media", link: "/media" },
  //   { name: "Contact Us", link: "/contactus" },
  // ];

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;

      case "/about":
        if (value !== 1) {
          setValue(1);
        }
        break;

      case "/projects":
        if (value !== 2) {
          setValue(2);
        }
        break;

      case "/media":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(0);
        }
        break;
      case "/photos":
        if (value !== 4) {
          setValue(3);
          setSelectedIndex(1);
        }
        break;

      case "/videos":
        if (value !== 5) {
          setValue(3);
          setSelectedIndex(2);
        }
        break;

      case "/audio":
        if (value !== 6) {
          setValue(3);
          setSelectedIndex(3);
        }
        break;

      case "/contact":
        if (value !== 7) {
          setValue(4);
        }
        break;

      case "/estimate":
        if (value !== 0) {
          setValue(5);
        }
        break;

      default:
        break;
    }
  }, [value]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/projects"
          label="Projects"
        />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(e) => handleClick(e)}
          className={classes.tab}
          component={Link}
          to="/media"
          label="Media"
        />
        <Tab
          className={classes.tab}
          style={{
            marginRight: "30px",
          }}
          component={Link}
          to="/contact"
          label="Contact"
        />
      </Tabs>
      {/* <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        // component={Link}
        // to="/estimate"
        // onClick={() => setValue(5)}
      >
        Free Estimate
      </Button> */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={i}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              setValue(3);
              handleClose();
            }}
            selected={i === selectedIndex && value === 3}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            button
            component={Link}
            to="/"
            selected={value === 0}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            button
            component={Link}
            to="/about"
            selected={value === 1}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              About
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            button
            component={Link}
            to="/projects"
            selected={value === 2}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Projects
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            button
            component={Link}
            to="/media"
            selected={value === 3}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Media
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            button
            component={Link}
            to="/contact"
            selected={value === 4}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <AppBar className={classes.appBar} position="sticky" color="primary">
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.logoContainer}
            onClick={() => setValue(0)}
          >
            <Typography className={classes.logo}>Pawan Benjamin</Typography>
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>

      <div className={classes.toolbarMargin} />
    </>
  );
}
