import React, { Fragment } from "react";
import CarItem from './CarItem';

export default function CarList({ cars }) {
    return (
        <Fragment>
            {
                cars.map((car) => (
                    <CarItem
                        key={car.id}
                        image={car.image}
                        manufacture={car.manufacture}
                        type={car.type}
                        rentPerDay={car.rentPerDay}
                        description={car.description}
                        capacity={car.capacity}
                        transmission={car.transmission}
                        year={car.year} />
                ))
            }
        </Fragment>
    );
}