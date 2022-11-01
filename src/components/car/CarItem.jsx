import React from "react";

export default function CarItem({ image, manufacture, type, rentPerDay, description, capacity, transmission, year }) {
    return (
        <div className="card rounded overflow-hidden">
            <img src={image} alt="" height="200" />
            <div className="card-body">
                <h3 className="fs-6">{manufacture}/{type}</h3>
                <h3 className="fs-5 fw-bold">{rentPerDay} / hari</h3>
                <p>{description}</p>
                <div style={{ listStyle: "none", marginTop: "-15px" }}>
                    <div className="d-flex gap-2 align-items-center" style={{ marginBottom: "-15px" }}>
                        <img src="./images/assets/fi_users.png" width="22" />
                        <p style={{ marginTop: "12px" }}>{capacity} Orang</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center" style={{ marginBottom: "-15px" }}>
                        <img src="./images/assets/fi_settings.png" width="22" />
                        <p style={{ marginTop: "12px" }}>{transmission}</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center" style={{ marginBottom: "-15px" }}>
                        <img src="./images/assets/fi_calendar.png" width="22" />
                        <p style={{ marginTop: "12px" }}>Tahun {year}</p>
                    </div>
                </div>
                <button className="col-lg-12 btn mt-4 button">Pilih Mobil</button>
            </div>
        </div>
    );
}