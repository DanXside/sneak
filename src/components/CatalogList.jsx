import React, {useState, useEffect} from "react";
import ProductService from '../API/ProductService';
import { Box, Container, Typography, Slider} from "@mui/material";
import MainButton from "./ui/MainButton";
import CatalogItem from "./CatalogItem";
import Loader from "./ui/Loader";
import useFetching from "./ui/hooks/useFetching";

const CatalogList = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(12);
    const [value, setValue] = useState([10000, 30000]);

    const marks = [
        {
            value: 0,
            label: '0 p.'
        },
        {
            value: 20000,
            label: '20 000 p.'
        },
        {
            value: 40000,
            label: '40 000 p.'
        }
    ];

    function increaseLimit () {
        setLimit(limit + 12);
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
                            <Box sx={{
                                width: '28rem',
                                height: '60rem',
                                border: '1px solid var(--sec-bg, #FFF4EE)',
                                background: '#FFF4EE',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'start',
                                alignItems: 'start',
                                padding: '1.6rem'
                            }}>
                                <Typography variant="h3" component="h3" color="#424242" sx={{
                                    fontWeight: 600,
                                    fontSize: '2rem'
                                }}>
                                    Подбор по параметрам
                                </Typography>
                                <Typography variant="h4" component="h4" color="#424242" sx={{
                                    fontWeight: 400,
                                    fontSize: '1.6rem',
                                    marginTop: '2rem'
                                }}>
                                    Цена, р.
                                </Typography>

                                <Box sx={{
                                    display: 'flex',
                                    width: '100%',
                                    marginTop: '1rem',
                                    gap: '0.4rem'
                                }}>
                                    <Typography flexGrow={1} variant="h4" component="h4" color="#424242" sx={{
                                        fontWeight: 400,
                                        fontSize: '1.6rem',
                                        border: '0.2rem solid #B2B5BB',
                                        borderTopLeftRadius: '0.6rem',
                                        borderTopRightRadius: '0.6rem',
                                        padding: '0.6rem',
                                        height: '3rem',
                                        borderBottom: 'none'
                                    }}>
                                        от {value[0]}
                                    </Typography>
                                    <Typography flexGrow={1} variant="h4" component="h4" color="#424242" sx={{
                                        fontWeight: 400,
                                        fontSize: '1.6rem',
                                        border: '0.2rem solid #B2B5BB',
                                        borderTopLeftRadius: '0.6rem',
                                        borderTopRightRadius: '0.6rem',
                                        padding: '0.6rem',
                                        height: '3rem',
                                        borderBottom: 'none'
                                    }}>
                                        до {value[1]}
                                    </Typography>
                                </Box>
                                
                                <Slider
                                    getAriaLabel={() => 'Цена'}
                                    min={0}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    step={5}
                                    max={40000}
                                    marks={marks}
                                    valueLabelDisplay="auto"
                                    color="secondary"
                                    sx={{
                                        fontSize: '1.4rem'
                                    }}
                                />
                            </Box>
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
                            <MainButton increaseLimit={increaseLimit} text="Показать ещё"/>
                        </Box> 
                    </Box>
                }  
            </Container>
        </Box>
    )
};

export default CatalogList;