import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Sider from "../sider/Sider";
import SiteLayout from "../siteLayout/SiteLayout";

const LayoutDash = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <SiteLayout />
    </Layout>
  );
};

export default LayoutDash;
