import React, { Component, Fragment } from "react";
import Footer from "../components/footer/Footer";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Navbar from "../components/navbar/Navbar";
import Car from "../components/car/Car";
import Alert from "../components/alert/Alert";

import { connect } from 'react-redux';
import { API } from '../services';
import { actionType } from "../redux/reducer/globalActionType";

class Cars extends Component {

    componentDidMount() {
        API.getAllCars().then((cars) => {
            this.props.setCarsDispatch(cars.data);
        })
    }

    onSubmitSearchHandler = (event) => {
        event.preventDefault();

        API.getAllCars().then((cars) => {
            this.props.submitSearchDispatch(cars.data);
        })
    }

    render() {
        // console.log(this.props.cars);
        return (
            <Fragment>
                <Navbar search={false} />
                <main>
                    <Jumbotron
                        search={true}
                        cars={this.props.cars}
                        onSubmitSearch={this.onSubmitSearchHandler}
                        searchCar={this.props.searchCarsDispatch} />

                    {this.props.cars.length === 0 ?
                        <Alert /> :
                        <Car cars={this.props.cars} />}
                    <Footer />
                </main>
            </Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCarsDispatch: (cars) => dispatch({
            type: actionType.SET_CARS,
            cars: cars
        }),
        searchCarsDispatch: (event) => dispatch({
            type: actionType.SEARCH_CARS,
            event: event
        }),
        submitSearchDispatch: (cars) => dispatch({
            type: actionType.SUBMIT_SEARCH_CARS,
            cars: cars,
        })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);