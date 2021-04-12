import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

const MenuDash = (props) => {
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <SubMenu key="sub1" icon={<UserOutlined />} title="Quản lý khóa học">
        <Menu.Item key="3">
          <Link to={`/dashboard/category/courses`}>Quản lý nội dung</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to={`/dashboard/category/weeks`}>Quản lý tuần khóa học</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MenuDash;
