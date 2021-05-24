import React, { Fragment } from "react";
import { List, Collapse, Rate, Progress } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./review.css";
import cookie from "js-cookie";
import Comment from "./Comment";
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const BodyCourseDetail = ({
  listDataWeekCourse,
  authenticated,
  userCourse,
  requestCommentByUserId,
  coursesId,
  creators,
  course,
}) => {
  console.log("course: ", course);
  let count = 0;
  let start = [0, 0, 0, 0, 0];
  const filterReview = userCourse.filter((e) => {
    if (e.review && e.comment) {
      count++;
      start[parseInt(e.review) - 1]++;
      return e;
    }
  });

  const avengerStart =
    start.reduce((pre, cur, index) => pre + cur * (index + 1), 0) / count;
  const rateStart = start.map((e) => (e * 100) / count);
  const infoCreator = creators || {};
  return (
    <Fragment>
      <ul className="nav nav-tabs p-3 border" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active "
            data-toggle="tab"
            href="#about"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Về Khóa học
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#author"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Tác Giả
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#syllabus"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Lộ Trình
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#faq"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            FAQ
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#review"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Đánh giá
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="about"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {course.description}
        </div>
        <div
          className="tab-pane fade container"
          id="author"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <h3>{infoCreator.name}</h3>
          <h3>{infoCreator.mobile}</h3>
          <h3>{infoCreator.birthday}</h3>
          <h3>{infoCreator.email}</h3>
          <h3>{infoCreator.sex}</h3>
        </div>
        <div
          className="tab-pane fade container"
          id="syllabus"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <List
            itemLayout="horizontal"
            dataSource={listDataWeekCourse}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  className="col-sm-2"
                  title={
                    <p className="text-uppercase text-center align-bottom">
                      Week <br /> {item.numberWeek}
                    </p>
                  }
                />
                <List.Item.Meta
                  className="col-sm-6"
                  title={
                    <Fragment>
                      <p>
                        <ClockCircleOutlined
                          style={{ color: "orange", fontSize: "32px" }}
                        />
                        {item.timeComplete + " hours to complete"}
                      </p>

                      {item.title}
                    </Fragment>
                  }
                  description={
                    <Collapse bordered={false} accordion={false}>
                      <Panel
                        showArrow={false}
                        header={item.description}
                        key={item.id}
                      >
                        {item.content.map((e) => (
                          <p key={e.id}>{e.videoHeader}</p>
                        ))}
                      </Panel>
                    </Collapse>
                  }
                />
              </List.Item>
            )}
          />
        </div>
        <div
          className="tab-pane fade container mt-4"
          id="faq"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Collapse defaultActiveKey={["1"]} onChange={callback}>
            <Panel
              header="When will I have access to the lectures and assignments?"
              key="1"
            >
              <p>
                Once you enroll, you’ll have access to all videos and
                programming assignments.
              </p>
            </Panel>
            <Panel
              header="Do I need to pay for this course?

            "
              key="2"
            >
              <p>No. All features of this course are available for free.</p>
            </Panel>
            <Panel
              header="Can I earn a certificate in this course?

            "
              key="3"
            >
              <p>
                No. As per Princeton University policy, no certificates,
                credentials, or reports are awarded in connection with this
                course.
              </p>
            </Panel>
            <Panel
              header="Can I earn a certificate in this course?

            "
              key="4"
            >
              <p>
                No. As per Princeton University policy, no certificates,
                credentials, or reports are awarded in connection with this
                course.
              </p>
            </Panel>
            <Panel
              header="Can I earn a certificate in this course?

            "
              key="5"
            >
              <p>
                No. As per Princeton University policy, no certificates,
                credentials, or reports are awarded in connection with this
                course.
              </p>
            </Panel>
            <Panel
              header="Can I earn a certificate in this course?

            "
              key="6"
            >
              <p>
                No. As per Princeton University policy, no certificates,
                credentials, or reports are awarded in connection with this
                course.
              </p>
            </Panel>
          </Collapse>
        </div>
        <div
          className="tab-pane fade container-fluid"
          id="review"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="row">
            <div className="col-4">
              <div className="content-left">
                <div className="rc-ReviewsOverview__totals">
                  <h4 className="rc-ReviewsOverview__totals__rating">
                    {String(avengerStart) || null}
                  </h4>
                  <div>
                    <Rate disabled defaultValue={3} />
                    <a href="#" className="count-review">
                      <span>
                        <span itemProp="reviewCount">{count}</span> reviews
                      </span>
                    </a>
                  </div>
                </div>
                <div className="rc-ReviewsRatingBarGraph horizontal-box">
                  <ul className="bar-graph-container vertical-box p-a-0">
                    <li className="horizontal-box graph-row">
                      <div className="star-bar-label">
                        <span>5 stars</span>
                      </div>
                      <div className="bar-graph-bar">
                        <Progress
                          percent={rateStart[4]}
                          size="small"
                          status="normal"
                        />
                      </div>
                    </li>
                    <li className="horizontal-box graph-row">
                      <div className="star-bar-label">
                        <span>4 stars</span>
                      </div>
                      <div className="bar-graph-bar">
                        <Progress
                          percent={rateStart[3]}
                          size="small"
                          status="normal"
                        />
                      </div>
                    </li>
                    <li className="horizontal-box graph-row">
                      <div className="star-bar-label">
                        <span>3 stars</span>
                      </div>
                      <div className="bar-graph-bar">
                        <Progress
                          percent={rateStart[2]}
                          size="small"
                          status="normal"
                        />
                      </div>
                    </li>
                    <li className="horizontal-box graph-row">
                      <div className="star-bar-label">
                        <span>2 stars</span>
                      </div>
                      <div className="bar-graph-bar">
                        <Progress
                          percent={rateStart[1]}
                          size="small"
                          status="normal"
                        />
                      </div>
                    </li>
                    <li className="horizontal-box graph-row">
                      <div className="star-bar-label">
                        <span>1 star</span>
                      </div>
                      <div className="bar-graph-bar">
                        <Progress
                          percent={rateStart[0]}
                          size="small"
                          status="normal"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="content">
                <h5 className="section-title">
                  <span>
                    TOP REVIEWS FROM{" "}
                    <span itemProp="itemReviewed">
                      INTRODUCTION TO MARKETING
                    </span>
                  </span>
                </h5>
                {filterReview.map((e) => (
                  <div className="listReview" key={e.id}>
                    <div className="star">
                      <Rate disabled defaultValue={parseInt(e.review)} />
                    </div>
                    <p className="comment">{e.comment}</p>
                  </div>
                ))}
                <Comment
                  requestCommentByUserId={requestCommentByUserId}
                  coursesId={coursesId}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BodyCourseDetail;
