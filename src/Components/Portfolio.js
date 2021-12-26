import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works and Accomplishments .</h1>
          <h4>
            <i>Projects :</i>{" "}
          </h4>
          <br />
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
          <hr style={{ color: "black" }} />
          <h4>
            <i>Accomplishments :</i>{" "}
          </h4>
          <br />
          <h5 style={{ color: "#636363" }}>
            Tie University Global Business Hackathon 2021 | Winning team
          </h5>
          <h5 style={{ color: "#636363" }}>Technica 2020 | Winning team</h5>

          <h5 style={{ color: "#636363" }}>
            Smart India Hackathon 2019 | Winning team{" "}
          </h5>
          <hr style={{ color: "black" }} />
          <h4>
            <i>OpenSource :</i>{" "}
          </h4>
          <ul class="fa-ul mb-0">
            <li>
              <a href="">
                Meshery/Meshery
              </a>
            </li>
            <li>
              <a href="https://github.com/Ignitus/Ignitus-client/pulls?q=is\%3Apr+is\%3Aclosed+author\%3AMeghana-12">
                IGNITUS/IGNITUS-CLIENT
              </a>
            </li>
          
            <br />
            <li>
              <i>
                Completed <h4>Hacktoberfest Challange 2020</h4> by making the
                following Contributions :
              </i>
              <ul>
                <li>
                  <a href="https://github.com/Python-World/Python_and_the_Web/pull/94">
                    {" "}
                    Script to convert JSON to EXCEL to
                    Python-World/Python_and_the_Web
                  </a>
                </li>
                <li>
                  <a href="https://github.com/pandas-dev/pandas/pull/36857">
                    doc/source/whatsnew to pandas-dev/pandas
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Py-Contributors/AlgorithmsAndDataStructure/pull/539">
                    {" "}
                    Added Longest common Subsequence | Dynamic Programming |
                    Python to Py-Contributors/AlgorithmsAndDataStructure{" "}
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Py-Contributors/AlgorithmsAndDataStructure/pull/548">
                    Eulerian Path | Algorithms | Python to
                    Py-Contributors/AlgorithmsAndDataStructure
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
