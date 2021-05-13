import React, { useEffect } from "react";
import MyCourseItem from "./MyCourseItem";
import { Row } from "antd";

const MyCourse = ({ requestUserCourse, userCourse }) => {
  useEffect(() => {
    requestUserCourse({ status: 1 });
  }, [requestUserCourse]);

  console.log("userCourse: ", userCourse);
  return (
    <div className="site-card-wrapper container">
      <Row gutter={16}>
        {userCourse.map((e) => {
          return <MyCourseItem course={e} key={e.id} />;
        })}
      </Row>
    </div>
  );
};

export default MyCourse;
