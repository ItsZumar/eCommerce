import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  TextField,
  Container,
  Button,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../Image/logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  btn: {
    "&:hover": {
      backgroundColor: "#06649e",
    },
  },
  links: {
    marginRight: 20,
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "blue",
    },
  },
  btnLinks: {
    color: "white",
    textDecoration: "none",
  },
  topHeader: {
    backgroundColor: "#064f88",
    minHeight: "35px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      // padding: "0 10px 0 10px",
      fontSize: "13px",
    },
  },
  middleHeader: {
    [theme.breakpoints.down("md")]: {
      margin: "0 20px 0 20px",
    },
  },
  middleHeaderDiv: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  lastHeader: {
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar style={{ position: "static" }}>
        <Toolbar className={classes.topHeader}>
          <Container>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Link
                  to="/aboutCZ"
                  variant="body2"
                  color="inherit"
                  className={classes.links}
                >
                  About Computer Zone
                </Link>
                <Link
                  to="/contactUs"
                  variant="body2"
                  color="inherit"
                  className={classes.links}
                >
                  Feedbacks & Suggestions
                </Link>
                <Link
                  to="/contactUs"
                  variant="body2"
                  color="inherit"
                  className={classes.links}
                >
                  Contact Us
                </Link>
                <Link
                  to="/FAQs"
                  variant="body2"
                  color="inherit"
                  className={classes.links}
                >
                  FAQs
                </Link>
                <Link
                  to="/policy"
                  variant="body2"
                  color="inherit"
                  className={classes.links}
                >
                  Policies
                </Link>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  color="inherit"
                  className={classes.links}
                  style={{ display: "contents" }}
                >
                  My Account
                  <ArrowDropDownIcon />
                </Link>

                <Link
                  color="inherit"
                  className={classes.links}
                  style={{ marginLeft: 20, marginRight: 20 }}
                >
                  Login
                </Link>
                <Link color="inherit" className={classes.links}>
                  Create Account
                </Link>
              </div>
            </div>
          </Container>
        </Toolbar>
        <Toolbar
          style={{ padding: "10px 0px 10px 0px", backgroundColor: "#0c4a79" }}
          // className={classes.middleHeader}
        >
          <Container className={classes.middleHeader}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className={classes.middleHeaderDiv}
            >
              <div>
                <img alt="#" src={logo} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  size="small"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: 3,
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  style={{ marginLeft: 5, backgroundColor: "#ffdc00" }}
                >
                  <SearchIcon />
                </Button>
                <ShoppingCartIcon
                  fontSize="large"
                  style={{ marginLeft: 15, marginRight: 15 }}
                />
              </div>
            </div>
          </Container>
        </Toolbar>
        <Toolbar style={{ minHeight: 47, backgroundColor: "#022e4c" }}>
          <Container className={classes.lastHeader}>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                HOME
              </Link>
            </Button>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                PRODUCTS
              </Link>
              <ArrowDropDownIcon />
            </Button>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                LAPTOPS
              </Link>
            </Button>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                GRAPHIC CARDS
              </Link>
            </Button>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                MONITORS
              </Link>
            </Button>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                PRINTERS
              </Link>
            </Button>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                HDD
              </Link>
            </Button>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                SSD
              </Link>
            </Button>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                NETWORK
              </Link>
            </Button>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                RAM
              </Link>
            </Button>
            <Button color="inherit" className={classes.btn} component="a">
              <Link className={classes.btnLinks} to="/">
                PSU
              </Link>
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
