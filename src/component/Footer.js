import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} className="mt-5">
                        <Row>
                            <Col sm={6}>
                                <img src={logo} width={50} height={50} alt="logo" />
                                <p>Copyright 2022. All Rights Reserved</p>
                            </Col>
                            <Col sm={6} className="text-center text-sm-end">
                                <div className="social-icon">
                                    <a href="#"><img src={navIcon1} alt="Icon" /></a>
                                    <a href="#"><img src={navIcon2} alt="Icon" /></a>
                                    <a href="#"><img src={navIcon3} alt="Icon" /></a>
                                </div>
                                <p>Copyright 2022. All Rights Reserved</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
