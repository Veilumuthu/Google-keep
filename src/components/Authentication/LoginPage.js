import React from 'react';
import { startLogin } from '../../redux/auth';
import { connect } from "react-redux";

const LoginPage = ({ startLogin }) => {
    return (
        <div className="login">
            <div className="loginlog">
                <h1>Googe-Keep</h1>
                <p>Make some plans and Excute</p>
                <button className="loginbut" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    )
}

const mapProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapProps)(LoginPage);