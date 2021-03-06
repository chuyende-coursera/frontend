import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import viMessage from "../../locales/vi";
import * as actionTypes from "../../actions/actionTypes";
import cookie from "js-cookie";
import history from "../../store/history";

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
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
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
    console.log("value: ", values);
    requestCreateWeeksDash(values);
  };

  const dummyRequest = (file) => {
    console.log("file: ", file);
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
        console.log("result: ", result);
        if (!result.hasOwnProperty("error")) {
          pathName.push(result.path);
          console.log("pathName: ", pathName);
          notification["success"]({
            message: "Upload file th??nh c??ng!",
            description: "",
          });
        } else {
          notification["error"]({
            message: "Upload file th???t b???i!",
            description: "",
          });
          pathName.pop();
        }
      })
      .catch((error) => {
        console.log(error);
        notification["error"]({
          message: "Upload file th???t b???i!",
          description: "",
        });
      });
  };

  const [form] = Form.useForm();

  return (
    <div className="container mt-4 pr-4">
      <h3 className="text-center">Th??m M???i Tu???n H???c</h3>
      <Form
        {...formItemLayout}
        form={form}
        name="week"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="header"
          label="Ti??u ?????"
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
          label="Mi??u t???"
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
          name="timeComplete"
          label="Th???i gian h???c c???a tu???n"
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
          name="coursesId"
          label="Kh??a h???c"
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
            placeholder="Ch???n Kh??a h???c"
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

        <Form.Item
          name="numberWeek"
          label="S??? th??? t??? tu???n"
          rules={[
            {
              type: "integer",
              message: viMessage["app.weeks.validate.numberWeek"],
            },
            {
              required: true,
              message: viMessage["app.weeks.numberWeek"],
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.List name="videoWeeks">
          {(fields, { add, remove }) => {
            return (
              <Row className="ml-3 mb-3" style={{ paddingLeft: "167px" }}>
                {fields.map((field, index) => (
                  <Col span={4} key={field.key}>
                    <Form.Item name={[field.name, "videoHeader"]}>
                      <Input
                        placeholder="Ti??u ????? Video"
                        style={{ width: "80%" }}
                      />
                    </Form.Item>

                    <Form.Item name={[field.name, "orderVideo"]}>
                      <Input
                        placeholder="Th?? t??? video"
                        style={{ width: "80%" }}
                        disabled={true}
                        value={field.key + 1}
                        defaultValue={parseInt(field.key) + 1}
                      />
                    </Form.Item>

                    <Form.Item name={[field.name, "videoUrl"]}>
                      <Upload
                        style={{ width: "30%" }}
                        name="myFiles"
                        customRequest={dummyRequest}
                      >
                        <Button>
                          <UploadOutlined />
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
            Th??m tu???n h???c
          </Button>
          <Button
            className="ml-3"
            type="outline"
            onClick={() => history.goBack()}
          >
            Tr??? l???i
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddWeek;
