import React, { useState, useEffect } from "react";
import { Card, Icon, Avatar } from "antd";
import { Divider } from "antd";
import { Badge } from "antd";

const SelectCard = props => {
  const { Meta } = Card;
  const { id, name, price, image, product_type, onSelect } = props;
  const [value, setValue] = useState(0);

  useEffect(() => {
    onSelect(id, value);
  }, [value]);

  const MyIcon = ({ disabled, ...props }) => {
    return (
      <Icon className={disabled ? "disabled-click" : undefined} {...props} />
    );
  };

  const handleClick = (id, type) => {
    if (value === 0 && type === "minus") return;
    type === "plus" ? setValue(value + 1) : setValue(value - 1);
  };

  return (
    <Card
      style={{ width: 300, margin: "3rem", position: "relative" }}
      cover={<img alt="example" src={image} />}
      actions={[
        <MyIcon
          disabled={value <= 0}
          onClick={() => handleClick(id, "minus")}
          type="minus"
          key="minus"
        />,
        <MyIcon
          disabled={false}
          onClick={() => handleClick(id, "plus")}
          type="plus"
          key="plus"
        />
      ]}
    >
      <Meta title={name} />
      <Badge
        count={value}
        style={{
          backgroundColor: "#52c41a",
          boxShadow: "0 0 0 1px #d9d9d9 inset",
          position: "absolute",
          top: "-6rem",
          left: "12rem",
          transform: "scale(1.5)"
        }}
      ></Badge>
      <Divider orientation="right">${price}</Divider>
    </Card>
  );
};

export default SelectCard;
