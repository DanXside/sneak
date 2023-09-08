import React, {useState} from "react";
import PromoBlock from "../PromoBlock";
import CatalogList from "../CatalogList";
import { OrderContext } from "../context";

const HomePage = () => {
    const [order, setOrder] = useState({item: [], count: 0, totalCount: 0 });

    return (
        
        <div>
            <OrderContext.Provider value={{order, setOrder}} >
                <PromoBlock order={order} setOrder={setOrder} />
                <CatalogList order={order} setOrder={setOrder} />
            </OrderContext.Provider>
        </div>
    )
};

export default HomePage;