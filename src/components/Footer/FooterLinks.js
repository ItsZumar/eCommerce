import React from "react";
import logo from "../Image/logo.png";
import FooterDetail from "../DummyData/FooterData";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles({
  gridContainer: {
    paddingTop: 42,
    paddingBottom: 42,
    color: "white",
    display: "flex",
    flexDirection: "row",
  },
  location: {
    display: "flex",
    marginBottom: 4,
  },
});

function FooterLinks() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.gridContainer} spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <img alt="#" src={logo} />
          <Typography variant="subtitle2">{FooterDetail.detail}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            PRODUCTS
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Laptops
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Printers
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Hard Drives
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Network Products
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Monitors
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            ACCOUNTS
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            My Account
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Shopping Cart
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Order History
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            CORPORATE
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Laptops
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Printers
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Hard Drives
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Network Products
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Monitors
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            CONTACT
          </Typography>
          <div className={classes.location}>
            <LocationOnIcon style={{ marginRight: 5 }} />
            <Typography variant="subtitle2" gutterBottom>
              FL 4/20, Main Rashid Minhas Road, Gulshan-e-Iqbal Block-5,
              Karachi, Pakistan.
            </Typography>
          </div>
          <div className={classes.location}>
            <PhoneIcon style={{ marginRight: 5 }} />
            <Typography variant="subtitle2" gutterBottom>
              02134960583
            </Typography>
          </div>
          <div className={classes.location}>
            <EmailIcon style={{ marginRight: 5 }} />
            <Typography variant="subtitle2">info@czone.com.pk</Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default FooterLinks;
