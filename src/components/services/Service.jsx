import React from "react";

export default function Service() {
    return (
        <div className="container-fluid our__services" id="services">
            <div className="col-lg-10 d-flex flex-column flex-lg-row m-auto">
                <div className="col-lg-6 m-auto">
                    <img src="./images/assets/img_service.png" className="image__services" alt="image services" />
                </div>
                <div className="col-lg-6 mt-5 m-auto px-3">
                    <h1 className="fs-4">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <p className="mt-4">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan
                        yang lain,
                        kondisi mobil baru,
                        serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <div className="list-group-item d-flex">
                        <div className="check__list">
                            <img src="./images/assets/check_list.png" alt="check list" />
                        </div>
                        <p className="ms-3">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                    </div>
                    <div className="list-group-item d-flex">
                        <div className="check__list">
                            <img src="./images/assets/check_list.png" alt="check list" />
                        </div>
                        <p className="ms-3">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                    </div>
                    <div className="list-group-item d-flex">
                        <div className="check__list">
                            <img src="./images/assets/check_list.png" alt="check list" />
                        </div>
                        <p className="ms-3">Sewa Mobil Jangka Panjang Bulanan</p>
                    </div>
                    <div className="list-group-item d-flex">
                        <div className="check__list">
                            <img src="./images/assets/check_list.png" alt="check list" />
                        </div>
                        <p className="ms-3">Gratis Antar - Jemput Mobil di Bandara</p>
                    </div>
                    <div className="list-group-item d-flex">
                        <div className="check__list">
                            <img src="./images/assets/check_list.png" alt="check list" />
                        </div>
                        <p className="ms-3">Layanan Airport Transfer / Drop In Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}