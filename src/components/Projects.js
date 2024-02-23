import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ko_digital_cover.png";
import projImg2 from "../assets/img/BoredPanda.jpg";
import projImg3 from "../assets/img/UpworkLarge.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export const Projects = () => {
  const projects = [
    {
      title: "Content Manager",
      description: "@ KO Digital, Tel Aviv, Israel",
      imgUrl: projImg1,
    },
    {
      title: "SEO List Maker",
      description: " @ BoredPanda, Vilnius, Lithuania",
      imgUrl: projImg2,
    },
    {
      title: "Freelance Developer and Writer",
      description: "@ Upwork",
      imgUrl: projImg3,
    },
  ];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = ["More projects coming soon...."];
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    With over 4 years of Professional Experience, you can find
                    the organizations I've worked with in this section along
                    with the projects I've completed and articles that I've
                    published. Like something that you'd like to talk about
                    more?
                    <a href="#connect" className="blink-me" style={{textDecoration:"none"}}>{" "}Let’s Talk!</a>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">More</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h1>
                          {" "}
                          <span
                            className="txt-rotate"
                            dataPeriod="600"
                            data-rotate='[ "Hi! I am Ayush - Web Developer", "こんにちは！ウェブデザイナーのアユシュです。", " Hi! I am Ayush - UI/UX Designer" ]'
                          >
                            <span className="wrap">{text}</span>
                          </span>
                        </h1>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h1>
                          {" "}
                          <span
                            className="txt-rotate"
                            dataPeriod="600"
                            data-rotate='[ "Hi! I am Ayush - Web Developer", "こんにちは！ウェブデザイナーのアユシュです。", " Hi! I am Ayush - UI/UX Designer" ]'
                          >
                            <span className="wrap">{text}</span>
                          </span>
                        </h1>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
