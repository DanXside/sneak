import React, {useState, useEffect} from "react";
import ProductService from '../API/ProductService';
import { Box, Container, Typography, Slider} from "@mui/material";
import MainButton from "./ui/MainButton";
import CatalogItem from "./CatalogItem";
import Loader from "./ui/Loader";
import useFetching from "./ui/hooks/useFetching";
import ProductFilter from "./ui/ProductFilter";

const CatalogList = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(12);

    function increaseLimit () {
        setLimit(prev => prev + 12);
    };

    const [fetchProducts, isLoad, error] = useFetching(async () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ProductService.getAll(limit));
            }, 1000);
        });
        let response = await promise;
        setProducts([...response.data]);
    });
    
    useEffect(() => {
        fetchProducts();
    },[limit]);

    return (
        <Box sx={{
            padding: '3rem'
        }}>
            <Container maxWidth="xl">
                <Typography variant="h2" sx={{
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '3rem',
                    color: '#263238',
                    marginBottom: '3rem'
                }}>
                    Каталог
                </Typography>
                
                { isLoad 
                    ? 
                    <Loader />
                    :
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'start',
                            justifyContent: 'space-between'
                        }}>
                            <ProductFilter />
                            <Box sx={{
                                width: '110rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '2rem',
                                flexWrap: 'wrap'
                            }}>
                                {products.map((product) => 
                                    <CatalogItem key={product.url} product={product} />
                                )}  
                            </Box>
                        </Box>
                        <Box sx={{width: '30rem', marginTop: '2rem', marginLeft: '79rem', display: 'flex', justifyContent: 'center'}}>
                            <MainButton handle={increaseLimit} color="error" text="Показать ещё"/>
                        </Box> 
                    </Box>
                }  
            </Container>
        </Box>
    )
};

export default CatalogList;