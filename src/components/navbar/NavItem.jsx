import React, { Fragment } from "react";

export default function NavItem({ search }) {
    return (
        <Fragment>
            {search &&
                <li className="list-group-item me-4 bg-transparent border-0">
                    <a className="nav-link py-2" href="/cars" style={{ color: "black" }}>Search Car</a>
                </li>}
            <li className="list-group-item me-4 bg-transparent border-0">
                <a className="nav-link py-2" href="#services" style={{ color: "black" }}>Our Services</a>
            </li>
            <li className="list-group-item me-4 bg-transparent border-0">
                <a className="nav-link py-2" href="#whyus" style={{ color: "black" }}>Why Us</a>
            </li>
            <li className="list-group-item me-4 bg-transparent border-0">
                <a className="nav-link py-2" href="#testimonial" style={{ color: "black" }}>Testimonial</a>
            </li>
            <li className="list-group-item me-4 bg-transparent border-0">
                <a className="nav-link py-2" href="#faq" style={{ color: "black" }}>FAQ</a>
            </li>
            <li className="list-group-item list-group-item--modifier">
                <a className="nav-link text-white px-3 py-2" href="#">Register</a>
            </li>
        </Fragment>
    );
}