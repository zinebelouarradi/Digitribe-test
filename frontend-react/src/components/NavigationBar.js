import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';




class NavigationBar extends Component {


    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <nav to={""} className="navbar-brand">
                    <img src="https://uploads-ssl.webflow.com/5f7495b690bdc9e4cdca742c/5f7496a0e5da020fb8346fc7_Group%208small.png" width="35" height="35" alt="" /> Digitribe
                </nav>
            </Navbar>
        );
    }
};
export default NavigationBar;