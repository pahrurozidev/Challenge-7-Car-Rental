import React from "react";
import CarList from './CarList';

export default function Car({cars}) {
    return (
        <section className="cars" id="root">
            <CarList cars={cars} />
        </section>
    );
}