import { actionType } from "./globalActionType";

const globalState = {
    cars: [],
    search: {
        driver: '',
        date: '',
        time: '',
        passenger: '',
    },
}

const rootReducer = (state = globalState, action) => {
    if (action.type === actionType.SET_CARS) {
        return {
            ...state,
            cars: action.cars.filter((car) => car.available)
        }
    } else if (action.type === actionType.SEARCH_CARS) {
        const inputForm = { ...state.search };
        inputForm[action.event.target.name] = action.event.target.value;

        return {
            ...state,
            search: {
                driver: inputForm.driver,
                date: inputForm.date,
                time: inputForm.time,
                passenger: inputForm.passenger,
            }
        }
    } else if (action.type === actionType.SUBMIT_SEARCH_CARS) {
        const car = { ...state.search };

        const driverType = car.driver === "true";
        const dateTime = new Date(`${car.date} ${car.time}`);

        // filter
        const Cars = action.cars.filter((c) => {
            return c.available === driverType &&
                new Date(c.availableAt) >= dateTime &&
                c.capacity >= car.passenger
        })

        return {
            ...state,
            cars: Cars,
        }
    } else {
        return state;
    }
}

export default rootReducer;