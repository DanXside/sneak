import React, { useContext, useState } from "react";
import {Card, CardActionArea, CardActions, CardContent, Button, Box, Typography, Snackbar} from '@mui/material';
import { OrderContext } from "./context";

import  styles from '../style/catalogItem.module.css';
import '../style/snackbar.css';
import DetailProduct from "./DetailProduct";

const CatalogItem = ({product}) => {
    const {order, setOrder} = useContext(OrderContext);

    const [open, setOpen] = useState(false);
    const [detailOpen, setDetailOpen] = useState(false);

    function addOrder(id) {
        if (order.item.includes(product)) {
            product.count++;
            setOrder(prev => ({item: [...order.item],count: prev.count + 1, totalCount: prev.totalCount + product.price}));
        } else {
            setOrder(prev => ({item: [...order.item, product], count: prev.count + 1, totalCount: prev.totalCount + product.price}));
        }
        setOpen(true);
    };

    function handleClose() {
        setOpen(false);
    }

    return (
        <Card sx={{
            width: '25rem', 
            height: '29rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between'
        }}>
            <CardActionArea onClick={() => setDetailOpen(true)}>
                <Box sx={{
                    width: '25rem', 
                    height: '15rem', 
                    background: `url(${product.url}) center center/contain no-repeat`
            }}>
                </Box>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{
                        fontWeight: '600', 
                        fontSize: '1.4rem',
                        lineHeight: '130%', 
                        margintop: '0.8rem'
                }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                        fontSize: '1.2rem',
                        marginTop: '0.8rem'
                    }}>
                        {product.price} р.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="large" onClick={addOrder} color="primary" sx={{fontWeight: '800', fontSize: '1rem'}}>
                    В корзину
                </Button>
                <Snackbar 
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message="Товар добавлен в корзину"
                    key="top"
                    className={styles.snackbarAdd}
                />
            </CardActions>
            <DetailProduct 
                open={detailOpen} 
                setOpen={setDetailOpen} 
                product={product}
                addOrder={addOrder}
            />
        </Card>
    )
};

export default CatalogItem;