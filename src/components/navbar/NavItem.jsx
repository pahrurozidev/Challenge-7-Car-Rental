import React, { Fragment } from "react";

export default function NavItem({ search }) {
    return (
        <Fragment>
            {search &&
                <li className="list-group-item me-4">
                    <a className="nav-link py-2" href="/cars">Search Car</a>
                </li>}
            <li className="list-group-item me-4">
                <a className="nav-link py-2" href="#services">Our Services</a>
            </li>
            <li className="list-group-item me-4">
                <a className="nav-link py-2" href="#whyus">Why Us</a>
            </li>
            <li className="list-group-item me-4">
                <a className="nav-link py-2" href="#testimonial">Testimonial</a>
            </li>
            <li className="list-group-item me-4">
                <a className="nav-link py-2" href="#faq">FAQ</a>
            </li>
            <li className="list-group-item list-group-item--modifier">
                <a className="nav-link text-white px-3 py-2" href="#">Register</a>
            </li>
        </Fragment>
    );
}