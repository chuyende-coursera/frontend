import React, { useState, Fragment } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import cookie from "js-cookie";
import {
  PlayCircleOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

function MenuDash(props) {
  const [role, setRole] = useState(cookie.get("role"));
  console.log("role: ", role);
  return (
    <Fragment>
      {role === "admin" || role === "teacher" ? (
        <Menu theme="dark" mode="inline">
          <SubMenu
            key="sub1"
            icon={<PlayCircleOutlined />}
            title="Quản lý khóa học"
          >
            <Menu.Item key="1">
              <Link to={`/dashboard/category/courses`}>Quản lý tổng quan</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={`/dashboard/category/weeks`}>
                Quản lý nội dung tuần học
              </Link>
            </Menu.Item>
          </SubMenu>
          {role === "admin" ? (
            <SubMenu
              key="sub2"
              icon={<UserOutlined />}
              title="Quản lý người dùng hệ thống"
            >
              <Menu.Item key="3">
                <Link to={`/dashboard/category/users`}>
                  Quản lý người đăng kí
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={`/dashboard/category/teachers`}>
                  Quản lý Giáo Viên
                </Link>
              </Menu.Item>
            </SubMenu>
          ) : null}
          {role === "admin" ? (
            <SubMenu key="sub3" icon={<DollarCircleOutlined />} title="Kiểm kê">
              <Menu.Item key="5">
                <Link to={`/dashboard/category/revenues`}>
                  Quản lý doanh thu
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to={`/dashboard/category/reviews`}>Quản lý đánh giá</Link>
              </Menu.Item>
            </SubMenu>
          ) : null}
        </Menu>
      ) : null}
    </Fragment>
  );
}

export default MenuDash;
