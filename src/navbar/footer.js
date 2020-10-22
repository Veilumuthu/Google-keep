import React from 'react';

const Footer = () => {
    return (
        <div style={{ float: "center", marginTop: "1rem" }}>
            <a href='mailto:dambldore28@gmail.com' target="blank" style={{ marginRight: "10px" }}>
                <i
                    className='fa fa-envelope-open'
                    aria-hidden='true'
                    style={{ fontSize: "30px" }}></i>
            </a>
            <a
                href='https://github.com/Veilumuthu'
                style={{ marginRight: "10px" }}>
                <i
                    className='fa fa-github'
                    aria-hidden='true'
                    style={{ fontSize: "30px" }}></i>
            </a>
            <a
                href='https://www.linkedin.com/in/veilu-muthu-022091188/'
                style={{ marginRight: "10px" }}>
                <i
                    className='fa fa-linkedin'
                    aria-hidden='true'
                    style={{ fontSize: "30px" }}></i>
            </a>
        </div>
    )
}

export default Footer;