import React from "react";
import NavList from "./NavList";

export default function Navbar({ search }) {
    return (
        <nav className="navbar bg-light fixed-top">
            <div className="container col-10">
                <a className="navbar-brand" href="/">
                    <img src="./images/assets/logo.png" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* navlist */}
                <NavList search={search} />
            </div>
        </nav>
    );
} { }