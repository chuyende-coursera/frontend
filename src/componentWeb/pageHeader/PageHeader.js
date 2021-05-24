import React, { Fragment } from "react";
import "antd/dist/antd.css";
import "./pageHeader.css";
import parseUrI from "../../utils/parseUrI";
import { Avatar, PageHeader, Tag, Typography, Row, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import cookie from "js-cookie";
const { Paragraph } = Typography;

const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const Content = ({ children, extraContent }) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
    </Row>
  );
};

const PageHeaderAll = ({ course, requestBuyCourse }) => {
  let routes;
  if (Object.keys(course).length > 0) {
    routes = [
      {
        path: "browser",
        breadcrumbName: "Browser",
      },
      {
        path: parseUrI(
          `browser/${course.categories.topics.name}/${course.categories.name}`
        ),
        breadcrumbName: course.categories.name,
      },
      {
        path: parseUrI(`learn/${course.categories.name}/${course.title}`),
        breadcrumbName: course.title,
      },
    ];
  } else {
    routes = [
      {
        path: "browser",
        breadcrumbName: "Browser",
      },
    ];
  }

  const content = (
    <Fragment>
      <Paragraph>
        <div>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{" "}
          by {course && course.creators && course.creators.name}
        </div>
      </Paragraph>

      <div>
        <Button type="primary" icon={<ShoppingCartOutlined />}>
          {cookie.get("AUTHENTICATED") === "AUTHENTICATED" ? (
            <Link
              to="/cart"
              onClick={() => requestBuyCourse({ coursesId: course.id })}
              className="text-white"
            >
              Đăng kí khóa học
            </Link>
          ) : (
            <Link to="/login" className="text-white">
              Đăng kí khóa học
            </Link>
          )}
        </Button>
      </div>
    </Fragment>
  );

  return (
    <PageHeader
      title={course.title}
      className="site-page-header bg-gradient"
      tags={
        <Tag color="blue">
          {parseInt(course.cost) !== 0 ? parseInt(course.cost) + "$" : "Free"}
        </Tag>
      }
      breadcrumb={{ routes }}
    >
      <Content>{content}</Content>
    </PageHeader>
  );
};

export default PageHeaderAll;
