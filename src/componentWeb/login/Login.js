/* eslint-disable react/prop-types */
import React from "react";
import "antd/dist/antd.css";
import "./login.css";
import viMessage from "../../locales/vi";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = ({ authenticateUser }) => {
  const onFinishFailed = (errorInfo) => {
    "Failed:", errorInfo;
  };
  // debugger;
  // ("authenticated, session: ", authenticated, session);
  return (
    <div className="mg-bm">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={authenticateUser}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: viMessage["app.user.userName"],
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: viMessage["app.user.validate.passwordrequired"],
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
          <Button type="outline">
            <Link to="/signin">Đăng Kí</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
