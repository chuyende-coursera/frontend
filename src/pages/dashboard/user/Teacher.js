import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import Sider from "../../../componentDashboard/sider/Sider";
import Footer from "../../../componentDashboard/footer/Footer";
import TeacherContainer from "../../../containerDashboard/user/TeacherContainer";
import Header from "../../../componentDashboard/header/Header";

class UserDash extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout className="site-layout">
          <Header />
          <TeacherContainer />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default UserDash;
