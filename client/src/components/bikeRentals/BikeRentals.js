import React, { useContext, useEffect, Fragment, useState } from "react";
import BikeRentalsContext from "../../context/bikeRentals/bikeRentalsContext";
import SelectCard from "../layout/SelectCard";
import { Steps, Button, message } from "antd";
import Confirm from "./Confirm";
import { withRouter } from "react-router-dom";
// import { Tabs } from "antd";
import _ from "lodash";

const BikeRentals = props => {
  const bikeRentalsContext = useContext(BikeRentalsContext);
  const { bikeRentalsData, postSelections } = bikeRentalsContext;
  const [current, setCurrent] = useState(0);
  const [selections, setSelections] = useState({});
  const { Step } = Steps;

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
    postSelections(selections);
    setSelections({});
    props.history.push("/success");
  };

  const handleSelect = (id, value) => {
    // console.log(id);
    if (value > 0) setSelections({ ...selections, [id]: value });
    if (value === 0) setSelections(_.omit(selections, id));
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
        return <Confirm products={selections} />;
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
          <Button
            style={{ marginLeft: "2rem" }}
            size="large"
            type="primary"
            onClick={() => onSubmit()}
          >
            Confirm
          </Button>
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
