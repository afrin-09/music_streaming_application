import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import {Link} from "react-router-dom";
import mylogo from "../assets/img/mylogo_remove.png";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                    <img className="head-phone-img" src={mylogo} alt=""/>
                        <a className="navbar-brand" href="/">Vusic</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Music for everyone</h1>
                            
                            <p>Without music, life would be a mistake</p>
                            <Link to={"/home"} className="btn">
                                Start Listening
                                
                            </Link>
                            <p>Made with <span>&#10084;</span > by <a style={{colors: "white"}} href="https://github.com/ShouryaBrahmastra">Shourya Gupta</a> </p>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;
