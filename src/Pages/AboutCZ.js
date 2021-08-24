import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function AboutCZ() {
  return (
    <Container>
      <Typography
        style={{
          border: "1px solid #c5c5c5",
          marginTop: 20,
          padding: 10,
        }}
      >
        <Link to="/">Home</Link>/ About Us
      </Typography>
      <Typography
        variant="h4"
        color="action"
        style={{ marginTop: 30, marginBottom: 30 }}
      >
        About Us
      </Typography>
      <Container>
        <Typography variant="body1" style={{ marginBottom: 25 }}>
          Over the period of the last 11 years, YOU have taken Computer Zone
          from a simple business idea to a revolution in the heart of Pakistan’s
          Information Technology market. The idea behind the development of
          Computer Zone was never about creating a retailer with good prices;
          but to give birth to a place where people could be served as a part of
          the family. Where they could actually feel the touch of Information
          Technology’s application in the way they are dealt with. The world has
          moved to the next generation of business relationships; and we are
          proud to be the first in Pakistan’s Information Technology market to
          accept that “Yes, YOU are important!” With around 1,000% growth rate,
          we are proud and extremely happy to quote that Computer Zone has a
          family of more then a million online family members and more than
          200,000 (and growing) customer’s offline; in comparison to a total of
          10 customers 11 years ago. The world is changing and Computer Zone
          happily accepts that the customers of today are more tech savvy and
          demand value for their money. We believe that change is the only thing
          constant and in order to deliver to you the value you deserve, we are
          always in the process of evolving to the next best level.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: 25 }}>
          The success of Computer Zone is not a magical coincidence but a result
          of experienced professionals listening to and implementing every
          suggestion that YOU gifted us with over the past 11 years. The world
          has revolutionized and it’s time to move from those close gullied and
          air tight markets to a system of automation where you do not need to
          run after sales people asking for product specification and
          quotations. Have a nice sip of coffee, stretch your legs and go
          through the updated, complete and vast range of products awaiting your
          royal presence by a few clicks. Even if you are not comfortable at
          dealing with an online market and need a more personal touch and
          suggestion to things; come visit Computer Zone. 11 years ago people
          didn’t have online markets; and Computer Zone respects your demand for
          one to one communication and anxiously awaits your presence
        </Typography>
        <Typography variant="body1" style={{ marginBottom: 25 }}>
          There might still be a lot of things that you could want to know about
          Computer Zone. Simply Sign up, feel free, and don’t be shy. We never
          tell our customers to hush away because there are others to deal with
          or we already met our daily sales quota. So, welcome to Computer Zone;
          and don’t you worry because whether you are a corporate client or an
          individual customer; we are family now. Welcome to the Information
          Technology’s Revolution in Pakistan!
        </Typography>
      </Container>
    </Container>
  );
}

export default AboutCZ;
