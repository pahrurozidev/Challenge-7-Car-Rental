import React, { Component, Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Service from "../components/services/Service";
import WhyUs from "../components/whyus/WhyUs";
import Testimonial from "../components/testimonials/Testimonial";
import Banner from "../components/banner/Banner";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";

class Home extends Component {

    render() {
        return (
            <Fragment>
                <Navbar search={true} />
                <main>
                    <Jumbotron search={false} />
                    <Service />
                    <WhyUs />
                    <Testimonial />
                    <Banner />
                    <Faq />
                    <Footer />
                </main>
            </Fragment>
        )
    }
}

export default Home;