import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Sider from "../../componentDashboard/sider/Sider";
import Footer from "../../componentDashboard/footer/Footer";
import HomeContainer from "../../containerDashboard/HomeContainer";
import Header from "../../componentDashboard/header/Header";

class Dashboard extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout className="site-layout">
          <Header />
          <HomeContainer />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
