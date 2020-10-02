import React from 'react';
import Footer from '../navbar/footer';

const About = () => {
    return (
        <div>
            <div className="container personal">
                <h1>R.Veilu muthu</h1>
                <h6>BE-Mechanical</h6>
                <p>As a fresher, i did two courses through Udemy, they are</p>
                <ul>
                    <li>Python and Django Full Stack Bootcamp</li>
                    <li>The Complete React Course(W/ Hooks & Redux)</li>
                </ul>
            </div>
            <div className="text-center" style={{ marginTop: "1rem", color: "white"}}>
                <img src="muthu.jpeg" alt="Avatar"  width="200" heigth="200" />
                <h2>Veilu Muthu R</h2>
                <Footer />
            </div>
        </div>
    )
}

export default About;

            // <Row>
            //     <Col md='4'>
            //         <Card>
            //             <CardBody>
            //                 <CardText>R.Veilu Muthu</CardText>
            //                 <CardText>BE-Mechanical</CardText>
                            
            //             </CardBody>
            //         </Card>
            //     </Col>
            // </Row>