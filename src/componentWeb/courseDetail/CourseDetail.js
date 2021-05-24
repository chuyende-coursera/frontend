/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./courseDetail.css";
import BodyCourseDetail from "./BodyCourseDetail";
import PageHeader from "../../componentWeb/pageHeader/PageHeader";
import FooterCourse from "../footer/FooterCourse";
function CourseDetail(props) {
  const id =
    props.location && props.location.state && props.location.state.courseId;

  const [weeks, setWeeks] = useState([]);
  const [userCourse, setUserCourse] = useState([]);
  useEffect(() => {
    props.requestCourseDetail(id);
    props.requestUserCourseWeb({ coursesId: id });
  }, [props.requestUserCourseWeb, props.requestCourseDetail]);
  useEffect(() => {
    const weekCourse = (props.course && props.course.weeks) || [];
    const listDataWeekCourse = [];
    for (let i = 0; i < weekCourse.length; i++) {
      // (weekCourse[i].weeks);

      listDataWeekCourse.push({
        href: "http://ant.design",
        title: weekCourse[i].header,
        timeComplete: weekCourse[i].timeComplete,
        description: weekCourse[i].description,
        numberWeek: weekCourse[i].numberWeek,
        content: weekCourse[i].videoWeek || [],
      });
    }
    setUserCourse(props.userCourse);
    setWeeks(listDataWeekCourse);
  }, [props.course, props.userCourse]);

  return (
    <div className="container-fluid">
      <PageHeader
        course={props.course}
        authenticated={props.authenticated}
        requestBuyCourse={props.requestBuyCourse}
      />

      <BodyCourseDetail
        listDataWeekCourse={weeks}
        authenticated={props.authenticated}
        userCourse={userCourse}
        coursesId={id}
        course={props.course}
        creators={props.course && props.course.creators}
        requestCommentByUserId={props.requestCommentByUserId}
      />
      <FooterCourse />
    </div>
  );
}

export default CourseDetail;
