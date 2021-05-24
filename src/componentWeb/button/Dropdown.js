/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import "antd/dist/antd.css";

// import './index.css';
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";
import parseUrI from "../../utils/parseUrI";
const { SubMenu } = Menu;

function Dropdown({ topics }) {
  return (
    <Fragment>
      <div className="dropdown mr-sm-4">
        <button
          className="btn btn-primary btn-sm dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Explore
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Menu style={{ width: 256 }} mode="vertical">
            {topics.map((topic) => (
              <SubMenu
                key={topic.id}
                title={
                  <span>
                    <span>{topic.name}</span>
                  </span>
                }
              >
                {topic.categories.map((category) => {
                  const url = parseUrI(
                    `/browser/${topic.name}/${category.name}`
                  );
                  // ("url: ", url);
                  return (
                    <Menu.Item key={category.id}>
                      <Link
                        to={{
                          pathname: url,
                          state: {
                            topicId: topic.id,
                            categoriesId: category.id,
                          },
                        }}
                      >
                        {category.name}
                      </Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            ))}
          </Menu>
          <Button type="primary" block>
            <a href="/browser">Khám phá tất cả</a>
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default Dropdown;
