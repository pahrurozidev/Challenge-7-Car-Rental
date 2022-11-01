import React from "react";

export default function WhyUs() {
    return (
        <div className="container-fluid why__us" id="whyus">
            <div className="col-sm-10 col-md-10 col-lg-10 m-auto px-3">
                <h1 className="fs-3 text-center text-sm-start">Why Us?</h1>
                <p className="mt-3 mb-5 text-center text-sm-start">Mengapa harus pilih Binar Car Rental?</p>
                <div className="d-flex flex-column flex-md-row">
                    <div className="card mb-3">
                        <div className="card-body">
                            <img src="./images/assets/icon_complete.png" alt="icon complete" />
                            <h2 className="card-title fs-6 my-3">Mobil Lengkap</h2>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                    <div className="card mb-3 mx-md-3">
                        <div className="card-body">
                            <img src="./images/assets/icon_price.png" alt="icon price" />
                            <h2 className="card-title fs-6 my-3">Harga Murah</h2>
                            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <img src="./images/assets/icon_24hrs.png" alt="icon 24hrs" />
                            <h2 className="card-title fs-6 my-3">Layanan 24 Jam</h2>
                            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                    <div className="card mb-3 ms-md-3">
                        <div className="card-body">
                            <img src="./images/assets/icon_professional.png" alt="icon professional" />
                            <h2 className="card-title fs-6 my-3">Sopir Profesional</h2>
                            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}