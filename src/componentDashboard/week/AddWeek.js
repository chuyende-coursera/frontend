import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import viMessage from "../../locales/vi";
import * as actionTypes from "../../actions/actionTypes";
import cookie from "js-cookie";
import axios from "axios";
import {
  Upload,
  Form,
  notification,
  Input,
  Select,
  Button,
  Row,
  InputNumber,
  Col,
} from "antd";
const { TextArea } = Input;
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 4,
    },
    sm: {
      span: 0,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 12,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function AddWeek(props) {
  console.log("props:", props);
  let pathName = [];
  const { requestCoursesDash, courses, requestCreateWeeksDash, weeks } = props;
  useEffect(() => {
    requestCoursesDash();
  }, [requestCoursesDash]);

  const onFinish = (values) => {
    values.videoWeeks = values.videoWeeks
      ? values.videoWeeks.map((videoWeek, index) => {
          console.log("videoWeek: ", videoWeek);
          console.log("index: ", index);
          return {
            ...videoWeek,
            orderVideo: index + 1,
            videoUrl: pathName[index],
          };
        })
      : [];
    requestCreateWeeksDash(values);
  };

  const dummyRequest = (file) => {
    const formData = new FormData();

    formData.append("myFiles", file.file);
    return fetch("http://localhost:6868/api/upload/uploadfile", {
      method: "POST",
      headers: {
        "x-auth-key": cookie.get("token"),
      },
      body: formData,
    })
      .then(async (res) => {
        const result = await res.json();
        pathName.push(result.path);
        console.log("pathName: ", pathName);
        notification["success"]({
          message: "Upload file thành công!",
          description: "",
        });
      })
      .catch((error) => {
        console.log(error);
        notification["error"]({
          message: "Upload file thất bại!",
          description: "",
        });
      });
  };

  const [form] = Form.useForm();

  return (
    <div className="container mt-4 pr-4">
      <h3>Thêm Tuần Học</h3>
      <Form
        {...formItemLayout}
        form={form}
        name="week"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="timeComplete"
          label="Thời gian học của tuần"
          rules={[
            {
              type: "integer",
              message: viMessage["app.weeks.validate.timeComplete"],
            },
            {
              required: true,
              message: viMessage["app.weeks.timeComplete"],
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="header"
          label="Tiêu Đề"
          rules={[
            {
              required: true,
              message: viMessage["app.weeks.header"],
            },
            {
              type: "string",
              message: viMessage["app.weeks.validate.header"],
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Miêu tả"
          rules={[
            {
              type: "string",
              message: viMessage["app.weeks.validate.description"],
            },
            {
              required: true,
              message: viMessage["app.weeks.description"],
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="coursesId"
          label="Khóa học"
          rules={[
            {
              required: true,
              message: viMessage["app.courses.addCourse"],
            },
            {
              type: "string",
              message: viMessage["app.courses.validate.language"],
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Chọn Khóa học"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {courses.map((course) => (
              <Option key={course.id} value={course.id}>
                {course.title}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.List name="videoWeeks">
          {(fields, { add, remove }) => {
            return (
              <Row className="ml-3">
                {fields.map((field, index) => (
                  <Col span={6} key={field.key}>
                    <Form.Item name={[field.name, "videoHeader"]}>
                      <Input
                        placeholder="Tiêu Đề Video"
                        style={{ width: "80%" }}
                      />
                    </Form.Item>

                    <Form.Item name={[field.name, "orderVideo"]}>
                      <Input
                        placeholder="Thư tự video"
                        style={{ width: "80%" }}
                        disabled={true}
                        value={field.key + 1}
                        defaultValue={parseInt(field.key) + 1}
                      />
                    </Form.Item>

                    <Form.Item name={[field.name, "videoUrl"]}>
                      <Upload
                        style={{ width: "80%" }}
                        name="myFiles"
                        customRequest={dummyRequest}
                      >
                        <Button>
                          <UploadOutlined /> Upload Video
                        </Button>
                      </Upload>
                    </Form.Item>

                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      style={{ margin: "0 8px", size: "32px" }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Col>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                  >
                    <PlusOutlined /> Video
                  </Button>
                </Form.Item>
              </Row>
            );
          }}
        </Form.List>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Add Week
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddWeek;
