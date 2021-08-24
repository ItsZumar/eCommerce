import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  TextField,
  Container,
  Button,
  Typography,
  Grid,
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
    theme,
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
    width: "100%",
    padding: "0px 110px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 40px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <>
      {/* <Container> */}
      <AppBar style={{ position: "static" }}>
        <Toolbar
          style={{
            height: 33,
            backgroundColor: "#064f88",
          }}
        >
          <Grid className={classes.topHeader}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <Link
                  to="/AboutCZ"
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
              <div style={{ display: "flex" }}>
                <Link
                  color="inherit"
                  className={classes.links}
                  style={{ display: "contents" }}
                >
                  <Typography>My Account</Typography>
                  <ArrowDropDownIcon />
                </Link>

                <Link
                  color="inherit"
                  className={classes.links}
                  style={{ marginLeft: 20, marginRight: 20 }}
                >
                  Login
                </Link>
                <Link
                  color="inherit"
                  className={classes.links}
                  style={{ marginRight: 0 }}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </Grid>
        </Toolbar>
        <Toolbar
          style={{ padding: "10px 0px 10px 0px", backgroundColor: "#0c4a79" }}
        >
          <Container style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flexGrow: 1 }}>
              <img alt="#" src={logo} />
            </div>
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
            <ShoppingCartIcon fontSize="large" style={{ marginLeft: 15 }} />
          </Container>
        </Toolbar>
        <Toolbar style={{ minHeight: 47, backgroundColor: "#022e4c" }}>
          <Container>
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
      {/* </Container> */}
    </>
  );
}

export default Navbar;
