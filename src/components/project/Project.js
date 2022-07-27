import React from "react";
import "./Project.css";
import Pro1 from "../../assets/img/pro1.jpg";
import Pro2 from "../../assets/img/pro2.jpg";
import Pro3 from "../../assets/img/pro3.jpg";
import Pro4 from "../../assets/img/pro4.jpg";

const Project = () => {
  return (
    <div className="blog component__space " id="Project">
      <div className="heading text__align__center">
        <h1 className="heading">My project</h1>
        <p className="p__color">These are my projects</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Pro1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Dashboard</h5>
                <h4 className="project__text">
                  ReactJs . Material-ui . Recharts
                </h4>
                <a
                  href="https://minhdang1202.github.io/dashboard/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Pro2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Web-film</h5>
                <h4 className="project__text">ReactJs</h4>
                <a
                  href="https://minhdang1202.github.io/my-film/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Pro4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">App ecommerce</h5>
                <h4 className="project__text">
                  ReactJs . Material . React-dom
                </h4>
                <a
                  href="https://minhdang1202.github.io/ecommerce-app/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Pro3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">App ecommerce</h5>
                <h4 className="project__text">ReactJs</h4>
                <a
                  href="https://ecommerce-app-sanity-f4rqzd68r-minhdang1202.vercel.app/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
