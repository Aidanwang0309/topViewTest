import React, { useContext, useEffect, useState, useRef } from "react";
import BikeRentalsContext from "../../context/bikeRentals/bikeRentalsContext";
import { Table, Divider, Tag } from "antd";
import _ from "lodash";
const Confirm = props => {
  const bikeRentalsContext = useContext(BikeRentalsContext);
  const { bikeRentalsData } = bikeRentalsContext;
  const { products } = props;
  //   const [total, setTotal] = useState(0);
  const totalRef = useRef(0);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: text => <a>{text}</a>
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity"
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type"
    }
  ];

  const data = () => {
    let data = [];
    let totalPrice = 0;
    _.keys(products).map(productId => {
      const productInfo = _.filter(
        bikeRentalsData,
        product => product.id == productId
      );
      const item = {
        key: productInfo[0].id,
        name: productInfo[0].name,
        price: productInfo[0].price,
        quantity: [products[productId]],
        type: productInfo[0].product_type
      };
      totalPrice = totalPrice + productInfo[0].price * [products[productId]];
      data.push(item);
    });
    totalRef.current = totalPrice;
    return data;
  };

  return (
    <Table
      style={{ overflow: "hidden" }}
      columns={columns}
      dataSource={data()}
      footer={() => (
        <div style={{ textAlign: "right" }}>
          Total Price : {totalRef.current}
        </div>
      )}
    />
  );
};

export default Confirm;
