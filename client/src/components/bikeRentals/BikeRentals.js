import React, { useContext, useEffect, Fragment, useState } from "react";
import BikeRentalsContext from "../../context/bikeRentals/bikeRentalsContext";
import SelectCard from "../layout/SelectCard";
import { Steps, Button, message } from "antd";
import Confirm from "./Confirm";
import { withRouter } from "react-router-dom";
// import { Tabs } from "antd";
import _ from "lodash";
import uuid from "uuid";
import CustomerForm from "../layout/CustomerForm";

const BikeRentals = props => {
  const bikeRentalsContext = useContext(BikeRentalsContext);
  const { bikeRentalsData, postSelections } = bikeRentalsContext;
  const [current, setCurrent] = useState(0);
  const initialOrder = {
    orderId: "",
    customerInfo: {},
    rentalInfo: []
  };
  const [order, setOrder] = useState(initialOrder);
  const [submit, setSubmit] = useState(0);
  const { Step } = Steps;

  useEffect(() => {
    onSubmit();
  }, [submit]);

  const steps = [
    {
      title: "Choose Bikes"
    },
    {
      title: "Choose Accessories"
    },
    {
      title: "Choose Addons"
    },
    {
      title: "Confirm"
    }
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onSubmit = () => {
    if (submit === 1) {
      console.log(order);
      postSelections(order);
      setOrder(initialOrder);
      props.history.push("./success");
    }
  };

  const handleForm = values => {
    setOrder({ ...order, orderId: uuid.v4(), customerInfo: values });
    setSubmit(1);
  };

  const handleSelect = (productId, productName, price, type, quantity) => {
    let Info = order.rentalInfo;
    if (quantity > 0) {
      const rentalItem = {
        productId: productId,
        productName: productName,
        price: price,
        type: type,
        quantity: quantity
      };
      if (!_.find(Info, { productId: productId })) {
        //if product doesn't exist, then push ro array
        setOrder({ ...order, rentalInfo: [...order.rentalInfo, rentalItem] });
      } else {
        //if product exist, update the product quantity
        let index = _.findIndex(Info, { productId: productId });
        Info.splice(index, 1, rentalItem);
        setOrder({ ...order, rentalInfo: Info });
      }
    } else if (quantity === 0) {
      _.remove(order.rentalInfo, { productId: productId });
      setOrder({
        ...order,
        rentalInfo: order.rentalInfo
      });
    }
  };

  const renderSwitch = () => {
    switch (current) {
      case 0:
        return (
          <div>
            <h1 style={{ textAlign: "center" }}> Please Choose Bikes</h1>
            <div style={FlexContainer}>
              {bikeRentalsData.map(bikeRental => {
                const { id, name, price, image, product_type } = bikeRental;
                if (product_type === "bike") {
                  return (
                    <SelectCard
                      key={id}
                      id={id}
                      name={name}
                      price={price}
                      image={image}
                      product_type={product_type}
                      onSelect={handleSelect}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h1 style={{ textAlign: "center" }}> Please Choose Accessories</h1>
            <div style={FlexContainer}>
              {bikeRentalsData.map(bikeRental => {
                const { id, name, price, image, product_type } = bikeRental;
                if (product_type === "accessory") {
                  return (
                    <SelectCard
                      key={id}
                      id={id}
                      name={name}
                      price={price}
                      image={image}
                      product_type={product_type}
                      onSelect={handleSelect}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h1 style={{ textAlign: "center" }}> Please Choose Addons</h1>
            <div style={FlexContainer}>
              {bikeRentalsData.map(bikeRental => {
                const { id, name, price, image, product_type } = bikeRental;
                if (product_type === "addon") {
                  return (
                    <SelectCard
                      key={id}
                      id={id}
                      name={name}
                      price={price}
                      image={image}
                      product_type={product_type}
                      onSelect={handleSelect}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      case 3:
        return (
          <Fragment>
            <Confirm products={order.rentalInfo} />
            <CustomerForm handleForm={handleForm} products={order.rentalInfo} />
          </Fragment>
        );
    }
  };

  return (
    <div style={{ width: "90%", margin: "0 auto", paddingTop: "3rem" }}>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content" style={{ paddingTop: "2rem" }}>
        {renderSwitch()}
      </div>
      <div
        className="steps-action"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {current > 0 && (
          <Button size="large" onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            size="large"
            type="primary"
            style={{ marginLeft: "2rem" }}
            onClick={() => next()}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <span style={{ width: "90px", marginLeft: "2rem" }}></span>
        )}
      </div>
    </div>
  );
};

const FlexContainer = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center"
};

export default withRouter(BikeRentals);
