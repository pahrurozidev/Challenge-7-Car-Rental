import React from "react";

export default function Testimonial() {
    return (
        <div className="container-fluid testimonial" id="testimonia">
            <div className="px-3 px-lg-0 m-auto">
                <h1 className="text-center fs-3">Testimonial</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <div className="overflow-hidden mt-5">
                    <div className="d-lg-flex col-lg-12 testimonial__list">
                        <section
                            className="col-lg-5 text-center text-lg-start d-none d-md-flex flex-column flex-lg-row align-items-center px-4 py-5 rounded testimonial__section">
                            <div>
                                <img src="./images/assets/img_photo2.png" alt="testimonial image" />
                            </div>
                            <div className="ms-lg-5">
                                <img src="./images/assets/Rate.png" className="my-3" alt="rating image" />
                                <p className="text-start small">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod
                                    lorem
                                    ipsum dolor sit
                                    amet, consectetur
                                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    do
                                    eiusmod”</p>
                                <h4 className="text-start small">John Dee 32, Bromo</h4>
                            </div>
                        </section>
                        <section
                            className="col-lg-5 text-center text-lg-start d-flex flex-column flex-lg-row align-items-center px-4 py-5 rounded testimonial__section my-3 my-lg-0 mx-lg-3">
                            <div>
                                <img src="./images/assets/img_photo1.png" alt="testimonial image" />
                            </div>
                            <div className="ms-lg-5">
                                <img src="./images/assets/Rate.png" className="my-3" alt="rating image" />
                                <p className="text-start small">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod
                                    lorem
                                    ipsum dolor sit
                                    amet, consectetur
                                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    do
                                    eiusmod”</p>
                                <h4 className="text-start small">John Dee 32, Bromo</h4>
                            </div>
                        </section>
                        <section
                            className="col-lg-5 text-center text-lg-start d-none d-md-flex flex-column flex-lg-row align-items-center px-4 py-5 rounded testimonial__section">
                            <div>
                                <img src="./images/assets/img_photo2.png" alt="testimonial image" />
                            </div>
                            <div className="ms-lg-5">
                                <img src="./images/assets/Rate.png" className="my-3" alt="rating image" />
                                <p className="text-start small">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod
                                    lorem
                                    ipsum dolor sit
                                    amet, consectetur
                                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    do
                                    eiusmod”</p>
                                <h4 className="text-start small">John Dee 32, Bromo</h4>
                            </div>
                        </section>
                    </div>
                    <div className="text-center mt-5">
                        <img src="./images/assets/Left button.png" className="me-2" alt="left button" />
                        <img src="./images/assets/Right button.png" className="ms-2" alt="right button" />
                    </div>
                </div>
            </div>
        </div>
    )
}