import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Footer from "../footer/Footer";
import Content from "../content/Content";
const SiteLayoutDash = () => {
  return (
    <Layout className="site-layout">
      <Content />
      <Footer />
    </Layout>
  );
};

export default SiteLayoutDash;
