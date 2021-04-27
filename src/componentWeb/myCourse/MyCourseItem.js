/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import parseUrI from "../../utils/parseUrI";
import { Card, Avatar, Col, Button } from "antd";
const { Meta } = Card;

function MyCourseItem({ course }) {
  const { courses } = course;
  const url = parseUrI(`/myCourse/learn/${courses.title}`);
  return (
    <Link
      to={{
        pathname: url,
        state: {
          courseId: courses.id,
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
            title={courses.title}
            description={<Button type="primary">Bắt đầu học</Button>}
          />
        </Card>
      </Col>
    </Link>
  );
}

export default MyCourseItem;
