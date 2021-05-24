import React, { useEffect, Fragment } from "react";
import MyCourseItem from "./MyCourseItem";
import { Row, Button } from "antd";
import FooterCourse from "../footer/FooterCourse";

const MyCourse = ({
  requestUserCourse,
  userCourse,
  requestCurrentUser,
  currentUser,
}) => {
  useEffect(() => {
    requestCurrentUser();
  }, [requestCurrentUser]);

  useEffect(() => {
    console.log("currentUser: ", currentUser);
    if (Object.keys(currentUser).length > 0) {
      requestUserCourse({ usersId: currentUser.id, status: 1 });
    }
  }, [requestUserCourse, currentUser]);

  console.log("userCourse: ", userCourse);
  return (
    <div className="site-card-wrapper container">
      <h3 className="text-center">Khóa học của bạn</h3>
      <Row gutter={16}>
        {userCourse.length === 0 ? (
          <Fragment>
            <h4 className="text-center">
              Hiện tại bạn chưa đăng kí khóa học nào vui lòng đăng kí để có thể
              học tập
            </h4>
            <Button key="buy">
              <a href="/browser">Click để xem thêm</a>
            </Button>
          </Fragment>
        ) : (
          userCourse.map((e) => {
            return <MyCourseItem course={e} key={e.id} />;
          })
        )}
      </Row>
      <FooterCourse />
    </div>
  );
};

export default MyCourse;
