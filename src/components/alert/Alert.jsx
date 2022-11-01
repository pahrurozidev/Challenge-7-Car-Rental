import React from "react";

export default function Alert() {
    return (
        <section className="col-4 m-auto mt-5 pt-5">
            <div className="alert text-dark alert-danger alert-dismissible fade show" role="alert">
                Upsss... Cars Not Found!
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </section>
    )
}