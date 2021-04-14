import React from "react";
import { Layout, Avatar, Badge } from "antd";
import MenuDash from "../menu/Menu";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
// const onCollapse = (collapsed) => {
//   console.log(collapsed);
//   this.setState({ collapsed });
// };
const { Sider } = Layout;

const SiderDash = () => {
  return (
    <Sider collapsible>
      <div className="logo text-center">
        <span className="avatar-item">
          <Badge count={1}>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </span>
      </div>
      <MenuDash />
    </Sider>
  );
};

export default SiderDash;
