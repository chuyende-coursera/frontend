import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import Sider from "../../../componentDashboard/sider/Sider";
import Footer from "../../../componentDashboard/footer/Footer";
import WeekContainer from "../../../containerDashboard/week/WeekContainer";
import Header from "../../../componentDashboard/header/Header";

class CourseDash extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout className="site-layout">
          <Header />
          <WeekContainer />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default CourseDash;
