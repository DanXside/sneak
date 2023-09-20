import React from "react";
import Header from "../ui/Header";
import CatalogList from "../CatalogList";
import Footer from "../ui/Footer";

const Catalog = () => {
    return (
        <div>
            <Header />
            <CatalogList />
            <Footer />
        </div>
    );
}

export default Catalog;