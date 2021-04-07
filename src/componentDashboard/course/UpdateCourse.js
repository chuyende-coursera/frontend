import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import viMessage from "../../locales/vi";
import { Redirect, Link } from "react-router-dom";
import * as actionTypes from "../../actions/actionTypes";

import { Form, notification, Input, Select, Button, InputNumber } from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
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
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function UpdateCourse(props) {
  const [form] = Form.useForm();
  const [courseDetail, setCourseDetail] = useState({});
  const {
    requestJobsDash,
    requestLanguagesDash,
    requestSkillsDash,
    requestTopics,
    requestCourseDetail,
    topics,
    skills,
    languages,
    jobs,
    course,
    match,
  } = props;
  const id = match.params.id || 0;
  useEffect(() => {
    requestCourseDetail(id);
    requestLanguagesDash();
    requestJobsDash();
    requestSkillsDash();
    requestTopics();
  }, [
    requestCourseDetail,
    requestLanguagesDash,
    requestJobsDash,
    requestSkillsDash,
    requestTopics,
  ]);
  useEffect(() => {
    if (Object.keys(props.course).length > 0) {
      setCourseDetail(props.course);
    }
  }, [props.course]);

  const onHandleFinish = (value) => {
    console.log("value: ", value);
  };
  console.log("course detail: ", courseDetail);
  return (
    <div className="container mt-4 pr-4">
      <h3 className="text-center">Cập nhật khóa học</h3>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onHandleFinish}
        scrollToFirstError
      >
        <Form.Item
          name="title"
          initialValue={courseDetail.title ? "Co" : "Khong"}
          label="Tiêu Đề"
          rules={[
            {
              type: "string",
              message: viMessage["app.courses.validate.title"],
            },
            {
              required: true,
              message: viMessage["app.courses.title"],
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="duration"
          initialValue={courseDetail.duration}
          label="Thời lượng"
          rules={[
            {
              required: true,
              message: viMessage["app.courses.duration"],
            },
            {
              type: "integer",
              message: viMessage["app.courses.validate.duration"],
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="languagesId"
          initialValue={courseDetail.languagesId}
          label="Ngôn Ngữ"
          rules={[
            {
              required: true,
              message: viMessage["app.courses.language"],
            },
            {
              type: "string",
              message: viMessage["app.courses.validate.language"],
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Chọn Ngôn ngữ"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {languages.map((language) => (
              <Option key={language.id} value={language.id}>
                {language.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="jobsId"
          initialValue={courseDetail.jobsId}
          label="Hệ Nghề Nghiệp"
          rules={[
            {
              required: true,
              message: viMessage["app.courses.job"],
            },
            {
              type: "string",
              message: viMessage["app.courses.validate.job"],
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Chọn Nghề Nghiệp tương ứng"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {jobs.map((job) => (
              <Option key={job.id} value={job.id}>
                {job.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="skillsId"
          initialValue={courseDetail.skillsId}
          label="Kỹ Năng"
          rules={[
            {
              required: true,
              message: viMessage["app.courses.skill"],
            },
            {
              type: "string",
              message: viMessage["app.courses.validate.skill"],
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Chọn Kỹ Năng Khóa Học"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {skills.map((skill) => (
              <Option key={skill.id} value={skill.id}>
                {skill.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="level"
          initialValue={courseDetail.level}
          label="Trình Độ"
          rules={[
            {
              required: true,
              message: viMessage["app.courses.validate.level"],
            },
            {
              type: "string",
              message: viMessage["app.courses.validate.level"],
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Chọn Trình Độ"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="1">Cơ bản</Option>
            <Option value="2">Trung Bình</Option>
            <Option value="3">Nâng Cao</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="categoriesId"
          initialValue={courseDetail.categoriesId}
          label="Chuyên Mục"
          rules={[
            {
              required: true,
              message: viMessage["app.courses.validate.categories"],
            },
            {
              type: "string",
              message: viMessage["app.courses.validate.categories"],
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Chọn Chuyên Mục"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {topics.map((topic) => {
              return topic.categories.map((category) => (
                <Option key={category.id} value={category.id}>
                  {category.name}
                </Option>
              ));
            })}
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
          <Button type="outline">
            <a href="/dashboard/category/courses">Trở lại</a>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UpdateCourse;
