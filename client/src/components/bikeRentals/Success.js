import React from "react";
import { Result, Button } from "antd";
import { withRouter } from "react-router-dom";

const Success = props => {
  return (
    <Result
      status="success"
      title="Successfully Purchased!"
      subTitle="Order number: 2017182818828182881 Please show you order number to the frondesk."
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={() => props.history.push("/")}
        >
          Go Console
        </Button>,
        <Button key="buy" onClick={() => props.history.push("/")}>
          Buy Again
        </Button>
      ]}
    />
  );
};

export default withRouter(Success);
