import React from "react";
import {Card, CardActionArea, CardActions, CardContent, Button, Box, Typography} from '@mui/material';

const CatalogItem = ({product}) => {
    return (
        <Card sx={{
            width: '25rem', 
            height: '29rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between'
        }}>
            <CardActionArea>
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
                <Button size="large" color="primary" sx={{fontWeight: '800', fontSize: '1rem'}}>
                    В корзину
                </Button>
            </CardActions>
        </Card>
    )
};

export default CatalogItem;