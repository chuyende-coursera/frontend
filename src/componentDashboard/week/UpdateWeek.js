import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import viMessage from "../../locales/vi";
import history from "../../store/history";

import { Form, Input, Select, Button, InputNumber } from "antd";
const { TextArea } = Input;

const { Option } = Select;

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

function UpdateWeek(props) {
  const [form] = Form.useForm();
  const { getFieldValue, setFieldsValue } = form;
  const {
    match,
    requestCoursesDash,
    courses,
    requestWeekDetail,
    week,
    requestCurrentUser,
    currentUser,
    requestUpdateWeekDash,
  } = props;
  const id = match.params.id || 0;
  useEffect(() => {
    requestWeekDetail(id);
    requestCurrentUser();
  }, [requestWeekDetail, requestCurrentUser]);

  useEffect(() => {
    if (week && Object.keys(week).length > 0) {
      setFieldsValue({
        timeComplete: parseInt(week.timeComplete),
        header: week.header,
        description: week.description,
        coursesId: parseInt(week.coursesId) !== 0 ? week.coursesId : "",
        numberWeek: week.numberWeek,
      });
    }
  }, [week]);
  useEffect(() => {
    if (Object.keys(currentUser).length > 0) {
      if (parseInt(currentUser.id) === 0) requestCoursesDash();
      else requestCoursesDash({ creatorsId: parseInt(currentUser.id) });
    }
  }, [currentUser, requestCoursesDash]);

  const onFinish = (values) => {
    console.log("values: ", values);
    requestUpdateWeekDash(id, values);
  };

  return (
    <div className="container mt-4 pr-4">
      <h3 className="text-center">Cập Nhật Tuần Học</h3>
      <Form
        {...formItemLayout}
        form={form}
        name="week"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="timeComplete"
          initialValue={getFieldValue("timeComplete")}
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
          name="numberWeek"
          initialValue={getFieldValue("numberWeek")}
          label="Số thứ tự tuần"
          rules={[
            {
              type: "integer",
              message: viMessage["app.weeks.validate.numberWeek"],
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
          initialValue={getFieldValue("header")}
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
          initialValue={getFieldValue("description")}
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
          initialValue={getFieldValue("coursesId")}
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
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Cập nhật tuần học
          </Button>
          <Button
            className="ml-3"
            type="outline"
            onClick={() => history.goBack()}
          >
            Trở lại
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UpdateWeek;
