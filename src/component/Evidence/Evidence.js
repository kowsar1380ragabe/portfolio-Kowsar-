import React from "react";
import Card from "./Card";
import data from "./Evidence.Api";
import "./Evidence.css";
import evidence1 from "../../../src/assets/images/e1.jpg";
import evidence2 from "../../../src/assets/images/e2.jpg";
import evidence3 from "../../../src/assets/images/e3.jpg";
import evidence4 from "../../../src/assets/images/e4.jpg";
import evidence5 from "../../../src/assets/images/e7.jpg";
import evidence6 from "../../../src/assets/images/e6.jpg";
const Evidence = () => {
  return (
    <>
      <section className="evidence top" id="evidence">
        <div className="container">
          <div className="heading">
            <h4>Evidence</h4>
            <h1>What I DO</h1>
          </div>
          <div className="content grid">
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  image={val.image}
                  title={val.title}
                  desc={val.desc}
                />
              );
            })}
          </div>
        </div>
        <section>
          <div className="homework1">
            <p>evidence1</p>
            <img src={evidence1} style={{ width: "450px", height: "400px" }} />
          </div>
          <div className="homework2">
            {" "}
            <p>evidence2</p>
            <img src={evidence2} style={{ width: "450px", height: "400px" }} />
          </div>
          <div className="homework3">
            {" "}
            <p>evidence3</p>
            <img src={evidence3} style={{ width: "450px", height: "400px" }} />
          </div>
          <div className="homework4">
            {" "}
            <p>evidence4</p>
            <img src={evidence4} style={{ width: "450px", height: "400px" }} />
          </div>
          <div className="homework5">
            {" "}
            <p>evidence5</p>
            <img src={evidence5} style={{ width: "450px", height: "400px" }} />
          </div>
          <div className="homework6">
            {" "}
            <p>evidence6</p>
            <img src={evidence6} style={{ width: "450px", height: "400px" }} />
          </div>
        </section>
      </section>
    </>
  );
};
export default Evidence;
