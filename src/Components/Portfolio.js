import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              {/* <a href={projects.url} title={projects.title} target="_blank"> */}
              <Popup
                trigger={<img alt={projects.title} src={projectImage} />}
                modal
              >
                <a
                  href={projects.url}
                  title={projects.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt={projects.title} src={projectImage} />
                </a>
                <div className="link-icon">
                  <a
                    href={projects.url}
                    title={projects.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                </div>

                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>

                {/* </a> */}
              </Popup>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
