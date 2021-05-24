import React, { useState, Fragment } from "react";
import "video-react/dist/video-react.css"; // import css
import "antd/dist/antd.css";
import { List, Drawer, Space, Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import UpdateVideoWeek from "../week/UpdateVideoWeek";
import ReactPlayer from "react-player";
import {
  VideoCameraOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const ListVideoWeek = ({ videoWeek, requestUpdateVideoDash }) => {
  const [visible, setVisible] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [itemVideo, setItemVideo] = useState({});
  const [videoUrl, setVideoUrl] = useState("");
  const showDrawer = (param) => {
    setVisible(true);
    setVideoUrl(param);
  };

  const onClose = () => {
    setVisible(false);
    setVideoUrl("");
  };
  const onUpdate = (id, values) => {
    console.log("Received values of form: ", id, " - ", values);
    requestUpdateVideoDash(id, values);
    setVisibleEdit(false);
  };
  return (
    <Fragment>
      <List
        itemLayout="horizontal"
        dataSource={videoWeek}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            className="text-primary"
            actions={[
              <Button key={`a-${item.id}`}>
                <a
                  onClick={() => {
                    setVideoUrl(item.videoUrl), setVisible(true);
                  }}
                >
                  <VideoCameraOutlined />
                </a>
              </Button>,

              <Space size="middle" key={`b-${item.id}`}>
                <Button
                  onClick={() => {
                    setVisibleEdit(true);
                    setItemVideo(item);
                  }}
                >
                  <EditOutlined />
                </Button>
                <UpdateVideoWeek
                  requestCreateVideoDash=""
                  video={itemVideo}
                  visible={visibleEdit}
                  onUpdate={onUpdate}
                  onCancel={() => {
                    setVisibleEdit(false);
                  }}
                />
                <Popconfirm
                  title="Chắc chắn xóa?"
                  onConfirm={() => this.handleDelete(item.id)}
                >
                  <Button danger>
                    <DeleteOutlined />
                  </Button>
                </Popconfirm>
              </Space>,
            ]}
          >
            <List.Item.Meta
              title={item.videoHeader}
              description={`STT: ${item.orderVideo} - Thời lượng: ${item.durationVideo} phút`}
            />
          </List.Item>
        )}
      />
      <Drawer
        width={1280}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <p
          className="site-description-item-profile-p"
          style={{ marginBottom: 24 }}
        >
          Chúc bạn học tâp hiệu quả
        </p>
        <ReactPlayer
          className="react-player"
          url={`http://localhost:6868/web/upload/getFile/${videoUrl}`}
          playing
          controls
        />
      </Drawer>
    </Fragment>
  );
};

export default ListVideoWeek;
