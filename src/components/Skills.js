
import reactLogo from "../assets/img/reactLogo.png"
import nodeLogo from "../assets/img/nodeLogo.png"
import mongoLogo from "../assets/img/mongoLogo.png"
import logojavascript from "../assets/img/logo-javascript.svg"
import pythonLogo from "../assets/img/python-4.svg"
import cppLogo from "../assets/img/c.svg"
import dockerLogo from "../assets/img/docker-4.svg"
import redisLogo from "../assets/img/redis.svg"
import typescriptLogo from "../assets/img/typescript.svg"
import nextLogo from "../assets/img/next-js.svg"
import reduxLogo from "../assets/img/redux.svg"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My technical skills and the tech stack that I use are quite diverse<br></br> I like to discover industry-relevant technologies and explore their applications.<br></br>This list gets updated frequently, check-in again to see what I'm up to these days</p>
                        <Carousel centerMode={true} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactLogo} alt="Image" className="skill-Img"/>
                                <h5 className="sliderTitle">React.Js</h5>
                            </div>
                            <div className="item">
                                <img src={nextLogo} alt="Image" />
                                <h5 className="sliderTitle">Next.Js</h5>
                            </div>
                            <div className="item" >
                                <img src={nodeLogo} alt="Image" />
                                <h5 className="sliderTitle">Node.Js</h5>
                            </div>
                            <div className="item">
                                <img src={mongoLogo} alt="Image" />
                                <h5 className="sliderTitle">MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={logojavascript} alt="Image" />
                                <h5 className="sliderTitle">Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={reduxLogo} alt="Image" />
                                <h5 className="sliderTitle">Redux</h5>
                            </div>
                            <div className="item">
                                <img src={pythonLogo} alt="Image" />
                                <h5 className="sliderTitle">Python</h5>
                            </div>
                            <div className="item">
                                <img src={cppLogo} alt="Image" />
                                <h5 className="sliderTitle">C++</h5>
                            </div>
                            <div className="item">
                                <img src={dockerLogo} alt="Image" />
                                <h5 className="sliderTitle">Docker</h5>
                            </div>
                            <div className="item">
                                <img src={redisLogo} alt="Image" />
                                <h5 className="sliderTitle">Redis</h5>
                            </div>
                            <div className="item">
                                <img src={typescriptLogo} alt="Image" />
                                <h5 className="sliderTitle">TypeScript</h5>
                            </div>
                          
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
