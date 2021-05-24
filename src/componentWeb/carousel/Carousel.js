/* eslint-disable react/prop-types */
import React from "react";
import "antd/dist/antd.css";
import "./carousel.css";
import { Carousel } from "antd";

const Carousels = () => {
  return (
    <Carousel effect="fade">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              <img
                style={{ maxHeight: "250px" }}
                alt="3 hero images of people smiling"
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/promoStat.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=250"
              />
            </div>
          </div>
          <div className="col-6 align-middle vertical-center">
            <div>
              <div>
                <h3>Your Course to success build skills</h3>
                <button className="btn btn-primary mr-3">Join for Free</button>
                <button className="btn btn-outline-primary">
                  Try Coursera for Bussiness
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Carousels;
