/* eslint-disable react/prop-types */
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import DropdownExplore from "../button/Dropdown";
import { Menu, Dropdown } from "antd";
import cookie from "js-cookie";
import {
  ShoppingCartOutlined,
  BellOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import * as actionTypes from "../../actions/actionTypes";

const authenticated = cookie.get("AUTHENTICATED");
class Header extends Component {
  state = {
    topics: [],
  };
  componentDidMount() {
    this.props.requestTopics();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.topics) {
      this.setState({
        topics: nextProps.topics,
      });
    }
  }
  render() {
    const fontSizeIcon = { fontSize: "32px" };
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="http://www.alipay.com/">Khóa học của bạn</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="http://www.taobao.com/">Trang cá nhân</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          key="3"
          onClick={() => {
            console.log("logout: ");
            this.props.requestLogoutUser();
          }}
        >
          <a href="/">Đăng xuất</a>
        </Menu.Item>
      </Menu>
    );

    console.log("cookie.get ");
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <Link className="navbar-brand respon-toggle" to="/">
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICB3aWR0aD0iMTA4cHgiIGhlaWdodD0iMTdweCIgdmlld0JveD0iMCAwIDEwOCAxNyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTA4IDE3IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0iIzRhODlkYyIgZD0iTTU0LjI4MSw1Ljc3M2MwLjA2Ni0xLjI2OSwwLjUyMS0yLjMwNiwxLjIzMi0zLjExNVYxLjU4aC0wLjk0NWMtMS45MSwwLTMuNTI3LDAuNzMyLTQuNDY3LDIuMzg2aC0wLjA1NQogIFYxLjc2MmgtNC44OTl2MTMuNDQxaDQuOVY5Ljc3N2MwLTIuMzAzLDAuNjc0LTQuMDU5LDMuMzkzLTQuMDU5QzUzLjczNiw1LjcyLDU0LjAxMyw1LjczNyw1NC4yODEsNS43NzN6Ii8+CjxwYXRoIGZpbGw9IiM0YTg5ZGMiIGQ9Ik05MS4zOCw1LjcyNGMwLjQwNy0xLjE4OCwxLjA2Ny0yLjI0NiwxLjkyNS0zLjA5NXYtMS4wNWgtMC45NDNjLTEuOTExLDAtMy41MjYsMC43MzItNC40NzEsMi4zODVoLTAuMDUzCiAgVjEuNzYyaC00LjkwMnYxMy40NDFoNC45MDJWOS43NzdjMC0yLjMwMywwLjY3Ni00LjA1OSwzLjM5NS00LjA1OUw5MS4zOCw1LjcyNHoiLz4KPHBhdGggZmlsbD0iIzRhODlkYyIgZD0iTTY0LjIzMiw1LjIyYy0wLjc1Ni0wLjM5My0xLjgwOC0wLjY1NS0yLjY0NS0wLjY1NWMtMC41NjIsMC0xLjUzMywwLjIzNC0xLjUzMywwLjkxNwogIGMwLDAuOTE4LDEuNTMzLDEuMDQ4LDIuMjExLDEuMTgyYzIuMjg0LDAuNDQ0LDQuMDEyLDEuNDkzLDQuMDEyLDMuOTc5YzAsMy41MzYtMy4zMTMsNS4wMDgtNi41Miw1LjAwOAogIGMtMS45NjcsMC0zLjkwMi0wLjU1MS01LjU3NC0xLjU0N2wxLjc3Ny0zLjMzYzAuOTk1LDAuNjg0LDIuNjY1LDEuMzYzLDMuODc3LDEuMzYzYzAuNjIsMCwxLjUzNS0wLjI4NywxLjUzNS0xLjAyMQogIGMwLTEuMDQ4LTEuNTM1LTEuMTAzLTMuMDcyLTEuNDk1Yy0xLjUzMy0wLjM5My0zLjA2Ni0xLjEyNS0zLjA2Ni0zLjUzNmMwLTMuMzAyLDMuMDY2LTQuNzY3LDYuMDg4LTQuNzY3CiAgYzEuNTYyLDAsMy4xMjUsMC4yMzUsNC41NDksMC44NjRMNjQuMjMyLDUuMjJ6Ii8+CjxwYXRoIGZpbGw9IiM0YTg5ZGMiIGQ9Ik0xMDgsMTUuMjAzaC00Ljl2LTEuNDk1aC0wLjA1NGMtMC44NjIsMS4zMzYtMi41NjIsMS45MzgtNC4xNzUsMS45MzhjLTQuMDk2LDAtNi45NzUtMy4zMjgtNi45NzUtNy4xOAogIGMwLTMuODQ4LDIuODI4LTcuMTUxLDYuOTItNy4xNTFjMS41ODgsMCwzLjI2LDAuNTc2LDQuMjgzLDEuNzU0VjEuNzYyaDQuODk5TDEwOCwxNS4yMDNMMTA4LDE1LjIwM3ogTTk2Ljk1OSw4LjQ5NQogIGMwLDEuNzAyLDEuMTYsMy4wMTIsMy4xNSwzLjAxMmMxLjk5MiwwLDMuMTQ3LTEuMzA4LDMuMTQ3LTMuMDEyYzAtMS42NTEtMS4xNTUtMy4wMzktMy4xNDctMy4wMzkKICBDOTguMTE5LDUuNDU3LDk2Ljk1OSw2Ljg0NCw5Ni45NTksOC40OTV6Ii8+CjxwYXRoIGZpbGw9IiM0YTg5ZGMiIGQ9Ik04Mi4xNjMsOS4yODNINzEuODQ2YzAsMS45MzcsMS4wNTMsMi45ODQsMy4wNzIsMi45ODRjMS4wNSwwLDEuODAzLTAuMzM5LDIuMzQzLTEuMjMxaDQuNzE0CiAgYy0wLjc4MSwzLjE3MS0zLjg3OSw0LjYxMi03LjAyOSw0LjYxMmMtNC41NzUsMC03Ljk5NS0yLjUxNy03Ljk5NS03LjE1MmMwLTQuNDgsMy4xNDctNy4xNzgsNy42NDQtNy4xNzgKICBjNC43OTMsMCw3LjU3LDIuODgzLDcuNTcsNy40NjZMODIuMTYzLDkuMjgzTDgyLjE2Myw5LjI4M3ogTTc3LjYxMSw2LjUzYy0wLjI0My0xLjI4NC0xLjQ1NS0yLjEyMi0yLjc3My0yLjEyMgogIGMtMS40MjksMC0yLjYwOSwwLjczMS0yLjkxLDIuMTIySDc3LjYxMXoiLz4KPGc+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSIjNGE4OWRjIiBkPSJNMjkuNTYxLDguMjYxYy0wLjAwNS0wLjExNi0wLjAxMy0wLjIyOS0wLjAyMi0wLjM0NGMwLDAsMC0wLjAwMSwwLTAuMDAyYzAsMCwwLTAuMDAxLDAtMC4wMDIKICAgICAgYy0wLjExLTEuMjQ3LTAuNTIyLTIuNDE0LTEuMjIxLTMuNDY4Yy0wLjMxMi0wLjQ3LTAuNjY5LTAuODk3LTEuMDY4LTEuMjhjLTAuNTgzLTAuNTYxLTEuMjU4LTEuMDI1LTIuMDE5LTEuMzkyCiAgICAgIGMtMS4xNDUtMC41NDctMi40MS0wLjgyMy0zLjc2LTAuODIzYy0wLjEzMiwwLTAuMjcsMC4wMDItMC40MDksMC4wMDdDMjAuMTE0LDEsMTkuMTk3LDEuMTgsMTguMzM1LDEuNDk3CiAgICAgIGMtMC44NjksMC4zMTQtMS42MjYsMC43MjktMi4yNDUsMS4yMjdjLTAuMTI2LDAuMS0wLjI2MywwLjIyMy0wLjQxLDAuMzU4bC0wLjEwNiwwLjEwNEwxNS40MjksMy4zNGgwLjAwMWgwLjAwMWwtMC4wNjgsMC4wNjcKICAgICAgTDE1LjMzLDMuNDQzbC0wLjE3MywwLjE4MmMtMC4xMjgsMC4xNDQtMC4yNSwwLjI4OC0wLjM2NCwwLjQyOWwtMC4wMDEtMC4wMDJsLTAuMDA0LTAuMDA0Yy0wLjIzNywwLjI4OC0wLjQ1NiwwLjU4Ni0wLjYxNywwLjg1NAogICAgICBjLTAuMTA5LDAuMTcyLTAuMjE2LDAuMzQ5LTAuMzE4LDAuNTI2TDEyLjQ0LDguMjg1bDAuMDAyLDAuMDAybC0wLjA3NCwwLjE0NWwtMC4xNTYsMC4zMTZjLTAuMzEsMC42MjctMC42NDIsMS4yNTItMS4wMTMsMS43NjgKICAgICAgYy0wLjgyNywwLjkwNy0xLjc2MiwxLjM1MS0yLjk2NCwxLjM1MWMtMC4wODQsMC0wLjE3LTAuMDA0LTAuMjU4LTAuMDA5Yy0wLjcyNC0wLjAyOS0xLjM0NS0wLjItMS44OTYtMC41MjYKICAgICAgYy0wLjA1OS0wLjAzNS0wLjExNi0wLjA3MS0wLjE3MS0wLjEwOGMtMC40NS0wLjI5OS0wLjc5NS0wLjY4My0xLjA1My0xLjE2MmMtMC4yOTEtMC41NDMtMC40Mi0xLjA5OC0wLjQwMi0xLjY4NgogICAgICBDNC40NTYsOC4zNiw0LjQ1Nyw4LjM0Niw0LjQ1Nyw4LjMzM0M0LjQ5Niw3LjM5Nyw0Ljg1Myw2LjY2OSw1LjU3Miw2LjA0QzUuNzQ3LDUuODg5LDUuOTMsNS43NjEsNi4xMjEsNS42NDcKICAgICAgYzAuMDI3LTAuMDE2LDAuMDU0LTAuMDMxLDAuMDgxLTAuMDQ1YzAuNTM0LTAuMjkxLDEuMTQyLTAuNDM2LDEuODM5LTAuNDM2bDAuMjE3LDAuMDA2QzkuMzY1LDUuMjE0LDEwLjIxOSw1LjU2LDEwLjksNi4yMzUKICAgICAgTDEzLjAzNiwyLjRjLTAuNTExLTAuMzQyLTEuMDg4LTAuNjM2LTEuNzI0LTAuODc1Yy0wLjAyNC0wLjAwOS0wLjA0OS0wLjAxOS0wLjA3NC0wLjAyN2MtMC4wNzYtMC4wMjctMC4xNTEtMC4wNTUtMC4yMjktMC4wOAogICAgICBDMTAuMzMzLDEuMTkyLDkuNjI0LDEuMDUzLDguODk0LDAuOTlsMCwwQzguODc2LDAuOTg3LDguODU2LDAuOTg1LDguODM4LDAuOTgzQzguNzI2LDAuOTc2LDguNjEyLDAuOTYyLDguNSwwLjk1NwogICAgICBDOC4zNzgsMC45NTIsOC4yNTUsMC45NSw4LjEzNSwwLjk0OUg4LjA2NmMtMS4zNDMsMC4wMDUtMi41OTEsMC4yOC0zLjczMiwwLjgyNUMzLjA1NiwyLjM5LDIuMDIsMy4yODcsMS4yNTIsNC40NDMKICAgICAgQzAuNDg2LDUuNTk5LDAuMDY4LDYuODgyLDAuMDA4LDguMjU5QzAuMDAzLDguMzc3LDAsOC40OTQsMCw4LjYwOWMtMC4wMDEsMS45MjYsMC43MDEsMy42MiwyLjA5Nyw1LjA0MgogICAgICBjMS40NTcsMS40OTIsMy4zNTIsMi4yOTYsNS42MjcsMi4zOTFjMC4xNDYsMC4wMDYsMC4yOSwwLjAxLDAuNDM0LDAuMDFjMS4yODcsMCwyLjQ3OC0wLjIyOSwzLjU0Ni0wLjY4NwogICAgICBjMC4yNjctMC4xMTQsMC41MjYtMC4yNDgsMC43OTEtMC4zOTdjMC4xNDQtMC4wODMsMC4yOC0wLjE3MSwwLjQxNS0wLjI2NWwwLjEtMC4wNjdsMC4xNjgtMC4xMTUKICAgICAgYzAuMjAyLTAuMTQ1LDAuMzkxLTAuMzAyLDAuNTc1LTAuNDY5bDAuMDY0LTAuMDYxYzAuMTA4LTAuMTAzLDAuMjE2LTAuMjA3LDAuMzE4LTAuMzE0bDAuMzgzLTAuNDMzbDAuMTQ2LTAuMTgzbDAuMDY4LTAuMQogICAgICBsMC4wNjgtMC4wOThjMC41NjktMC45NTYsMi40MjEtNC40MzUsMi40MjEtNC40MzVWOC40MjFsMC4xMS0wLjIxMmwwLjA5Mi0wLjE2NmMwLjI3My0wLjQ5NywwLjQ3LTAuODUsMC43MzEtMS4yMjFsMC4wMDctMC4wMTEKICAgICAgYzAuNjA5LTAuODgzLDEuNjU2LTEuNTEyLDIuODktMS42MThjMi4wNy0wLjE3OCwzLjg4NCwxLjE4Miw0LjA1MSwzLjAzOGMwLjE2NiwxLjg1Ni0xLjM3OCwzLjUwNS0zLjQ0OCwzLjY4NAogICAgICBjLTAuNDMxLDAuMDM3LTAuODUsMC4wMDgtMS4yNDUtMC4wNzlsLTAuMDEsMC4wMDRjLTEuNTE5LTAuMzE2LTIuNDg2LTEuNDI0LTIuOTYzLTEuOTE5bC0xLjk5MiwzLjY2MwogICAgICBjMCwwLDAuNjE5LDAuNjI0LDEuMDQzLDAuOTM2YzAuNDI1LDAuMzExLDAuOTc0LDAuNjE3LDEuNDEyLDAuODA3YzEuMDYzLDAuNDU0LDIuMjE5LDAuNzI2LDMuNDk2LDAuNzI2CiAgICAgIGMwLjE0OCwwLDAuMTE4LDAsMC4yNzItMC4wMDZjMi4yNzMtMC4wOTUsNC4yOTktMC45NjYsNS43Ni0yLjQ1OGMxLjM4NC0xLjQxNywyLjEzNS0zLjAzNSwyLjE0Mi00Ljk1VjguNTgyCiAgICAgIEMyOS41NjgsOC40NzYsMjkuNTY1LDguMzY5LDI5LjU2MSw4LjI2MXoiLz4KICA8L2c+CjwvZz4KPGc+CiAgPHBhdGggZmlsbD0iIzRhODlkYyIgZD0iTTM3LjE4MSwxNS42NTdjLTEuMDMzLDAtMS45Ny0wLjEyLTIuODExLTAuMzZjLTAuODQxLTAuMjQtMS41NTktMC42MTktMi4xNTQtMS4xMzkKICAgIGMtMC41OTctMC41Mi0xLjA1Ny0xLjE4Mi0xLjM4MS0xLjk4NXMtMC40ODYtMS43NzEtMC40ODYtMi44OTlWMS43NTloNC43Mjd2Ny40NTVjMCwwLjg0NSwwLjIwMiwxLjQ1NywwLjYwNSwxLjgzOQogICAgYzAuNDA0LDAuMzgzLDAuOTE3LDAuNTc0LDEuNTM5LDAuNTc0YzAuNjM2LDAsMS4xNTItMC4xNzgsMS41NS0wLjUzNWMwLjM5Ni0wLjM1NywwLjU5Ni0wLjk0OSwwLjU5Ni0xLjc4MVYxLjc1OWg0LjcyN3Y3LjQxNgogICAgYzAsMS4xNjgtMC4xNjYsMi4xNjEtMC40OTcsMi45NzhjLTAuMzMxLDAuODE4LTAuNzk4LDEuNDg2LTEuMzk5LDIuMDA2Yy0wLjYwNCwwLjUyLTEuMzMxLDAuODk4LTIuMTg2LDEuMTM5CiAgICBDMzkuMTU2LDE1LjUzNywzOC4yMTMsMTUuNjU3LDM3LjE4MSwxNS42NTd6Ii8+CjwvZz4KPC9zdmc+"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <DropdownExplore
                topics={this.state.topics}
                requestCourses={this.props.requestCourses}
              />
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control rounded-0"
                    type="search"
                    placeholder="What do you want to learn?"
                    aria-label="Search"
                  ></input>
                  <button
                    className="btn btn-primary my-2 rounded-0"
                    type="submit"
                  >
                    <SearchOutlined />
                  </button>
                </form>
              </li>
            </ul>

            <ul className="navbar-nav ">
              <li className="nav-item mr-3">
                <Link className="nav-link" to="/myCourse">
                  My Course<span className="sr-only">(current)</span>
                </Link>
              </li>
              {authenticated !== actionTypes.AUTHENTICATED ? (
                <Fragment>
                  <li className="nav-item active mr-3 text-primary">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="btn btn-primary btn-sm nav-link "
                      to="/login"
                    >
                      Join for Free
                    </Link>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className="nav-item mr-3">
                    <Link className="nav-link" to="/cart">
                      <ShoppingCartOutlined style={fontSizeIcon} />
                    </Link>
                  </li>
                  <li className="nav-item mr-3">
                    <Link className="nav-link" to="/notify">
                      <BellOutlined style={fontSizeIcon} />
                    </Link>
                  </li>

                  <li className="nav-item mr-3">
                    <Dropdown
                      className="nav-link"
                      overlay={menu}
                      trigger={["click"]}
                    >
                      <div className="ant-dropdown-link mr-4">
                        <UserOutlined style={fontSizeIcon} />
                      </div>
                    </Dropdown>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Header;
