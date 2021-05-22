import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import Sider from "../../../componentDashboard/sider/Sider";
import Footer from "../../../componentDashboard/footer/Footer";
import UpdateCourseContainer from "../../../containerDashboard/course/UpdateCourseContainer";
import Header from "../../../componentDashboard/header/Header";

class CourseDash extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout className="site-layout">
          <Header />
          <UpdateCourseContainer {...this.props} />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default CourseDash;
