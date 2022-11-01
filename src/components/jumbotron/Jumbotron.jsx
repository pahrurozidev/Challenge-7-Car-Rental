import React from "react";
import SearchForm from "../searchForm/SearchForm";

export default function Jumbotron({ cars, onSubmitSearch, searchCar, search }) {
    return (
        <div className="container-fluid jumbotron position-relative">
            <div className="col-10 m-auto d-flex flex-md-column jumbotron__section">
                <div className="col-md-12 col-lg-6">
                    <h1 className="fs-3">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="col-10 small">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                        dengan
                        harga terjangkau.
                        Selalu siap
                        melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <a href="/cars" className="btn__sewa--modifier text-white text-decoration-none px-3 py-2 small">Mulai Sewa
                        Mobil</a>
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0">
                    <img src="./images/assets/img_car.png" className="car__image position-absolute bottom-0 end-0"
                        alt="car image" />
                </div>
            </div>

            {search && <SearchForm
                onSubmitSearch={onSubmitSearch}
                searchCar={searchCar} />}
        </div>
    );
}