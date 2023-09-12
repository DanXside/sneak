import React, {useState, useEffect} from "react";
import ProductService from '../API/ProductService';
import { Box, Container, Typography, Slider} from "@mui/material";
import MainButton from "./ui/MainButton";
import CatalogItem from "./CatalogItem";
import Loader from "./ui/Loader";
import useFetching from "./ui/hooks/useFetching";
import ProductFilter from "./ui/ProductFilter";
import { useProducts } from "./ui/hooks/useProducts";

const CatalogList = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [limit, setLimit] = useState(12);

    const [value, setValue] = useState([10000, 30000]);
    const [sizes, setSizes] = useState([
        {
            id: 0,
            value: "37",
            check: false
        },
        {
            id: 1,
            value: "38",
            check: false
        },
        {
            id: 2,
            value: "39",
            check: false
        },
        {
            id: 3,
            value: "40",
            check: false
        },
        {
            id: 4,
            value: "41",
            check: false
        },
        {
            id: 5,
            value: "42",
            check: false
        },
        {
            id: 6,
            value: "43",
            check: false
        },
        {
            id: 7,
            value: "44",
            check: false
        },
        {
            id: 8,
            value: "45",
            check: false
        },
    ]);

    function increaseLimit () {
        setLimit(prev => prev + 12);
    };

    const sortedProducts = useProducts(allProducts, sizes, value[0], value[1]);

    const [fetchAllProducts] = useFetching(async () => {
        const response = await ProductService.getAll(18);
        setAllProducts([...response.data]);
    });

    useEffect(() => {
        fetchAllProducts();
    },[]);

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
                            <ProductFilter 
                                value={value} 
                                setValue={setValue} 
                                sizes={sizes} 
                                setSizes={setSizes} 
                                products={products}
                                setProducts={setProducts}
                                sortedProducts={sortedProducts}
                            />
                            <Box sx={{
                                width: '110rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '2rem',
                                flexWrap: 'wrap'
                            }}>
                                {products.map((product) => 
                                    <CatalogItem 
                                        key={product.url} 
                                        sizes={sizes} 
                                        setSizes={setSizes}
                                        product={product} 
                                    />
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