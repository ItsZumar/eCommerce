import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import img1 from "../Image/footerImg1.png";
import img2 from "../Image/footerImg2.png";
import img3 from "../Image/footerImg3.png";
import img4 from "../Image/footerImg4.png";
import img5 from "../Image/footerImg5.png";
import img6 from "../Image/footerImg6.png";

function FooterCopyright() {
  return (
    <>
      <Container
        style={{
          padding: 20,
          color: "white",
        }}
      >
        <Grid
          container
          align="center"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2">
              Copyright © Computer Zone 2021. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img alt="#" src={img1} width={50} style={{ marginRight: 5 }} />
            <img alt="#" src={img2} width={50} style={{ marginRight: 5 }} />
            <img alt="#" src={img3} width={50} style={{ marginRight: 5 }} />
            <img alt="#" src={img4} width={50} style={{ marginRight: 5 }} />
            <img alt="#" src={img5} width={50} style={{ marginRight: 5 }} />
            <img alt="#" src={img6} width={50} style={{ marginRight: 5 }} />
          </Grid>
          <Grid item xs={12} md={4}>
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
