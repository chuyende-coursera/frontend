import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./learn.css";
import Video from "./Video";
import { Layout, Menu } from "antd";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const Learn = (props) => {
  // console.log("props.course", props.course);

  const { requestCourseDetail, location } = props;
  const [course, setCourse] = useState({});
  const [videoUrl, setVideoUrl] = useState("");

  if (Object.keys(props.course).length !== Object.keys(course).length) {
    setCourse(props.course);
  }
  const id = (location && location.state && location.state.courseId) || 0;

  useEffect(() => {
    requestCourseDetail(id);
  }, [requestCourseDetail]);

  return (
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {Object.keys(course).length > 0 &&
            course.courseWeeks.map((courseWeek) => {
              console.log("courseWeek: ", courseWeek);
              return (
                <SubMenu key={courseWeek.id} title={courseWeek.weeks.header}>
                  {courseWeek.weeks.videoWeek.map((video) => (
                    <Menu.Item
                      onClick={() => setVideoUrl(video.videoUrl)}
                      key={video.id}
                    >{`${video.videoHeader} - ${video.durationVideo} minutes`}</Menu.Item>
                  ))}
                </SubMenu>
              );
            })}
        </Menu>
      </Sider>
      <Video videoUrl={videoUrl} />
    </Layout>
  );
};

export default Learn;
