import React, { useState } from "react";
import { Row, Col, Cascader, Select } from "antd";
const { Option } = Select;

const style = { background: "rgb(245, 245, 245)" };

const Filter = ({ jobs, skills, languages, topics, handleChangeFilter }) => {
  const param = {
    jobs,
    skills,
    languages,
    topics,
  };

  const [jobsId, setJobsId] = useState(null);
  const [skillsId, setSkillsId] = useState(null);
  const [languagesId, setLanguagesId] = useState(null);
  const [topicsId, setTopicsId] = useState(null);

  const filterButton = [];
  for (const key in param) {
    if (param.hasOwnProperty(key)) {
      const element = param[key];

      filterButton.push(
        <Col className="gutter-row" span={3} key={filterButton.length}>
          <Select
            style={style}
            placeholder={key}
            onChange={(value) => {
              if (key === "jobs") setJobsId(value);
              if (key === "skills") setSkillsId(value);
              if (key === "languages") setLanguagesId(value);
              if (key === "topics") setTopicsId(value);

              handleChangeFilter(jobsId, skillsId, languagesId, topicsId);
            }}
          >
            {element.map((e) => (
              <Option key={e.id} value={e.id}>
                {e.name}
              </Option>
            ))}
          </Select>
        </Col>
      );
    }
  }
  // console.log("param: ", param);
  return (
    <Row
      gutter={16}
      align="center"
      className="border-bottom p-3 container-fluid text-right"
    >
      <h5>Lọc theo: </h5>
      {filterButton.map((e) => e)}
    </Row>
  );
};

export default Filter;
