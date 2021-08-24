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
    backgroundColor: "#013559",
    color: "white",
    "&:hover": {
      backgroundColor: "#024d7f",
    },
  },
  linkBtn: {
    textDecoration: "none",
  },
});

function FeaturedProductsCard({ id, img, heading, detail, price, btn }) {
  const classes = useStyles();
  let headingLen = 35;
  let detailLen = 75;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardActionArea style={{ padding: 15 }} align="center">
        <Link to={`/cardDetails/${id}`}>
          <CardMedia image={img} className={classes.media} title="game" />
        </Link>
        <Typography variant="h6" color="primary">
          {heading.slice(0, headingLen) +
            (heading.length > headingLen ? "..." : "")}
        </Typography>
        <Typography className={classes.price}>
          {detail.slice(0, detailLen) +
            (detail.length > detailLen ? "..." : "")}
        </Typography>
        <Typography variant="h6" className={classes.price}>
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
