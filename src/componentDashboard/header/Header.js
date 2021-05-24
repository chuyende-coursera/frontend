import React from "react";
import { Layout, Typography } from "antd";
import "antd/dist/antd.css";
import "./header.css";
const { Text } = Typography;

const { Header } = Layout;

const HeaderDash = () => {
  return (
    <Header
      className="site-layout-background bg-gradient"
      style={{ padding: 0 }}
    >
      <h3 className="headerDash text-center align-middle">Dashboard</h3>
    </Header>
  );
};

export default HeaderDash;
