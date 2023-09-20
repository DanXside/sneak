import React, {useContext} from "react";
import PromoBlock from "../PromoBlock";
import CatalogList from "../CatalogList";
import AboutSection from "../AboutSection";
import SelectionProduct from "../SelectionProduct";
import TeamBlock from "../TeamBlock";
import Faq from "../ui/Faq";
import Contacts from "../Contacts";
import Footer from "../ui/Footer";

import { OrderContext } from "../context";

const HomePage = () => {
    const {order, setOrder} = useContext(OrderContext);

    return (
        
        <div>
            
            <PromoBlock order={order} setOrder={setOrder} />
            <CatalogList order={order} setOrder={setOrder} />
            <AboutSection />
            <SelectionProduct />
            <TeamBlock />
            <Faq />
            <Contacts />
            <Footer />
            
        </div>
    )
};

export default HomePage;