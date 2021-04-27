import React from "react";
import "antd/dist/antd.css";
import "./learn.css";
import "video-react/dist/video-react.css";
import { Layout } from "antd";
import ReactPlayer from "react-player";

const { Content } = Layout;
function Video({ videoUrl }) {
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        {videoUrl === "" ? (
          <div className="react-player">
            <h1>Chúc bạn học tập hiệu quả</h1>
          </div>
        ) : (
          <ReactPlayer
            className="react-player"
            url={`http://localhost:6868/web/upload/getFile/${videoUrl}`}
            playing
            controls
          />
        )}
      </Content>
    </Layout>
  );
}

export default Video;
