import {
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  media: {
    height: 200,
    width: 200,
  },
  price: {
    marginTop: 10,
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#800f2f",
    color: "white",
    "&:hover": {
      backgroundColor: "#c9184a",
    },
  },
  linkBtn: {
    textDecoration: "none",
  },
  heading: {
    color: "#c9184a",
    fontWeight: "bold",
  },
});

function FeaturedProductsCard({ id, img, heading, detail, price, btn }) {
  const classes = useStyles();
  let headingLen = 35;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardActionArea style={{ padding: 15 }}>
        <Link to={`/cardDetails/${id}`}>
          <Typography align="center">
            {/* <CardMedia image={img} className={classes.media} title="game" /> */}
            <img src={img} className={classes.media} />
          </Typography>
        </Link>
        <Typography variant="h6" className={classes.heading}>
          {heading.slice(0, headingLen) +
            (heading.length > headingLen ? "..." : "")}
        </Typography>
        <Typography className={classes.price}>
          {detail.slice(0, headingLen) +
            (detail.length > headingLen ? "..." : "")}
        </Typography>
        <Typography variant="h6" className={classes.price} align="center">
          {price}
        </Typography>
        <Link to={`/cardDetails/${id}`} className={classes.linkBtn}>
          <Button variant="contained" fullWidth className={classes.btn}>
            {btn}
          </Button>
        </Link>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedProductsCard;
