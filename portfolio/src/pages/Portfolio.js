import React from "react";


function Portfolio() {
  return (
    <div>
      <div className="container about-me">
        <div className="row ">
          <div className="col-sm-12">
            <h3 className="header-margin">Portfolio</h3>
            <hr className="hr-margin" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="row justify-content-center">
              <div className="card border-0" >
                <img
                  src="assets/images/nightout-screenshot.JPG"
                  className="card-img-top project-img"
                  alt="night-out-screenshot"
                />
                <div className="card-body">
                  <h5 className="card-title">Night Out</h5>
                  <p className="card-text">
                    A browser based application that generates plans for a night
                    out.
                  </p>
                  <a href="projects/nightout.html" className="card-link">
                    Read More
                  </a>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row justify-content-center">
              <div className="card border-0">
                <img
                  src="assets/images/menu-maqr-screenshot.JPG"
                  className="card-img-top"
                  alt="menu-maqr-screenshot"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 2</h5>
                  <p className="card-text">
                    A node based application that uses MySQL, Express, and
                    additional middleware to generate custom food menus and
                    assign unique QR codes.
                  </p>
                  <a href="projects/menumaqr.html" className="card-link">
                    Read More
                  </a>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="row justify-content-center">
              <div className="card border-0" >
                <img
                  src="https://via.placeholder.com/200"
                  className="card-img-top"
                  alt="project-3"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 3</h5>
                  <p className="card-text">
                    Placeholder text and image until applicable workproduct is
                    completed.
                  </p>
                    Read More
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row justify-content-center">
              <div className="card border-0" >
                <img
                  src="https://via.placeholder.com/200"
                  className="card-img-top"
                  alt="project-4"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 4</h5>
                  <p className="card-text">
                    Placeholder text and image until applicable workproduct is
                    completed.
                  </p>
                    Read more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
