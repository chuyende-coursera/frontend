/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./bodyHomePage.css";

function BodyHomePage() {
  return (
    <Fragment>
      <section className="outcome">
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
            <div className="col-6">
              <div>
                <h2>Learner outcomes on Coursera</h2>
                <h3>
                  87% of people learning for professional development report
                  career benefits like getting a promotion, a raise, or starting
                  a new career
                </h3>
                <span>Coursera Learner Outcomes Survey (2019)</span>
                <div>
                  <button className="btn btn-primary">Join for Free</button>
                  <button className="btn btn-default">
                    Try Coursera for Bussiness
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collab">
        <div className="container mt-4 text-center">
          <div className="row ">
            <span>
              We collaborate with{" "}
              <Link to="#">190+ leading universities and companies</Link>
            </span>
          </div>

          <div className="collaborate">
            <Link to="#">
              <img
                style={{ maxHeight: "32px" }}
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/illinois.svg?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=32"
              />
            </Link>
            <Link to="#">
              <img
                style={{ maxHeight: "37px" }}
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/duke.svg?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=37"
              />
            </Link>
            <Link to="#">
              <img
                style={{ maxHeight: "32px" }}
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/google.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=37"
              />
            </Link>
            <Link to="#">
              <img
                style={{ maxHeight: "55px" }}
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/umich.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=55"
              />
            </Link>
            <Link to="#">
              <img
                style={{ maxHeight: "32px" }}
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/ibm.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=32"
              />
            </Link>
          </div>
          <hr />
        </div>
      </section>
      <section className="archieve">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Achieve your goals with Coursera</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaLearn.svg?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=55" />
                <h3>Learn the latest skills</h3>
                <span>
                  like business analytics, graphic design, Python, and more
                </span>
              </div>
            </div>
            <div className="col-3">
              <div>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/teacher-img.svg?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=55" />
                <h3>Get ready for a career</h3>
                <span>
                  in high-demand fields like IT, AI and cloud engineering
                </span>
              </div>
            </div>

            <div className="col-3">
              <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaColorCertificate.svg?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=55" />
              <h3>Earn a certificate or degree </h3>
              <span>
                from a leading university in business, computer science, and
                more
              </span>
            </div>
            <div className="col-3">
              <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaCommunity.svg?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=55" />
              <h3>Upskill your organization </h3>
              <span>with on-demand training and development programs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="worldclassName">
        <div className="container">
          <h1 className="text-center">
            World-className learning for anyone, anywhere
          </h1>

          <div className="row h-100">
            <div className="col-5 my-auto">
              <h4>TOP QUALITY</h4>
              <h3>Learn from leading universities and companies</h3>
              <div className="separate "></div>
              <p>
                <span>
                  Start streaming on-demand video lectures today from top
                  instructors in subjects like <Link to="#">business</Link>,{" "}
                  <Link to="#">computer science</Link>,{" "}
                  <Link to="#">data science</Link>,{" "}
                  <Link to="#">language learning</Link>, & more.
                </span>
              </p>
            </div>
            <div className="col-7">
              <div>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/andrewng.png?auto=format%2Ccompress&amp;dpr=1&amp;w=695&amp;h=" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row h-100">
            <div className="col-5">
              <div>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/offerings2.png?auto=format%2Ccompress&amp;dpr=1&amp;w=386&amp;h=" />
              </div>
            </div>
            <div className="col-7 my-auto">
              <h4>Accessible</h4>
              <h3>Find flexible, affordable options </h3>
              <div className="separate"></div>
              <p>
                <span>
                  Choose from many options including free courses and{" "}
                  <Link to="#">university degrees</Link> at a breakthrough
                  price. Learn at your own pace, 100% online.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row h-100">
            <div className="col-5 my-auto">
              <h4>Applied Learning</h4>
              <h3>Master skills with in-depth learning</h3>
              <div className="separate"></div>
              <p>
                <span>
                  Apply what you learn with self-paced quizzes and hands-on
                  projects. Get feedback from a global community of learners.
                </span>
              </p>
            </div>
            <div className="col-7">
              <div>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/quizCompletion.png?auto=format%2Ccompress&amp;dpr=1&amp;w=820&amp;h=" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row h-100">
            <div className="col-5">
              <div>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/certificates4.png?auto=format%2Ccompress&amp;dpr=1&amp;w=546&amp;h=" />
              </div>
            </div>
            <div className="col-7 my-auto">
              <div style={{ marginLeft: "100px" }}>
                <h4>Shareable Certificates</h4>
                <h3>Earn industry-recognized credentials</h3>
                <div className="separate"></div>
                <p>
                  <span>
                    Demonstrate your new skills by sharing your Course
                    Certificate,
                    <Link to="#">Professional Certificate</Link>,
                    <Link to="#">MasterTrack™ Certificate</Link>, or diploma
                    with your network.{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fromcommunity h-100">
        <div className="container my-auto">
          <div className="text-center">
            <h3 className="rc-SocialProofContainer__title">
              From the Coursera community
            </h3>
            <h4 className="rc-SocialProofContainer__subtitle">
              45+ million people are already learning on Coursera
            </h4>
          </div>
        </div>
        <div className="container">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-4">
                    <div>
                      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/julio.png?auto=format%2Ccompress&amp;dpr=1&amp;w=270&amp;h=" />
                      <h3 className="rc-SocialProofItem__name">Julio R.</h3>
                      <h4 className="rc-SocialProofItem__title">
                        Web Developer
                      </h4>
                      <h4 className="rc-SocialProofItem__subtitle">Chile</h4>
                      <div className="separate"></div>
                      <p>
                        <span>
                          I started at stage zero. With Coursera I was able to
                          start learning online and eventually build up enough
                          knowledge and skills to{" "}
                          <strong>transition into a well-paying career</strong>.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div>
                      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/kara.png?auto=format%2Ccompress&amp;dpr=1&amp;w=270&amp;h=" />
                      <h3 className="rc-SocialProofItem__name">Julio R.</h3>
                      <h4 className="rc-SocialProofItem__title">
                        iMBA Graduate, University of Illinois Gies College of
                        Business
                      </h4>
                      <h4 className="rc-SocialProofItem__subtitle">
                        United States
                      </h4>
                      <div className="separate"></div>
                      <p>
                        <span>
                          It’s a really big deal to offer an online MBA that’s a{" "}
                          <strong>real MBA at a price that’s achievable</strong>
                          . This program is totally disrupting higher education.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div>
                      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/mirela-decorative.png?auto=format%2Ccompress&amp;dpr=1&amp;w=270&amp;h=" />
                      <h3 className="rc-SocialProofItem__name">Mirela I.</h3>
                      <h4 className="rc-SocialProofItem__title">
                        IBM Data Science Professional Certificate Alumna
                      </h4>
                      <h4 className="rc-SocialProofItem__subtitle">Romania</h4>
                      <div className="separate"></div>
                      <p>
                        <span>
                          <strong>
                            Recruiters saw my Professional Certificate
                          </strong>{" "}
                          on my LinkedIn profile. During the interview, they
                          told me{" "}
                          <strong>
                            they were impressed with the skills I learned
                          </strong>
                          . I got the job!
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-4">
                    <div>
                      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/kara.png?auto=format%2Ccompress&amp;dpr=1&amp;w=270&amp;h=" />
                      <h3 className="rc-SocialProofItem__name">Julio R.</h3>
                      <h4 className="rc-SocialProofItem__title">
                        iMBA Graduate, University of Illinois Gies College of
                        Business
                      </h4>
                      <h4 className="rc-SocialProofItem__subtitle">
                        United States
                      </h4>
                      <div className="separate"></div>
                      <p>
                        <span>
                          It’s a really big deal to offer an online MBA that’s a{" "}
                          <strong>real MBA at a price that’s achievable</strong>
                          . This program is totally disrupting higher education.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div>
                      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/mirela-decorative.png?auto=format%2Ccompress&amp;dpr=1&amp;w=270&amp;h=" />
                      <h3 className="rc-SocialProofItem__name">Mirela I.</h3>
                      <h4 className="rc-SocialProofItem__title">
                        IBM Data Science Professional Certificate Alumna
                      </h4>
                      <h4 className="rc-SocialProofItem__subtitle">Romania</h4>
                      <div className="separate"></div>
                      <p>
                        <span>
                          <strong>
                            Recruiters saw my Professional Certificate
                          </strong>{" "}
                          on my LinkedIn profile. During the interview, they
                          told me{" "}
                          <strong>
                            they were impressed with the skills I learned
                          </strong>
                          . I got the job!
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div>
                      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/sabrina.png?auto=format%2Ccompress&amp;dpr=1&amp;w=270&amp;h=" />
                      <h3 className="rc-SocialProofItem__name">Sabrina M.</h3>
                      <h4 className="rc-SocialProofItem__title">
                        HR Manager, ZS Associates
                      </h4>
                      <h4 className="rc-SocialProofItem__subtitle">
                        United States
                      </h4>
                      <div className="separate"></div>
                      <p>
                        <span>
                          We were looking for scale, credibility, and something
                          we didn’t have to build in-house. Coursera not only
                          offers{" "}
                          <strong>
                            training from very prestigious institutions
                          </strong>{" "}
                          but also a platform that allows you to do the tracking
                          that you want.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              className="carousel-control-prev"
              to="#myCarousel"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon">pre</span>
            </Link>
            <Link
              className="carousel-control-next"
              to="#myCarousel"
              data-slide="next"
            >
              <span className="carousel-control-next-icon">next</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="toward">
        <div className="container">
          <div className="row h-100">
            <div className="col-6">
              <div>
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/secondary-consumer-cta/secondary-consumer-hero-img.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=250" />
              </div>
            </div>
            <div className="col-6 my-auto ">
              <div>
                <p>
                  <span>
                    <strong>Take the next step</strong> toward your personal and
                    professional goals with Coursera.
                  </span>
                </p>
                <span className="subtitle">
                  Join now to receive personalized recommendations from the full
                  Coursera catalog.
                </span>
                <br />
                <button className="btn btn-primary">Join for Free</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="last">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div>
                <p className="rc-EnterpriseCta__logos-caption">
                  <span className="emphasized">2,000+</span>
                  <span className="subtitle">
                    Coursera for Business customers
                  </span>
                </p>
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto auto",
                    gridGap: "10px",
                    listStyleType: "none",
                    padding: "10px",
                  }}
                >
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      alt="L'OREAL"
                      src="https://d2j5ihb19pt1hq.cloudfront.net/front-page-story/enterprise-partners/loreal.svg"
                      width="110"
                      height="20"
                    />
                  </li>
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      alt="Procter &amp; Gamble"
                      src="https://d2j5ihb19pt1hq.cloudfront.net/front-page-story/enterprise-partners/pandg.svg"
                      width="45"
                      height="45"
                    />
                  </li>
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      alt="Novartis"
                      src="https://d2j5ihb19pt1hq.cloudfront.net/front-page-story/enterprise-partners/novartis.svg"
                      width="154"
                      height="25"
                    />
                  </li>
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/enterprise-partners/telenor.png?auto=format%2Ccompress&amp;dpr=1&amp;w=80&amp;h=36"
                      srcSet="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/enterprise-partners/telenor.png?auto=format%2Ccompress&amp;dpr=2&amp;w=80&amp;h=36 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/enterprise-partners/telenor.png?auto=format%2Ccompress&amp;dpr=3&amp;w=80&amp;h=36 3x"
                      style={{ maxWidth: "80px", maxHeight: "36px" }}
                      alt="Telenor"
                    />
                  </li>
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      alt="Airbus"
                      src="https://d2j5ihb19pt1hq.cloudfront.net/front-page-story/enterprise-partners/airbus.svg"
                      width="115"
                      height="21"
                    />
                  </li>
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      alt="Axis Bank"
                      src="https://d2j5ihb19pt1hq.cloudfront.net/front-page-story/enterprise-partners/axisbank.svg"
                      width="120"
                      height="33"
                    />
                  </li>
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      alt="Accelya"
                      src="https://d2j5ihb19pt1hq.cloudfront.net/front-page-story/enterprise-partners/accelya.svg"
                      width="100"
                      height="28"
                    />
                  </li>
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      alt="Tata Communications"
                      src="https://d2j5ihb19pt1hq.cloudfront.net/front-page-story/enterprise-partners/tata.svg"
                      width="50"
                      height="46"
                    />
                  </li>
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      alt="AXA"
                      src="https://d2j5ihb19pt1hq.cloudfront.net/front-page-story/enterprise-partners/axa.svg"
                      width="45"
                      height="45"
                    />
                  </li>
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/enterprise-partners/danone.png?auto=format%2Ccompress&amp;dpr=1&amp;w=120&amp;h=40"
                      srcSet="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/enterprise-partners/danone.png?auto=format%2Ccompress&amp;dpr=2&amp;w=120&amp;h=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/enterprise-partners/danone.png?auto=format%2Ccompress&amp;dpr=3&amp;w=120&amp;h=40 3x"
                      style={{ maxWidth: "80px", maxHeight: "36px" }}
                      alt="Danone"
                    />
                  </li>
                  <li className="rc-EnterpriseCta__enterprise-image">
                    <img
                      alt="SK Telecom"
                      src="https://d2j5ihb19pt1hq.cloudfront.net/front-page-story/enterprise-partners/sk.svg"
                      width="45"
                      height="35"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div>
                <h2>Coursera for Business</h2>
                <p>
                  We’ve got the solution: world-className training and
                  development programs developed by top universities and
                  companies. All on Coursera for Business.
                </p>
                <button className="btn btn-default">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <section className="foot">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div>
                  <h4>Top Online Courses</h4>
                  <ul>
                    <li>
                      <Link to="#">AI for Everyone</Link>
                    </li>
                    <li>
                      <Link to="#">Introduction to TensorFlow</Link>
                    </li>
                    <li>
                      <Link to="#">Neural Networks and Deep Learning</Link>
                    </li>
                    <li>
                      <Link to="#">Algorithms, Part 1</Link>
                    </li>
                    <li>
                      <Link to="#">Algorithms, Part 2</Link>
                    </li>
                    <li>
                      <Link to="#">Machine Learning</Link>
                    </li>
                    <li>
                      <Link to="#">Machine Learning with Python</Link>
                    </li>
                    <li>
                      <Link to="#">Machine Learning Using Sas Viya</Link>
                    </li>
                    <li>
                      <Link to="#">R Programming</Link>
                    </li>
                    <li>
                      <Link to="#">Intro to Programming with Matlab</Link>
                    </li>
                    <li>
                      <Link to="#">Data Analysis with Python</Link>
                    </li>
                    <li>
                      <Link to="#">AWS Fundamentals: Going Cloud Native</Link>
                    </li>
                    <li>
                      <Link to="#">Google Cloud Platform Fundamentals</Link>
                    </li>
                    <li>
                      <Link to="#">Site Reliability Engineering</Link>
                    </li>
                    <li>
                      <Link to="#">Speak English Professionally</Link>
                    </li>
                    <li>
                      <Link to="#">The Science of Well Being</Link>
                    </li>
                    <li>
                      <Link to="#">Learning How to Learn</Link>
                    </li>
                    <li>
                      <Link to="#">Financial Markets</Link>
                    </li>
                    <li>
                      <Link to="#">Hypothesis Testing in Public Health</Link>
                    </li>
                    <li>
                      <Link to="#">Foundations of Everyday Leadership</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div>
                  <h4>Top Online Specializations</h4>
                  <ul>
                    <li>
                      <Link to="#">Deep Learning</Link>
                    </li>
                    <li>
                      <Link to="#">Python for Everybody</Link>
                    </li>
                    <li>
                      <Link to="#">Data Science</Link>
                    </li>
                    <li>
                      <Link to="#">Applied Data Science with Python</Link>
                    </li>
                    <li>
                      <Link to="#">Business Foundations</Link>
                    </li>
                    <li>
                      <Link to="#">
                        Architecting with Google Cloud Platform
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Data Engineering on Google Cloud Platform
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Excel to MySQL</Link>
                    </li>
                    <li>
                      <Link to="#">Advanced Machine Learning</Link>
                    </li>
                    <li>
                      <Link to="#">Mathematics for Machine Learning</Link>
                    </li>
                    <li>
                      <Link to="#">Self-Driving Cars</Link>
                    </li>
                    <li>
                      <Link to="#">
                        Blockchain Revolution for the Enterprise
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Business Analytics</Link>
                    </li>
                    <li>
                      <Link to="#">Excel Skills for Business</Link>
                    </li>
                    <li>
                      <Link to="#">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="#">
                        Statistical Analysis with R for Public Health
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Fundamentals of Immunology</Link>
                    </li>
                    <li>
                      <Link to="#">Anatomy</Link>
                    </li>
                    <li>
                      <Link to="#">
                        Managing Innovation and Design Thinking
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Foundations of Positive Psychology</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div>
                  <h4>Online Certificate</h4>
                  <ul>
                    <li>
                      <Link to="#">Google IT Support</Link>
                    </li>
                    <li>
                      <Link to="#">IBM Customer Engagement Specialist</Link>
                    </li>
                    <li>
                      <Link to="#">IBM Data Science</Link>
                    </li>
                    <li>
                      <Link to="#">Applied Project Management</Link>
                    </li>
                    <li>
                      <Link to="#">
                        IBM Applied AI Professional Certificate
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Machine Learning for Analytics </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Spatial Data Analysis and Visualization
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Construction Engineering and Management
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Instructional Design</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div>
                  <h4>Online Degree Programs</h4>
                  <ul>
                    <li>
                      <Link to="#">Master in Data Science</Link>
                    </li>
                    <li>
                      <Link to="#">Bachelors Degree in Computer Science</Link>
                    </li>
                    <li>
                      <Link to="#">
                        Computer Science and Engineering Degrees
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Master in Machine Learning</Link>
                    </li>
                    <li>
                      <Link to="#">MBA and Business Degrees</Link>
                    </li>
                    <li>
                      <Link to="#">Master in Electrical Engineering</Link>
                    </li>
                    <li>
                      <Link to="#">Master in Public Health</Link>
                    </li>
                    <li>
                      <Link to="#">Master in Information Technology</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div>
                  <h4>Coursera</h4>
                  <ul>
                    <li>
                      <Link to="#">About</Link>
                    </li>
                    <li>
                      <Link to="#">Leadership</Link>
                    </li>
                    <li>
                      <Link to="#">Careers</Link>
                    </li>
                    <li>
                      <Link to="#">Catalog</Link>
                    </li>
                    <li>
                      <Link to="#">Certificates</Link>
                    </li>
                    <li>
                      <Link to="#">MasterTrack™ Certificates</Link>
                    </li>
                    <li>
                      <Link to="#">Degrees</Link>
                    </li>
                    <li>
                      <Link to="#">For Enterprise</Link>
                    </li>
                    <li>
                      <Link to="#">For Government</Link>
                    </li>
                    <li>
                      <Link to="#">For Campus</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div>
                  <h4>Community</h4>
                  <ul>
                    <li>
                      <Link to="#">Learners</Link>
                    </li>
                    <li>
                      <Link to="#">Partners</Link>
                    </li>
                    <li>
                      <Link to="#">Developers</Link>
                    </li>
                    <li>
                      <Link to="#">Beta Testers</Link>
                    </li>
                    <li>
                      <Link to="#">Translators</Link>
                    </li>
                    <li>
                      <Link to="#">Blog</Link>
                    </li>
                    <li>
                      <Link to="#">Tech Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div>
                  <h4>More</h4>
                  <ul>
                    <li>
                      <Link to="#">Terms</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy</Link>
                    </li>
                    <li>
                      <Link to="#">Help</Link>
                    </li>
                    <li>
                      <Link to="#">Accessibility</Link>
                    </li>
                    <li>
                      <Link to="#">Press</Link>
                    </li>
                    <li>
                      <Link to="#">Contact</Link>
                    </li>
                    <li>
                      <Link to="#">Directory</Link>
                    </li>
                    <li>
                      <Link to="#">Affiliates</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div style={{ marginLeft: "40px" }}>
                  <Link to="#">
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg"
                      alt="Download on the App Store"
                      height="45"
                    />
                  </Link>
                  <Link to="#">
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png"
                      alt="Get it on Google Play"
                      height="45"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12" style={{ display: "flex" }}>
                <div>
                  <p>@ 2020 Coursera Inc. All rights reserved.</p>
                </div>
                <div>
                  <ul style={{ display: "flex", flexWrap: "nowrap" }}>
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </Fragment>
  );
}

export default BodyHomePage;
