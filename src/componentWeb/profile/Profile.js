import React, { useEffect } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import FooterCourse from "../footer/FooterCourse";
const Profile = ({ requestUserCourse, currentUser }) => {
  useEffect(() => {
    requestUserCourse();
  }, [requestUserCourse]);
  return (
    <div className="profile-imagebackground">
      <div className="profile-header">
        <div style={{ width: "992px", margin: "0 auto" }}>
          <div style={{ marginTop: "40px" }}>
            <div
              className="profile-image-container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="profile-image">
                <svg
                  className="_ufjrdd"
                  style={{ fill: "#FFF", height: "64px", width: "64px" }}
                  viewBox="0 0 48 48"
                  role="img"
                  aria-labelledby="User36dcf617-94b1-479f-a5b6-f8adc3f6a766 User36dcf617-94b1-479f-a5b6-f8adc3f6a766Desc"
                  xmlns="http://www.w3.org/2000/svg"
                  data-reactid="183"
                >
                  <title
                    id="User36dcf617-94b1-479f-a5b6-f8adc3f6a766"
                    data-reactid="184"
                  >
                    User
                  </title>
                  <path
                    d="M2.2876,46 L46.0006,46 L45.0476,38.924 C44.5656,36.116 41.5416,35.138 40.2646,34.85 L24.1446,32.016 L7.9706,34.876 C5.9666,35.295 3.6456,36.597 3.2346,38.975 L2.2876,46 Z M48.2876,48 L-0.0004,48 L1.2576,38.671 C1.7506,35.818 4.1756,33.626 7.5916,32.912 L24.1436,29.984 L40.6586,32.889 C44.1826,33.684 46.5446,35.823 47.0246,38.622 L48.2876,48 Z"
                    role="presentation"
                    data-reactid="185"
                  ></path>
                  <path
                    d="M24.1465,2 C21.7165,2 19.3835,2.994 17.7485,4.727 C16.2805,6.28 15.5385,8.271 15.6565,10.334 C15.6975,11.058 16.2995,14.397 16.6945,16.465 C17.3255,19.946 19.6545,24 24.1465,24 C28.5745,24 30.8995,20.107 31.5995,16.464 C31.9985,14.398 32.6045,11.065 32.6365,10.347 C32.7305,8.239 31.9635,6.222 30.4775,4.667 C28.8555,2.972 26.5485,2 24.1465,2 M24.1465,26 C19.4355,26 15.7385,22.401 14.7285,16.831 C14.6265,16.3 13.7215,11.535 13.6595,10.448 C13.5095,7.831 14.4455,5.311 16.2935,3.353 C18.3065,1.222 21.1685,0 24.1465,0 C27.0915,0 29.9255,1.197 31.9225,3.285 C33.7905,5.238 34.7525,7.777 34.6345,10.436 C34.5855,11.531 33.6675,16.302 33.5635,16.842 C32.4795,22.49 28.8705,26 24.1465,26"
                    role="presentation"
                    data-reactid="186"
                  ></path>
                </svg>
              </div>
            </div>
            <h2
              style={{
                marginTop: "40px",
                fontSize: "22px",
                lineHeight: "24px",
                color: "#fff",
                width: "100%",
                textAlign: "center",
              }}
            >
              {currentUser.name}
            </h2>
          </div>
          <div className="modify-profile">
            <div className="image-text-container bt3-col-sm-8">
              <div className="edit-image" data-reactid="190">
                <svg
                  className="_ufjrdd"
                  style={{ fill: "#757575", height: "48px", width: "48px" }}
                  viewBox="0 0 48 48"
                  role="img"
                  aria-labelledby="Compose4c4318cc-18b4-46c9-ce8d-aab05e61cd00 Compose4c4318cc-18b4-46c9-ce8d-aab05e61cd00Desc"
                  xmlns="http://www.w3.org/2000/svg"
                  data-reactid="191"
                >
                  <title
                    id="Compose4c4318cc-18b4-46c9-ce8d-aab05e61cd00"
                    data-reactid="192"
                  >
                    Compose
                  </title>
                  <g
                    transform="translate(4.000000, 1.000000)"
                    role="presentation"
                    data-reactid="193"
                  >
                    <polygon
                      points="0 3.2706 0 45.2706 40 45.2706 40 18.2706 38 18.2706 38 43.2716 2 43.2716 2 5.2716 22 5.2716 22 3.2706"
                      data-reactid="194"
                    ></polygon>
                    <g
                      transform="translate(14.000000, 0.270900)"
                      data-reactid="195"
                    >
                      <path
                        d="M15.3418,6.8401 L19.8178,9.4241 L21.4458,6.6041 C21.7908,6.0061 21.8828,5.3101 21.7038,4.6431 C21.5258,3.9761 21.0978,3.4191 20.4998,3.0741 C19.2648,2.3611 17.6818,2.7861 16.9698,4.0201 L15.3418,6.8401 Z M4.4458,25.7941 L8.9208,28.3781 L18.8518,11.1761 L14.3768,8.5921 L4.4458,25.7941 Z M3.8788,27.7761 L3.1828,33.1491 L7.4878,29.8601 L3.8788,27.7761 Z M0.5818,37.6531 L2.1138,25.8331 L13.1228,6.7651 L13.0878,6.7451 L15.2378,3.0201 C16.5018,0.8311 19.3108,0.0781 21.4998,1.3421 C22.5608,1.9541 23.3188,2.9431 23.6358,4.1261 C23.9528,5.3081 23.7908,6.5441 23.1778,7.6041 L21.5498,10.4241 L21.5848,10.4441 L10.0528,30.4171 L0.5818,37.6531 Z"
                        data-reactid="196"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h4
                style={{
                  fontSize: "22px",
                  lineHeight: "24px",
                  textAlign: "justify",
                }}
              >
                <font style={{ verticalAlign: "inherit" }}>
                  Give us more information about yourself, in order to benefit
                  from personalized learning with course recommendations
                </font>
              </h4>
            </div>
            <div className="bt3-col-sm-2">
              <button
                className="_li0s4s2"
                data-track="true"
                data-track-app="account_profile"
                data-track-page="account_profile"
                data-track-action="[object Object]"
                data-track-component="edit_profile"
                data-reactid="199"
              >
                <span className="_1lutnh9y" data-reactid="200">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <Link to="/editProfile">Chỉnh sửa trang cá nhân</Link>
                    </font>
                  </font>
                </span>
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button className="btn_edit btn-primary">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  <Link to="/editProfile">Chỉnh sửa trang cá nhân</Link>
                </font>
              </font>
            </button>
          </div>
        </div>
      </div>
      <FooterCourse />
    </div>
  );
};

export default Profile;
