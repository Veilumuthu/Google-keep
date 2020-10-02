import React from 'react';

const Header = (props) => {
    return (
            <div className="text-center">
                <h3 className="title">{props.title}</h3>
                <p className="subtitle">{props.subtitle}</p>
            </div>
    )
}

export default Header;