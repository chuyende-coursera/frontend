import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import Sider from "../../../componentDashboard/sider/Sider";
import Footer from "../../../componentDashboard/footer/Footer";
import AddWeekContainer from "../../../containerDashboard/week/AddWeekContainer";
import Header from "../../../componentDashboard/header/Header";

class CourseDash extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout className="site-layout">
          <Header />
          <AddWeekContainer />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default CourseDash;
