import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./week.css";
import {
  Modal,
  Button,
  notification,
  Form,
  Input,
  InputNumber,
  Upload,
} from "antd";
import viMessage from "../../locales/vi";
import _ from "lodash";
import cookie from "js-cookie";
import { UploadOutlined } from "@ant-design/icons";

const CollectionCreateForm = ({
  video,
  visible,
  onUpdate,
  onCancel,
  weeksId,
}) => {
  const [form] = Form.useForm();
  const { getFieldValue, setFieldsValue } = form;
  useEffect(() => {
    if (video && Object.keys(video).length > 0) {
      setFieldsValue({
        orderVideo: parseInt(video.orderVideo),
        videoHeader: video.videoHeader,
        videoUrl: video.videoUrl,
      });
    }
  }, [video]);
  let pathName = "";
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
          pathName = result.path;
          console.log("pathName: ", pathName);
          notification["success"]({
            message: "Upload file thành công!",
            description: "",
          });
        } else {
          notification["error"]({
            message: "Upload file thất bại!",
            description: "",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        notification["error"]({
          message: "Upload file thất bại!",
          description: "",
        });
      });
  };
  return (
    <Modal
      visible={visible}
      title="Update Video"
      okText="Update"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            let params = _.omit(values, ["videoUrl"]);
            if (pathName === "" || pathName === null || pathName === undefined)
              params = {
                ...params,
              };
            else
              params = {
                ...params,
                videoUrl: pathName,
              };
            form.resetFields();
            onUpdate(video.id, params);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="videoHeader"
          label="Tiêu Đề Video"
          initialvalue={getFieldValue("videoHeader")}
          rules={[
            {
              type: "string",
              message: viMessage["app.weeks.validate.videoHeader"],
            },
            {
              required: true,
              message: viMessage["app.weeks.videoHeader"],
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="orderVideo"
          label="Số thự tự video"
          initialvalue={getFieldValue("orderVideo")}
          rules={[
            {
              type: "integer",
              message: viMessage["app.weeks.validate.orderVideo"],
            },
            {
              required: true,
              message: viMessage["app.weeks.orderVideo"],
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="videoUrl" label="Video">
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
      </Form>
    </Modal>
  );
};

export default CollectionCreateForm;
