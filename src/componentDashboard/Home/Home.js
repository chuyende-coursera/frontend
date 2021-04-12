import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
const { Content } = Layout;
function ContentDash() {
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        HomePage Dashboard
      </div>
    </Content>
  );
}

export default ContentDash;