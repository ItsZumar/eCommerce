import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import img1 from "../Image/footerImg1.png";
import img2 from "../Image/footerImg2.png";
import img3 from "../Image/footerImg3.png";
import img4 from "../Image/footerImg4.png";
import img5 from "../Image/footerImg5.png";
import img6 from "../Image/footerImg6.png";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 20,
    color: "white",
  },
  gridCont: {
    display: "flex",
    alignItems: "center",
  },
  gridItem1: {
    [theme.breakpoints.down("md")]: {
      marginBottom: 15,
    },
  },
  gridItem2: {
    [theme.breakpoints.down("md")]: {
      marginBottom: 10,
    },
  },
}));

function FooterCopyright() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Grid className={classes.gridCont} container align="center">
          <Grid item xs={12} md={4} className={classes.gridItem1}>
            <Typography variant="subtitle2">
              Copyright © E-Commerce 2021. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem2}>
            <img alt="#" src={img1} width={50} style={{ marginRight: 5 }} />
            <img alt="#" src={img2} width={50} style={{ marginRight: 5 }} />
            <img alt="#" src={img3} width={50} style={{ marginRight: 5 }} />
            <img alt="#" src={img4} width={50} style={{ marginRight: 5 }} />
            <img alt="#" src={img5} width={50} style={{ marginRight: 5 }} />
            <img alt="#" src={img6} width={50} style={{ marginRight: 5 }} />
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem3}>
            <Typography variant="subtitle2">
              Designed & developed by Zumar Saeed.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default FooterCopyright;
