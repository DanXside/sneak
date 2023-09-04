import React from "react";
import PromoBlock from "../PromoBlock";
import CatalogList from "../CatalogList";

const HomePage = ({products}) => {
    return (
        <div>
            <PromoBlock />
            <CatalogList />
        </div>
    )
};

export default HomePage;