import React from "react";

export default function Banner() {
    return (
        <div className="container-fluid mt-5">
            <div className="col-lg-10 m-auto rounded text-white text-center py-5 px-5 offer__section">
                <h1 className="fs-3">Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p className="small mb-5 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua.</p>
                <a href="#" className="text-decoration-none text-white rounded py-2 px-3 offer__section--button">Mulai Sewa
                    Mobil</a>
            </div>
        </div>
    )
}