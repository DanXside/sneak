import { Dialog, Box, Card, CardContent, CardMedia, Typography, Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { styled } from "@mui/styles";
import React, { useState } from "react";


const DetailProduct = ({open, setOpen, product, sizes, setSizes}) => {

    const ItemDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiPaper-root': {
          maxWidth: '114rem',
          width: '114rem'
        }
    }));

    const BoxDialog = styled(Card)(({ theme }) => ({
        '& .MuiPaper-root': {
            maxWidth: '106rem',
            width: '106rem',
            padding: '2rem'
        },
        '& .MuiToggleButtonGroup-root': {
            border: '3px solid #B2B5BB',
            borderRadius: '2rem'
        },
    }));

    const StyledBtnGroup = styled(ToggleButtonGroup)(({theme}) => ({
        '& .MuiToggleButtonGroup-grouped': {
            margin: theme.spacing(0.8),
        },
    }));

    return (
        <ItemDialog
            open={open}
            onClose={() => setOpen(false)}
        >
            <BoxDialog sx={{
                width: '114rem',
                height: '80rem',
                padding: '4rem'
            }}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'start'
                }}>
                    <Box sx={{
                            width: '52rem', 
                            height: '46rem', 
                            background: `url(${product.url}) center center/contain no-repeat`
                        }}>
                    </Box>
                    <CardContent sx={{
                        width: '45rem'
                    }}>
                        <Stack direction="row" spacing={2} sx={{
                            width: '32rem'
                        }}>
                            <Typography sx={{
                                fontWeight: 400,
                                fontSize: '1.4rem',
                                color: '#B2B5BB'
                            }}>
                                Артикул: 879876
                            </Typography>
                            <Typography sx={{
                                fontWeight: 400,
                                fontSize: '1.4rem',
                                color: '#B2B5BB'
                            }}>
                                В наличии: <strong>13 шт.</strong>
                            </Typography>
                        </Stack>
                        <Typography variant="h3" component="h3" 
                            sx={{
                                fontWeight: 600,
                                fontSize: '2.4rem',
                                color: '#444B58',
                                marginTop: '1.4rem'
                            }}
                        >
                            {product.name}
                        </Typography>
                        <Typography variant="h3" component="h3" 
                            sx={{
                                fontWeight: 600,
                                fontSize: '1.6rem',
                                color: '#444B58',
                                marginTop: '2rem'
                            }}
                        >
                            Выберите размер:
                        </Typography>
                        <StyledBtnGroup 
                            sx={{
                                marginTop: '2rem'
                            }}
                        >
                            {product.size.map((s, index) => (
                                <ToggleButton 
                                    sx={{
                                        fontSize: '1.4rem',
                                        border: 0
                                    }} 
                                    key={s} 
                                    value={s}
                                >
                                    {s}
                                </ToggleButton>
                            ))}
                        </StyledBtnGroup>
                    </CardContent>
                </Card>
            </BoxDialog>
        </ItemDialog>
    )
}

export default DetailProduct;