import {
  Button,
  Container,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Divider } from "@material-ui/core";

function ContactUs() {
  return (
    <Container>
      <Typography
        style={{
          border: "1px solid #c5c5c5",
          marginTop: 20,
          padding: 10,
        }}
      >
        <Link to="/">Home</Link> / Contact Us
      </Typography>
      <Typography
        variant="h4"
        style={{
          marginTop: 25,
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <ListAltIcon fontSize="large" style={{ marginRight: 10 }} />
        Contact Us
      </Typography>
      <Typography style={{ marginBottom: 60 }}>
        Use the following contact details to contact us or fill up the below
        contact form. We'll respond to your query as soon as possible.
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          style={{ border: "1px solid #c5c5c5", padding: 20 }}
        >
          <Typography gutterBottom style={{ fontWeight: 600 }}>
            CONTACT DETAILS
          </Typography>
          <Divider />
          <Typography style={{ marginTop: 20, marginBottom: 10 }}>
            Computer Zone
          </Typography>
          <Typography>
            Address: RWP 16/20, Main Rashid Road, Gulshan-e-Johar Block-7,
            Rawalpindi, Pakistan.
          </Typography>
          <Typography style={{ marginTop: 10 }}>Phone: 05122222678</Typography>
          <Typography style={{ marginTop: 10 }}>
            Email: info@ecommerce.com.pk
          </Typography>
          <Typography style={{ marginTop: 10 }}>
            Website: www.ecommerce.com.pk
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} style={{ padding: 20 }}>
          <Typography style={{ fontWeight: 600 }} gutterBottom>
            CONTACT FORM
          </Typography>
          <Divider style={{ marginBottom: 20 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} style={{ marginBottom: 5 }}>
              <TextField
                size="medium"
                label="Full Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} style={{ marginBottom: 5 }}>
              <TextField
                size="medium"
                label="Company Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} style={{ marginBottom: 5 }}>
              <TextField
                size="medium"
                label="Email Address"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} style={{ marginBottom: 5 }}>
              <TextField
                size="medium"
                label="Phone / Mobile"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} style={{ marginBottom: 5 }}>
              <TextField
                size="medium"
                label="Subject"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={9}
                placeholder="Comment Here!"
                style={{
                  padding: 10,
                  width: "100%",
                  backgroundColor: "#FAFAFA",
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                justify="center"
                variant="contained"
                color="primary"
                size="large"
                style={{ width: 200, backgroundColor: "#022e4c" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;
