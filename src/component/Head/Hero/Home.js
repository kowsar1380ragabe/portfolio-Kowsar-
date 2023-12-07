import React from "react";
import "./Home.css";
import hero from "../../../assets/kk.jfif";
import skill1 from "../../../assets/R.png";
import skill2 from "../../../assets/RR.png";
import skill3 from "../../../assets/OIP.jfif";
import skill4 from "../../../assets/you.jpg";
import skill5 from "../../../assets/t.png";
import skill6 from "../../../assets/in.png";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi,I'm <span>kowsar ragabe</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={["professional coder.", "Developer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  deleaySpeed={1000}
                />
              </span>
            </h2>
            <p>
              {
                "i am kowsar ragabe my father name is nasroollah i am kowsar ragabe my father name is nasroollahi am kowsar ragabe my father name is nasroollahi am kowsar ragabe my father name is nasroollah "
              }
            </p>
            <h4>FIND WITH ME</h4>
            <div className=" hero-btn d-flex">
              <img
                src={skill1}
                style={{ width: "100px", height: "100px" }}
              ></img>{" "}
              <img
                src={skill2}
                style={{ width: "100px", height: "100px" }}
              ></img>
              <img
                src={skill3}
                style={{ width: "100px", height: "100px" }}
              ></img>
              <div className="col-1">
                <div className="botton">
                  <button className="btn-shadow">
                    <i className="fab fa-facebok-f"></i>
                  </button>
                  <button className="btn-shadow">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button className="btn-shadow">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col-1">
                <h4>BEST SKILL ON</h4>
                <button className="btn-shadow">
                  <img
                    src={skill4}
                    style={{ width: "100px", height: "100px" }}
                  />
                </button>
                <button className="btn-shadow">
                  <img
                    src={skill5}
                    style={{ width: "100px", height: "100px" }}
                  />
                </button>
                <button className="btn-shadow">
                  <img
                    src={skill6}
                    style={{ width: "100px", height: "100px" }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-img">
              <img src={hero} alt=""></img>
              {/* <div className="iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420915.18443239393!2d62.51569986236582!3d34.49274531284509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3cfb71f14e85e7%3A0x32512f54afaadb4c!2z2YjZhNiz2YjYp9mE24wg2KfZhtis24zZhNiMINin2YHYutin2YbYs9iq2KfZhg!5e0!3m2!1sfa!2s!4v1701157831401!5m2!1sfa!2s" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
