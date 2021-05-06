import React from "react";
import "antd/dist/antd.css";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const CartSuccess = () => {
  return (
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2020182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          <a href="/mycourse">My Course</a>
        </Button>,
        <Button key="buy">
          <a href="/browser">Buy Again</a>
        </Button>,
      ]}
    />
  );
};

export default CartSuccess;
