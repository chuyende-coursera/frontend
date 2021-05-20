import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import Sider from "../../../componentDashboard/sider/Sider";
import Footer from "../../../componentDashboard/footer/Footer";
import ReviewContainer from "../../../containerDashboard/inventory/ReviewContainer";
import Header from "../../../componentDashboard/header/Header";

class UserDash extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout className="site-layout">
          <Header />
          <ReviewContainer />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default UserDash;
