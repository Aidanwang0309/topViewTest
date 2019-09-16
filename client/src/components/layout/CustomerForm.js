import React, { useState } from "react";
import Card from "react-credit-cards";
import { Form, Field } from "react-final-form";
import { Row, Col, Divider, Button } from "antd";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from "../../utils/cardUtils";

const CustomerForm = props => {
  //   const [customerInfo, setCustomerInfo] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     cardNumber: "",
  //     name: "",
  //     expiry: "",
  //     cvc: ""
  //   });

  //   const handleChange = e => {
  //     setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  //   };

  const { handleForm, products } = props;

  const isDisable = () => {
    console.log(products.length);
    return products.length === 0;
  };

  const onSubmit = values => {
    handleForm(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, values, active }) => {
        return (
          <Row id="customer-form" gutter={40}>
            <form onSubmit={handleSubmit}>
              <Divider>Enter Contact Information</Divider>

              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                />
              </Col>

              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />
              </Col>

              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Email Address"
                />
              </Col>

              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Field
                  name="phone"
                  component="input"
                  type="text"
                  placeholder="Phone Number"
                />
              </Col>

              <Divider
                style={{ margin: "8rem auto", transform: "translateY(4rem)" }}
              >
                {" "}
                Enter Payment Information
              </Divider>

              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Card
                  number={values.cardNumber || ""}
                  name={values.name || ""}
                  expiry={values.expiry || ""}
                  cvc={values.cvc || ""}
                  focused={active}
                />
              </Col>

              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Row gutter={20}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Field
                      type="tel"
                      component="input"
                      name="cardNumber"
                      pattern="[\d| ]{16,22}"
                      placeholder="Card Number"
                      format={formatCreditCardNumber}
                    />
                  </Col>

                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Field
                      type="text"
                      component="input"
                      name="name"
                      placeholder="Card Name"
                    />
                  </Col>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Field
                      type="text"
                      component="input"
                      name="expiry"
                      pattern="\d\d/\d\d"
                      placeholder="Valid Thru"
                      format={formatExpirationDate}
                    />
                  </Col>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Field
                      component="input"
                      type="tel"
                      name="cvc"
                      placeholder="cvc"
                      format={formatCVC}
                    />
                  </Col>
                </Row>
              </Col>

              <button
                id="confirm-button"
                type="submit"
                className={isDisable() ? "disabled" : "able"}
              >
                Confirm
              </button>
            </form>
          </Row>
        );
      }}
    ></Form>
  );
};

export default CustomerForm;
