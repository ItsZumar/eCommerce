import React from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import MailIcon from "@material-ui/icons/Mail";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";

const useStyles = makeStyles({
  div: {
    marginBottom: "12px",
    display: "flex",
    backgroundColor: "#002c4e",
    marginTop: 80,
    padding: 10,
    alignItems: "center",
  },
  gridCont: {
    display: "flex",
    alignItems: "center",
  },
  mailIcon: {
    color: "white",
    marginRight: 10,
  },
  span: {
    fontWeight: 600,
    fontSize: 22,
  },
  textField: {
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
  },
  subscribeBtn: {
    backgroundColor: "#ffdc00",
    padding: 7,
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.div}>
        <Container>
          <Grid container spacing={2} style={{}}>
            <Grid item xs={12} md={6} className={classes.gridCont}>
              <MailIcon className={classes.mailIcon} />
              <Typography variant="h6" className={classes.mailIcon}>
                SIGN UP FOR <span className={classes.span}>NEWSLETTER</span>
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                placeholder="Search"
                variant="outlined"
                size="small"
                fullWidth
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                fullWidth
                variant="contained"
                size="medium"
                className={classes.subscribeBtn}
              >
                SUBSCRIBE
                <ArrowRightAltIcon />
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ backgroundColor: "#064f88" }}>
        <Container>
          <FooterLinks />
        </Container>
      </div>
      <div style={{ backgroundColor: "#0e5d9a" }}>
        <FooterCopyright />
      </div>
    </>
  );
}

export default Footer;
