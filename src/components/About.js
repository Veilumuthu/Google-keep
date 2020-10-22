import React from 'react';
import Footer from '../navbar/footer';
import { Row, Card, CardBody, CardText } from 'reactstrap';

const About = () => {
    return (
        <div className="container">
            <Row>
                <div className="text-center col-md-4" style={{ marginTop: "1rem" }}>
                    <img src="muthu.jpeg" alt="Avatar" className="image" />
                    <Footer />
                </div>
                <div className="col-md-8" style={{ marginTop: "1rem" }}>
                    <Card className="kard">
                        <CardBody>
                            <CardText><strong style={{ fontSize: "2rem" }}>R.Veilu Muthu</strong></CardText>
                            <CardText><strong style={{ fontSize: "1rem" }}>BE-Mechanical</strong></CardText>
                            <CardText>As a fresher, i did two courses through Udemy, they are</CardText>
                            <CardText>
                                Python and Django Full Stack Bootcamp,
                                The Complete React Course(W/ Hooks & Redux)
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </div>
    )
}

export default About;


        //     <div className="container personal">
        //     <h1>R.Veilu muthu</h1>
        //     <h6>BE-Mechanical</h6>
        //     <p>As a fresher, i did two courses through Udemy, they are</p>
            // <ul>
            //     <li>Python and Django Full Stack Bootcamp</li>
            //     <li>The Complete React Course(W/ Hooks & Redux)</li>
            // </ul>
        // </div>