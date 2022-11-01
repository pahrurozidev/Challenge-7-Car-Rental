import React from "react";

export default function SearchForm({ onSubmitSearch, searchCar }) {
    return (
        <div className="position-absolute start-50 translate-middle" style={{ width: "900px", marginTop: "30px" }}>
            <div className="container">
                <div className="row mt-5 pt-5">
                    <div className="col-md d-flex justify-content-center">
                        <div className="card">
                            <div className="card-body shadow">
                                <form action="" onSubmit={(event) => onSubmitSearch(event)}>
                                    <div className="row">

                                        {/* driverType  */}
                                        <div className="col-md">
                                            <label htmlFor="driverType" className="form-label col-form-label-sm">Tipe
                                                Driver</label>
                                            <select className="form-select form-select-sm" name="driver" id="driverType"
                                                aria-label="Default select example" defaultValue="Default" onChange={(event) => searchCar(event)}>
                                                <option value="default">Pilih Tipe Driver</option>
                                                <option value="true">Dengan Sopir</option>
                                                <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                                            </select>
                                        </div>

                                        {/* Date  */}
                                        <div className="col-md">
                                            <label htmlFor="tanggal" className="form-label col-form-label-sm">Tanggal</label>
                                            <input type="date" className="form-control form-control-sm" name="date" id="tanggal" required onChange={(event) => searchCar(event)} />
                                        </div>

                                        {/* Time  */}
                                        <div className="col-md">
                                            <label htmlFor="wkt_jemput" className="form-label col-form-label-sm">Waktu Jemput</label>
                                            <select className="form-select form-select-sm icon-rtl" name="time" id="wkt_jemput"
                                                aria-label="Default select example" defaultValue="Default" required onChange={(event) => searchCar(event)}>
                                                <option value="default">Pilih Waktu</option>
                                                <option value="08:00:00">08.00 WIB</option>
                                                <option value="09:00:00">09.00 WIB</option>
                                                <option value="10:00:00">10.00 WIB</option>
                                                <option value="11:00:00">11.00 WIB</option>
                                                <option value="12:00:00">12.00 WIB</option>
                                            </select>
                                        </div>

                                        {/* totalPassanger  */}
                                        <div className="col-md">
                                            <label htmlFor="jmlhPenumpang" className="form-label col-form-label-sm">Jumlah Penumpang</label>
                                            <input type="number" className="form-control form-control-sm" name="passenger" id="jmlhPenumpang" placeholder="Jumlah Penumpang" onChange={(event) => searchCar(event)} />
                                        </div>

                                        {/* Search Button  */}
                                        <div className="text-center" style={{ width: "108px", marginTop: "40px" }}>
                                            <button className="btn btn-sm button" type="submit" id="btn-search">Cari Mobil</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}