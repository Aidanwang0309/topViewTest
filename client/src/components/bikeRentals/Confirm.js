import React, { useContext, useRef, Fragment } from "react";
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
      title: "Type",
      key: "type",
      dataIndex: "type"
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    }
  ];

  const data = () => {
    let data = [];
    let totalPrice = 0;
    products.map(product => {
      const { productId, productName, price, quantity, type } = product;
      const item = {
        key: productId,
        name: productName,
        type: type,
        quantity: quantity,
        price: price
      };
      totalPrice = totalPrice + price * quantity;
      data.push(item);
    });
    totalRef.current = Number.parseFloat(totalPrice).toFixed(2);
    return data;
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Confirm;
