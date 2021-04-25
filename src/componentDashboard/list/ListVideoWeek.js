import React, { useState, Fragment } from "react";
import "video-react/dist/video-react.css"; // import css
import "antd/dist/antd.css";
import { List, Drawer, Row } from "antd";
import { Player } from "video-react";

const ListVideoWeek = ({ videoWeek }) => {
  const [visible, setVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const showDrawer = (param) => {
    setVisible(true);
    setVideoUrl(param);
  };

  const onClose = () => {
    setVisible(false);
    setVideoUrl("");
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
              <a
                onClick={() => {
                  setVideoUrl(item.videoUrl), setVisible(true);
                }}
                key={`a-${item.id}`}
              >
                Xem Video
              </a>,
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
        <Player>
          <source
            src={`http://localhost:6868/web/upload/getFile/${videoUrl}`}
          />
        </Player>
      </Drawer>
    </Fragment>
  );
};

export default ListVideoWeek;
