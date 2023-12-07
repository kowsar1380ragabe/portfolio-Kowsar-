import React from "react";
import Card from "./card";
import data from "./Homework.Api";
import "./Homework.Api";
import homework1 from "../../../src/assets/h1.png";
import homework2 from "../../../src/assets/h2.png";
import homework3 from "../../../src/assets/h3.png";
const Homework = () => {
  return (
    <>
      <section className="Homework top" id="Homework">
        <div className="container">
          <div className="heading">
            <h4>Homework</h4>
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
      </section>
      <p>homework1</p>
      <img src={homework1} style={{ width: "450px", height: "300px" }} />
      <br />
      <p>homework2</p>

      <img src={homework2} style={{ width: "450px", height: "300px" }} />
      <br />
      <p> homework3</p>

      <img src={homework3} style={{ width: "440px", height: "300px" }} />
    </>
  );
};
export default Homework;
