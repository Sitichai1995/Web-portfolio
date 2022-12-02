import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col>
            <div className="i-left">
              <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Sitichai Paseeswat</h1>
                <div className="i-title">
                  <div className="i-title-wrapper">
                    <div className="i-title-item">HTML</div>
                    <div className="i-title-item">CSS</div>
                    <div className="i-title-item">Javascript</div>
                    <div className="i-title-item">React</div>
                    <div className="i-title-item">Node JS</div>
                  </div>
                </div>
                <p className="i-desc">
                  I am a learner from Generation's Junior Software Developer
                  Bootcamp. I would like to pursue a career in Software
                  Developer. I believe that my previous work experiences and my
                  teachnical skills can launch my career in the tech sector.
                </p>
                <button><a href="https://drive.google.com/file/d/1n81WqOByXpbFfDhH82oWjwNeFBWGCGmn/view?usp=sharing">Download my resume.</a></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
