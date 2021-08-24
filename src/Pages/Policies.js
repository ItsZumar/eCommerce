import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function Policies() {
  return (
    <Container>
      <Typography
        style={{
          border: "1px solid #c5c5c5",
          marginTop: 20,
          padding: 10,
          marginBottom: 20,
        }}
      >
        <Link to="/">Home</Link> / Policies
      </Typography>
      <Typography variant="h4" style={{ marginBottom: 30 }}>
        Policy
      </Typography>
      <Typography>1: Warranty Policy</Typography>
      <Typography style={{ marginBottom: 30 }}>
        Warranty may be claimed within the specified period in case a
        manufacturing fault appears. The following conditions are applicable:
      </Typography>
      <Container>
        <Typography>
          Warranty is given on behalf of the Manufacturer/Supplier/Distributor.
          If the product was sold in good working condition then the
          reseller/vendor is not responsible for any defect which may appear
          later. If the "Warranty Card Issued" is mentioned on the invoice then
          the customer should ensure that he/she receives the same along with
          the invoice, else our customer support Centre will not handle the
          warranty. The manufacturer/supplier/distributor reserves the right to
          reject any warranty claim whereby the original invoice is missing. It
          is strongly recommended that customers should check the product before
          leaving our counter, as warranty begins once the receipt has been
          generated. In case of any problem, the product will be treated in a
          normal warranty claim process. The manufacturer/supplier/distributor
          reserves the right to reject any claim whereby the product/component
          is broken or shows signs of burning, rust due to weather conditions.
          The manufacturer/supplier/distributor reserves the right to reject any
          warranty claim whereby the product/component is submitted in improper
          condition. The product should be well packed in protective material
          supplied while selling. Warranty claim due to accidental damage or
          electrical surge will not be entertained. Computer hardware does not
          include software support. Information in this regard may be obtained
          from the manufacturer's website directly. The warranty claim may be
          rejected where the warranty sticker/serial numbers are torn or
          tampered with. The product/component may be replaced or repaired at
          the discretion of the manufacturer/supplier/distributor once the
          warranty claim is accepted. The duration of return may range from 3 to
          6 weeks. The warranty claim may be accepted on a "conditional" basis
          if we are not satisfied that the defect is due to a manufacturing
          fault. Acceptance of warranty claim, in this case, will depend solely
          on the discretion of the manufacturer/supplier/distributor. Please
          note that this may take more time than normal. Warranty will not be
          entertained in case of appearance of the dot on LCDs / LEDs. The
          manufacturer reserves the right to alter the warranty
          terms/conditions. The changes are updated on the manufacturer/supplier
          website. Power adapters, cables, printer cartridges/toners and all the
          additional accessories do not carry any warranty. Warranty claims for
          the same will not be entertained. International warranty depicts that
          the products should be registered with the manufacturer directly and
          the warranty claim will be handled by the user himself. Instruction of
          the manufacturer should be followed. Used hardware carries checking
          warranty only. Please ensure to check purchased hardware is in good
          condition before leaving the counter. We accept warranties from Mon to
          Fri between 11.30am to 6.30pm. The PC covers full warranty subject to
          assurance that the user did not open Pc-case, During the warranty
          period, no component addition or removal is allowed without
          pre-approval of service centre. The manufacturer/supplier/distributor
          reserves the right to charge a certain amount to upgrade the
          product/component in case if the product is discontinued by the
          manufacturer. If the customer is not willing to upgrade then the
          manufacturer/supplier/distributor may return the amount after
          deduction. Limited Warranty means that the first year is free warranty
          and the remaining years are paid warranty. If "Without Warranty" is
          mentioned on any item then please check the item before leaving the
          store. We will not be responsible afterwards.
        </Typography>
      </Container>
    </Container>
  );
}

export default Policies;
