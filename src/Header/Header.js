import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg bg-light navbar-light nav-sticky">
            <div className="container-fluid">
                <a href="index.html" className="navbar-brand">Burger <span>King</span></a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/contact" className="nav-item nav-link">Contact</a>
                        <a href="/login" className="nav-item nav-link">Logout</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
    
        );
    }
}

export default Header;
