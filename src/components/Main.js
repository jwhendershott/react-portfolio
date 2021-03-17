import React from "react";
import "../styles/style.css";
import image from "../assets/images/Jake-0018.jpg";

function Main() {
    return (
      <div>
    <main>
      <div className="container about-me">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="header-margin">About Me</h3>
            <hr className="hr-margin"/>
          </div>
        </div>


        <div className="row">
          <div className="col-sm-12">
            <p>
              <img width="200" src={image} alt="about me photo" className="left"/>

              I began my journey into web development in 2016 while working as a video and photo editor for a small
              digital marketing agency. I was eventually moved into a
              position as a designer and shared an office with a developer who would often push me to learn html to make
              my (as well as his) job easier. I have classNamees and
              experience with MySQL, XML, and Python. As a student in the Coding Bootcamp at UT I am excited to gain
              more
              knowledge and skills and pursue a career in web developement.
              <br/>
              <br/>
              I currently live in Amarillo, TX with my wife and two dogs. When I'm not learning I enjoy playing video
              games, guitar, and riding my bike.
            </p>
          </div>
        </div>
      </div>
    </main>
      </div>
    );
  }

export default Main;