import React, {useState} from "react";
import PromoBlock from "../PromoBlock";
import CatalogList from "../CatalogList";
import { OrderContext } from "../context";
import AboutSection from "../AboutSection";
import SelectionProduct from "../SelectionProduct";
import TeamBlock from "../TeamBlock";
import Faq from "../ui/Faq";
import Contacts from "../Contacts";

const HomePage = () => {
    const [order, setOrder] = useState({item: [], count: 0, totalCount: 0 });

    return (
        
        <div>
            <OrderContext.Provider value={{order, setOrder}} >
                <PromoBlock order={order} setOrder={setOrder} />
                <CatalogList order={order} setOrder={setOrder} />
                <AboutSection />
                <SelectionProduct />
                <TeamBlock />
                <Faq />
                <Contacts />
            </OrderContext.Provider>
        </div>
    )
};

export default HomePage;