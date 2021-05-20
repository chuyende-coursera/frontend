import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import Sider from "../../../componentDashboard/sider/Sider";
import Footer from "../../../componentDashboard/footer/Footer";
import RevenueContainer from "../../../containerDashboard/inventory/RevenueContainer";
import Header from "../../../componentDashboard/header/Header";

class UserDash extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout className="site-layout">
          <Header />
          <RevenueContainer />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default UserDash;
