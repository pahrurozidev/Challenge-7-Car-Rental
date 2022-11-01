import React from "react";

export default function Footer() {
    return (
        <footer className="container-fluid footer">
            <div className="col-lg-10 m-auto px-3 pb-5 d-lg-flex">
                <section className="col-lg-4 pe-lg-3">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </section>
                <section className="col-lg-2">
                    <p>Our services</p>
                    <p>Why Us</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </section>
                <section className="col-lg-4">
                    <h3 className="fs-6 fw-lighter">Connect with us</h3>
                    <div className="my-4">
                        <img src="./images/assets/icon_facebook.png" className="me-2" alt="icon facebook" />
                        <img src="./images/assets/icon_instagram.png" className="me-2" alt="icon instagram" />
                        <img src="./images/assets/icon_twitter.png" className="me-2" alt="icon twitter" />
                        <img src="./images/assets/icon_mail.png" className="me-2" alt="icon mail" />
                        <img src="./images/assets/icon_twitch.png" className="me-2" alt="icon twitch" />
                    </div>
                </section>
                <section className="col-lg-3">
                    <h3 className="fs-6 fw-lighter">Copyright Binar 2022</h3>
                    <img src="./images/assets/logo.png" className="mt-3" alt="logo" />
                </section>
            </div>
        </footer>
    )
}