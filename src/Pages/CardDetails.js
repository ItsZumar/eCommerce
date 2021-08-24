import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import img from "../components/Image/gameRock.jpg";
import img2 from "../components/Image/laptop.jpg";
import img3 from "../components/Image/laptop2.jpg";

const images = [
  {
    original: img,
    thumbnail: img,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
];

const useStyles = makeStyles({
  topBar: {
    border: "1px solid #c5c5c5",
    marginTop: 20,
    padding: 10,
    marginBottom: 20,
  },
  addToCartBtn: {
    backgroundColor: "#fff200",
    color: "black",
    marginTop: 30,
    marginBottom: 20,
  },
});

function CardDetails({ CardData }) {
  const classes = useStyles();
  const { id } = useParams();
  return (
    <Container>
      {CardData.filter((card) => card.id === id).map((card, index) => (
        <Container key={index}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12}>
              <Typography className={classes.topBar}>
                <Link to="/">Home</Link> / {card.heading}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <ImageGallery items={images} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" style={{ marginBottom: 20 }}>
                {card.heading}
              </Typography>
              <Typography variant="body2">
                Product Code: {card.ProductCode}
              </Typography>
              <Typography variant="body2">Brand: {card.Brand}</Typography>
              <Typography variant="body2">
                Price Updated On: {card.PriceUpdatedOn}
              </Typography>
              <Typography color="textSecondary" style={{ marginTop: 20 }}>
                {card.details}
              </Typography>
              <Typography
                color="error"
                style={{ fontWeight: 600, marginTop: 10 }}
              >
                View details on manufacturer's website
              </Typography>
              <Typography style={{ marginTop: 10 }}>
                Did you find somewhere cheaper?
                <span style={{ color: "#5977b9" }}>Let us know</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid style={{ border: "1px dashed #c5c5c5", padding: 15 }}>
                <Typography
                  variant="h5"
                  color="primary"
                  style={{ color: "green", fontWeight: 600 }}
                  gutterBottom
                >
                  In Stock
                </Typography>
                <Typography color="primary">
                  Warranty:{" "}
                  <span style={{ fontWeight: 600 }}>
                    10 - Month(s) Warranty
                  </span>
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.addToCartBtn}
                >
                  <ShoppingCartIcon style={{ marginRight: 10 }} />
                  Add to Cart
                </Button>
                <Typography variant="h4"> {card.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      ))}
    </Container>
  );
}

export default CardDetails;
