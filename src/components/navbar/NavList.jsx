import React, { Fragment } from "react";
import NavItem from "./NavItem";

export default function NavList({ search }) {
    return (
        <Fragment>
            <ul className="d-flex mt-3 nav-list">
                {/* navitem */}
                <NavItem search={search} />
            </ul>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                        <img src="./images/assets/logo.png" alt="logo" />
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/cars">Search Car</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Testimonial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                        <li className="nav-item col-3" style={{ background: "#5CB85F" }}>
                            <a className="nav-link text-white px-3 py-2" href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}