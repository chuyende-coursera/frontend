import React from "react";
import "./editProfile.css";
const EditProfile = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <div
                  className="horizontal-box align-items-spacebetween edit"
                  data-reactid="181"
                >
                  <h1 className="display-4-text" data-reactid="182">
                    Edit my profile
                  </h1>
                  <button
                    className="_1hx9z6hg"
                    data-track="true"
                    data-track-app="account_profile"
                    data-track-page="account_profile"
                    data-track-action="[object Object]"
                    data-track-component="view_profile"
                    data-reactid="183"
                  >
                    <span className="_1lutnh9y" data-reactid="184">
                      View Profile
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <div className="introduction">
                  <div className="section-header-description">
                    <h2 className="display-2-text">Introduction</h2>
                    <p className="section-header-subtitle">
                      Let the Coursera community of other learners and
                      instructors recognize you.
                    </p>

                    <div className="htmlForm-group col-6 wrap align-items-vertical-center">
                      <label className="label">Full Name</label>

                      <input type="text" className="htmlForm-control col-6" />
                    </div>
                    <div className="htmlForm-group col-6 wrap align-items-vertical-center">
                      <label className="label">Profile Photo</label>
                      <div
                        className="image-selector-image preview vertical-box align-items-absolute-center"
                        data-reactid="202"
                      >
                        <svg
                          className="_975jit"
                          style={{
                            fill: "#FFF",
                            height: "64px",
                            width: "64px",
                          }}
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                          data-reactid="203"
                        >
                          <title data-reactid="204">user</title>
                          <path
                            d="M33.5,10.4C33.7,5.1,29.2,1,24,1s-9.8,4.2-9.5,9.4c0.1,1.1,1.1,6.3,1.1,6.3c0.8,4.5,3.8,8.3,8.4,8.3s7.6-3.8,8.4-8.4C32.4,16.6,33.4,11.4,33.5,10.4z"
                            data-reactid="205"
                          ></path>
                          <path
                            d="M47,47H1l1.1-8.2c0.5-2.7,2.9-4.3,5.6-4.9L24,31l16.3,2.9c2.7,0.6,5.1,2.2,5.5,4.9L47,47z"
                            data-reactid="206"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="file"
                        className="htmlForm-control-file"
                        id="examplehtmlFormControlFile1"
                      />
                      Maximum size of 1MB. JPG, GIF, or PNG.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <div className="work-exp">
                  <div className="section-header-description">
                    <h2 className="display-2-text">
                      Work Experience and Education
                    </h2>
                    <p className="section-header-subtitle">
                      Tell us about your experience and education to get a
                      personalized learning experience with course
                      recommendations.
                    </p>
                    <div className="htmlForm-group col-6 col-6">
                      <label
                        className="label"
                        htmlFor="examplehtmlFormControlSelect1 label"
                      >
                        Employment Status
                      </label>
                      <select
                        className="htmlForm-control"
                        id="examplehtmlFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <label className="label" htmlFor="">
                        Industry
                      </label>
                      <input type="text" className="htmlForm-control" />
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <label className="label" htmlFor="">
                        Employer
                      </label>
                      <input type="text" className="htmlForm-control" />
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <label className="label" htmlFor="">
                        Occupation
                      </label>
                      <input type="text" className="htmlForm-control" />
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <label
                        className="label"
                        htmlFor="examplehtmlFormControlSelect1"
                      >
                        Experience Level
                      </label>
                      <select
                        className="htmlForm-control"
                        id="examplehtmlFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <div className="htmlForm-check">
                        <input
                          className="htmlForm-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label
                          className="htmlForm-check-label label"
                          htmlFor="gridCheck"
                        >
                          Is it your current employer?
                        </label>
                      </div>
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <label
                        className="label"
                        htmlFor="examplehtmlFormControlSelect1"
                      >
                        Highest Degree
                      </label>
                      <select
                        className="htmlForm-control"
                        id="examplehtmlFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <label className="label" htmlFor="">
                        University
                      </label>
                      <input type="text" className="htmlForm-control" />
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <label
                        className="label"
                        htmlFor="examplehtmlFormControlSelect1"
                      >
                        Field or Major
                      </label>
                      <select
                        className="htmlForm-control"
                        id="examplehtmlFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <div className="htmlForm-check">
                        <input
                          className="htmlForm-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="label" htmlFor="gridCheck">
                          Are you currently a student?
                        </label>
                      </div>
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <label
                        className="label"
                        htmlFor="examplehtmlFormControlSelect1"
                      >
                        Experience Privacy
                      </label>
                      <select
                        className="htmlForm-control"
                        id="examplehtmlFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <div className="career">
                  <div className="section-header-description">
                    <h2 className="display-2-text">Introduction</h2>
                    <p className="section-header-subtitle">
                      Let the Coursera community of other learners and
                      instructors recognize you.
                    </p>

                    <div className="htmlForm-group col-6">
                      <div className="row">
                        <label className="col-htmlForm-label col-sm-4 pt-0 label">
                          Open to new job opportunities?
                        </label>
                        <div className="col-sm-10">
                          <div className="htmlForm-check-inline">
                            <input
                              className="htmlForm-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="option1"
                              // checked
                            />
                            <label className="label" htmlFor="gridRadios1">
                              Yes
                            </label>
                          </div>
                          <div className="htmlForm-check-inline">
                            <input
                              className="htmlForm-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios2"
                              value="option2"
                            />
                            <label className="label" htmlFor="gridRadios2">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="htmlForm-group col-6">
                      <label className="label" htmlFor="">
                        Location
                      </label>
                      <input type="text" className="htmlForm-control" />
                    </div>
                    <div className="htmlForm-group col-6">
                      <label className="label" htmlFor="">
                        /kills Wanted
                      </label>
                      <input type="text" className="htmlForm-control " />
                    </div>
                    <div className="htmlForm-group col-6 col-6">
                      <label className="label" htmlFor="">
                        Preferred Occupation
                      </label>
                      <input type="text" className="htmlForm-control" />
                    </div>
                    <div className="htmlForm-group col-6">
                      <label className="label" htmlFor="">
                        Industry
                      </label>
                      <input type="text" className="htmlForm-control" />
                    </div>
                    <div className="htmlForm-group col-6">
                      <label
                        className="label"
                        htmlFor="examplehtmlFormControlSelect1"
                      >
                        Preferred Level
                      </label>
                      <select
                        className="htmlForm-control col-4"
                        id="examplehtmlFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <button className="btn btn-primary" id="add">
                        <span>+Add preferred occupation</span>
                      </button>
                      <button
                        className="remove btn btn-primary"
                        id="remove"
                        href=""
                      >
                        <span>Remove preferred occupation</span>
                      </button>
                      <div className="content" id="content">
                        <div className="htmlForm-group col-6">
                          <label className="label" htmlFor="">
                            Preferred Occupation
                          </label>
                          <input type="text" className="htmlForm-control" />
                        </div>
                        <div className="htmlForm-group col-6">
                          <label className="label" htmlFor="">
                            Industry
                          </label>
                          <input type="text" className="htmlForm-control" />
                        </div>
                        <div className="htmlForm-group col-6">
                          <label
                            className="label"
                            htmlFor="examplehtmlFormControlSelect1"
                          >
                            Experience Privacy
                          </label>
                          <select
                            className="htmlForm-control"
                            id="examplehtmlFormControlSelect1"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <button
                          className="remove2 btn btn-primary"
                          id="remove2"
                          href=""
                        >
                          <span>Remove preferred occupation</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <div className="detail">
                  <div className="section-header-description">
                    <h2 className="display-2-text">Details About You</h2>
                    <p className="section-header-subtitle">
                      Introduce yourself to the Coursera community. Connect with
                      learners like you to grow your network.
                    </p>

                    <div className="htmlForm-group col-6">
                      <label
                        className="label"
                        htmlFor="examplehtmlFormControlTextarea1"
                      >
                        About Me
                      </label>
                      <textarea
                        className="htmlForm-control"
                        id="examplehtmlFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="htmlForm-group col-6">
                      <label className="label" htmlFor="">
                        Location
                      </label>
                      <input type="text" className="htmlForm-control" />
                    </div>
                    <div className="htmlForm-group col-6">
                      <label className="label" htmlFor="">
                        Top Skills
                      </label>
                      <input type="text" className="htmlForm-control" />
                    </div>
                    <div className="htmlForm-group col-6">
                      <label
                        className="label"
                        htmlFor="examplehtmlFormControlSelect1"
                      >
                        Website URL
                      </label>
                      <select
                        className="htmlForm-control "
                        id="examplehtmlFormControlSelect1"
                      >
                        <option>LinkedIn</option>
                        <option>Facebook</option>
                        <option>Twitter</option>
                        <option>Google+</option>
                        <option>Github</option>
                        <option>Other</option>
                      </select>
                      <input type="text" className="htmlForm-control" />
                      <button className="addweb btn btn-primary" id="addweb">
                        <span>+ Add website</span>
                      </button>
                      <div className="website" id="website">
                        <select
                          className="htmlForm-control"
                          id="examplehtmlFormControlSelect1"
                        >
                          <option>LinkedIn</option>
                          <option>Facebook</option>
                          <option>Twitter</option>
                          <option>Google+</option>
                          <option>Github</option>
                          <option>Other</option>
                        </select>
                        <input type="text" className="htmlForm-control" />
                      </div>
                    </div>

                    <fieldset className="htmlForm-group col-8">
                      <div className="row">
                        <label className="col-htmlForm-label col-sm-2 pt-0 label">
                          Gender
                        </label>
                        <div className="col-sm-10">
                          <div className="htmlForm-check-inline">
                            <input
                              className="htmlForm-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="option1"
                              // checked
                            />
                            <label
                              className="htmlForm-check-label"
                              htmlFor="gridRadios1"
                            >
                              Female
                            </label>
                          </div>
                          <div className="htmlForm-check-inline">
                            <input
                              className="htmlForm-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios2"
                              value="option2"
                            />
                            <label
                              className="htmlForm-check-label"
                              htmlFor="gridRadios2"
                            >
                              Male
                            </label>
                          </div>
                          <div className="htmlForm-check-inline">
                            <input
                              className="htmlForm-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios2"
                              value="option2"
                            />
                            <label
                              className="htmlForm-check-label"
                              htmlFor="gridRadios2"
                            >
                              Other
                            </label>
                          </div>
                          <div className="htmlForm-check-inline">
                            <input
                              className="htmlForm-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios2"
                              value="option2"
                            />
                            <label
                              className="htmlForm-check-label"
                              htmlFor="gridRadios2"
                            >
                              d rather not say
                            </label>
                          </div>
                          <div className="htmlForm-check-inline">Optional</div>
                        </div>
                      </div>
                    </fieldset>
                    <form className="htmlForm-group col-6">
                      <label
                        className="label"
                        htmlFor="examplehtmlFormControlSelect1"
                      >
                        Birthday
                      </label>
                      <div className="htmlForm-row">
                        <select
                          className="htmlForm-control col-2"
                          id="examplehtmlFormControlSelect1"
                        >
                          <option>Month</option>
                          <option>Jan</option>
                          <option>Feb</option>
                          <option>Mar</option>
                          <option>Apr</option>
                          <option>May</option>
                          <option>Jun</option>
                          <option>Jul</option>
                          <option>Aug</option>
                          <option>Sep</option>
                          <option>Oct</option>
                          <option>Nov</option>
                          <option>Dec</option>
                        </select>
                        <select
                          className="htmlForm-control col-2"
                          id="examplehtmlFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <select
                          className="htmlForm-control col-2"
                          id="examplehtmlFormControlSelect1"
                        >
                          <option>1999</option>
                          <option>2000</option>
                          <option>2001</option>
                          <option>2002</option>
                          <option>2003</option>
                        </select>
                        <span>Optional</span>
                      </div>
                    </form>
                    <div className="htmlForm-group col-6">
                      <label className="label">Details Privacy</label>
                      <select
                        className="htmlForm-control col-6"
                        id="examplehtmlFormControlSelect1"
                      >
                        <option>Only me</option>
                        <option>The coursera community</option>
                        <option>Everyone on the web</option>
                        <option>2002</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <div className="htmlForm-group col-6">
                  <p>
                    Note: Discussion htmlForum posts and peer review submissions
                    will always show your name and profile image to other
                    learners in your courses. Course ratings and reviews you
                    submit may show your profile image to anyone viewing
                    Coursera’s catalog. Read our{" "}
                    <a href="#">
                      <span> Privacy Policy</span>
                    </a>{" "}
                    to learn more.
                  </p>
                  <button
                    className="primary cozy"
                    type="submit"
                    data-update="#coursera-profile-editor-status"
                    data-default-message="Save Changes"
                    data-inflight-message="Saving..."
                    data-success-message="Save Changes"
                    data-reactid="655"
                  >
                    Save Changes
                  </button>
                  <p className="caption-text color-secondary-text">
                    Your changes were successfully saved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
