import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cars from "../pages/Cars";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
            </Switch>
        </BrowserRouter>
    );
}