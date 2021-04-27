/* eslint-disable react/prop-types */
import React from "react";
import "antd/dist/antd.css";
import { Card, Avatar, Col } from "antd";
import { Link } from "react-router-dom";
import parseUrI from "../../utils/parseUrI";
const { Meta } = Card;
function CourseItem({ course }) {
  const url = parseUrI(`/learn/${course.title}`);
  return (
    <Link
      to={{
        pathname: url,
        state: {
          courseId: course.id,
        },
      }}
    >
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={course.title}
            description={"This is the description - " + course.level}
          />
        </Card>
      </Col>
    </Link>
  );
}

export default CourseItem;
