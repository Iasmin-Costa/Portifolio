import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/git-maio.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <br></br>
            <br></br>
              <a href="https://www.linkedin.com/in/iasmin-c-688523243/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/IasminnieMoon"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_minnie_moon_/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. Todos os direitos reservado a Iasmin Costa</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
