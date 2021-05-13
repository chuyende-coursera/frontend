/* eslint-disable react/prop-types */
import React, { useEffect, Fragment } from "react";
import "antd/dist/antd.css";
import "./courseDetail.css";
import { List, Col } from "antd";
import Collapse from "../collapse/Collapse";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PageHeader from "../../componentWeb/pageHeader/PageHeader";

function CourseDetail(props) {
  const id =
    props.location && props.location.state && props.location.state.courseId;
  useEffect(() => props.requestCourseDetail(id), []);
  const weekCourse = (props.course && props.course.courseWeeks) || [];
  const listDataWeekCourse = [];
  for (let i = 0; i < weekCourse.length; i++) {
    // (weekCourse[i].weeks);
    listDataWeekCourse.push({
      href: "http://ant.design",
      title: weekCourse[i].weeks && weekCourse[i].weeks.header,
      timeComplete: weekCourse[i].weeks && weekCourse[i].weeks.timeComplete,
      description: weekCourse[i].weeks && weekCourse[i].weeks.description,
      numberWeek: weekCourse[i].numberWeek,
      content: (weekCourse[i].weeks && weekCourse[i].weeks.videoWeek) || [],
    });
  }
  return (
    <div className="container-fluid">
      <PageHeader
        course={props.course}
        authenticated={props.authenticated}
        requestBuyCourse={props.requestBuyCourse}
      />
      <List
        itemLayout="horizontal"
        dataSource={listDataWeekCourse}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              className="col-sm-4"
              title={
                <p className="display-4 text-uppercase text-center align-bottom">
                  Week <br /> {item.numberWeek}
                </p>
              }
            />
            <List.Item.Meta
              className="col-sm-8"
              title={
                <Fragment>
                  <p>
                    <ClockCircleOutlined
                      style={{ color: "orange", fontSize: "32px" }}
                    />
                    {item.timeComplete + " minutes to complete"}
                  </p>
                  {props.authenticated ? (
                    <Link to="/mycourse" className="text-info">
                      {item.title}
                    </Link>
                  ) : (
                    <Link to="/login" className="text-info">
                      {item.title}
                    </Link>
                  )}
                </Fragment>
              }
              description={
                <Fragment>
                  {item.desctipition}
                  <Collapse
                    content={item.content}
                    authenticated={props.authenticated}
                  />
                </Fragment>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default CourseDetail;
