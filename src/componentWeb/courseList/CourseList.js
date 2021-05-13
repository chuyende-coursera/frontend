/* eslint-disable react/prop-types */
import React, { Component, Fragment } from "react";
import CourseItem from "../courseItem/CourseItem";
import { Row } from "antd";
import Filter from "../filter/Filter";
class CourseList extends Component {
  state = {
    courses: [],
    categoriesId:
      (this.props &&
        this.props.location &&
        this.props.location.state &&
        this.props.location.state.categoriesId) ||
      undefined,
    skillsId: undefined,
    languagesId: undefined,
    topicsId: undefined,
    jobsId: undefined,
    handleChangeFilter: this.handleChangeFilter.bind(this),
  };
  componentDidMount = () => {
    console.log(this.state);
    this.props.requestCourses({
      categoriesId: this.state.categoriesId,
      skills: this.state.skills,
      languagesId: this.state.languagesId,
      jobsId: this.state.jobsId,
    }),
      this.props.requestLanguagesDash();
    this.props.requestSkillsDash();
    this.props.requestJobsDash();
    this.props.requestTopics();
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.state &&
      nextProps.location.state.categoriesId &&
      nextProps.location.state.categoriesId !== this.state.categoriesId
    ) {
      this.setState(
        {
          categoriesId: nextProps.location.state.categoriesId,
        },
        () =>
          nextProps.requestCourses({ categoriesId: this.state.categoriesId })
      );
    }

    if (nextProps.courses) {
      this.setState({
        courses: nextProps.courses,
      });
    }

    if (nextProps.authenticated) {
      this.setState({
        authenticated: nextProps.authenticated,
      });
    }
  }
  handleChangeFilter(jobsId, skillsId, languagesId, topicsId) {
    console.log(this);
    if (jobsId !== null) {
      this.setState({
        jobsId: jobsId,
      });
    } else if (skillsId !== null) {
      this.setState({
        skillsId: skillsId,
      });
    } else if (languagesId !== null) {
      this.setState({
        languagesId: languagesId,
      });
    } else if (topicsId !== null) {
      this.setState({
        topicsId: topicsId,
      });
    }
  }

  render() {
    const { skills, languages, jobs, topics } = this.props;
    return (
      <Fragment>
        <Filter
          skills={skills}
          languages={languages}
          jobs={jobs}
          topics={topics}
          handleChangeFilter={this.state.handleChangeFilter}
        />
        <div className="site-card-wrapper container">
          <Row gutter={16}>
            {this.state.courses.map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default CourseList;
