import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FeaturedProductsCard from "./FeaturedProductsCard";
import CardData from "../DummyData/DummyData";

const useStyles = makeStyles({
  title: {
    marginTop: 20,
    marginBottom: 20,
    padding: "10px 0 10px 10px",
    backgroundColor: "#e7e7e7",
    color: "#494949",
    fontWeight: 700,
  },
});

function FeaturedProducts() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Typography variant="h5" className={classes.title}>
          Featured Products
        </Typography>
        <Grid container spacing={2}>
          {CardData.map((card, index) => (
            <FeaturedProductsCard
              key={index}
              img={card.img}
              heading={card.heading}
              detail={card.details}
              price={card.price}
              btn={card.btn}
              id={card.id}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default FeaturedProducts;
