/* eslint-disable react/prop-types */
import React, { useEffect, Fragment } from "react";
import "antd/dist/antd.css";
import "./collapse.css";
import { Collapse, List } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

function callback(key) {
  key;
}

function CollapseCourse(props) {
  const { content } = props;
  return (
    <Collapse onChange={callback} bordered={false}>
      <Panel
        header="See All"
        key="1"
        showArrow={false}
        className="bg-panel text-primary"
      >
        <List
          size="small"
          header={
            <div>
              <PlayCircleOutlined style={{ color: "blue" }} /> {content.length}
            </div>
          }
          bordered={false}
          dataSource={content}
          renderItem={(item) => (
            <List.Item>
              {props.authenticated ? (
                <Link to="/mycourse" className="text-info">
                  {item.videoHeader + " " + item.durationVideo + "m"}
                </Link>
              ) : (
                <Link to="/login" className="text-info">
                  {item.videoHeader + " " + item.durationVideo + "m"}
                </Link>
              )}
            </List.Item>
          )}
        />
      </Panel>
    </Collapse>
  );
}

export default CollapseCourse;
