import React, { useState } from "react";
import { Button, Container, Divider, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function FAQs() {
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);

  const handelClick = () => {
    if (content1) {
      setContent1(false);
    } else {
      setContent1(
        <>
          <Typography variant="h6" gutterBottom>
            1: Can we place order online and what are payment options?
          </Typography>
          <Typography gutterBottom>
            Of course, you can place orders online. Upon confirmation of your
            payment, we will dispatch your order as soon as possible. Total time
            is based on the amount of time it takes to get payment
            authorization, order processing, and the transit time from the
            carrier. This can range from 24 hours to 10 days for in-stock items.
            To avoid delays, please ensure that you have provided us with the
            correct Shipping address.
          </Typography>
          <Typography variant="h6" gutterBottom>
            2: Is cash on delivery option available?
          </Typography>
          <Typography gutterBottom>
            Yes Cash On Delivery is available for Karachi only.
          </Typography>
          <Typography variant="h6" gutterBottom>
            3: Do the prices of On Order Products Change?
          </Typography>
          <Typography gutterBottom>
            We do everything to ensure that the prices on our website are
            correct and try to keep prices constant. Sometimes we need to change
            the prices, either up or down without any prior notice due to change
            in Forex rates/government policies. E-Commerce reserves the right to
            change the prices on the website at any time without prior notice.
            In that case, if you have ordered the product but not yet confirmed
            or you have even paid for a product the prices would not be valid.
            It's better to confirm the price's of On Order Product's through
            phone call first and then deposit the amount after confirmation.
          </Typography>
        </>
      );
    }
    setContent2(false);
    setContent3(false);
  };

  const customerReviews = () => {
    if (content2) {
      setContent2(false);
    } else {
      setContent2(
        <>
          <Typography variant="h6" gutterBottom>
            1: Why do I write reviews?
          </Typography>
          <Typography gutterBottom>
            We want to hear your opinions. We want consumers to get the
            information they need to make smart buying choices. As a e-commerce
            client, you can submit reviews for items listed on
            e-commerce.com.pk. We encourage you to share your ideas, both
            favourable and unfavourable.
          </Typography>
          <Typography gutterBottom variant="h6">
            1: Why do I write reviews?
          </Typography>
          <Typography gutterBottom>
            We want to hear your opinions. We want consumers to get the
            information they need to make smart buying choices. As a e-commerce
            client, you can submit reviews for items listed on
            e-commerce.com.pk. We encourage you to share your ideas, both
            favourable and unfavourable.
          </Typography>
          <Typography gutterBottom variant="h6">
            1: Why do I write reviews?
          </Typography>
          <Typography gutterBottom>
            We want to hear your opinions. We want consumers to get the
            information they need to make smart buying choices. As a e-commerce
            client, you can submit reviews for items listed on
            e-commerce.com.pk. We encourage you to share your ideas, both
            favourable and unfavourable.
          </Typography>
        </>
      );
    }
    setContent1(false);
    setContent3(false);
  };

  const storeTimings = () => {
    if (content3) {
      setContent3(false);
    } else {
      setContent3(
        <>
          <Typography variant="h6" gutterBottom>
            What are your store hours?
          </Typography>
          <Typography gutterBottom>Store Hours:</Typography>
          <Typography gutterBottom>
            Monday – Thursday: 11:00am to 6:00pm Friday: 11:00am to 1:00pm &
            3:00pm to 6:00pm Sunday Closed.
          </Typography>
        </>
      );
    }
    setContent1(false);
    setContent2(false);
  };

  return (
    <Container>
      <Typography
        style={{
          border: "1px solid #c5c5c5",
          marginTop: 20,
          marginBottom: 20,
          padding: 10,
        }}
      >
        <Link to="/">Home</Link> / Frequently Asked Questions
      </Typography>
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        Frequently Asked Questions
      </Typography>
      <div
        style={{ border: "1px solid #c5c5c5", paddingTop: 20, paddingLeft: 10 }}
      >
        <Button onClick={handelClick}>
          <Typography variant="h6">Payments / Delivery / Shipments</Typography>
        </Button>
        <Divider />
        <Typography style={{ padding: 19 }}>{content1}</Typography>
        <Button onClick={customerReviews}>
          <Typography variant="h6">Customer Reviews</Typography>
        </Button>
        <Divider />
        <Typography style={{ padding: 19 }}>{content2}</Typography>
        <Button onClick={storeTimings}>
          <Typography variant="h6">Store Timings</Typography>
        </Button>
        <Divider />
        <Typography style={{ padding: 19 }}>{content3}</Typography>
      </div>
    </Container>
  );
}

export default FAQs;
