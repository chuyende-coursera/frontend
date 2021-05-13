import React, { Fragment } from "react";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button, Select } from "antd";
import viMessage from "../../locales/vi";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Signin = ({ requestUserCourse }) => {
  const onFinish = (values) => {
    requestUserCourse(values);
  };

  return (
    <Fragment>
      <h3 className="text-center">Đăng kí tài khoản</h3>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="name"
          label="Họ và tên"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="mobile"
          label="Số điện thoại"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="sex"
          label="Giới tính"
          rules={[
            {
              required: true,
              message: viMessage["app.user.gender"],
            },
            {
              type: "string",
              message: viMessage["app.user.validate.gender"],
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Chọn Giới tính"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="1">Nam</Option>
            <Option value="2">Nữ</Option>
            <Option value="3">Không xác định</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="age"
          label="Tuổi"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};
export default Signin;
