import { Dialog, Box, Card, CardContent, CardMedia, Typography, Stack, ToggleButtonGroup, ToggleButton, CardActions } from "@mui/material";
import { styled } from "@mui/styles";
import DoneIcon from '@mui/icons-material/Done';

import React, { useState } from "react";

import MainButton from "./ui/MainButton";


const DetailProduct = ({open, setOpen, product, addOrder}) => {
    const [size, setSize] = useState(product.size[0]);

    const handleSize = (event, newSize) => {
        setSize(newSize);
    };

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
                            value={size}
                            onChange={handleSize}
                            exclusive 
                            sx={{
                                marginTop: '2rem'
                            }}
                        >
                            {product.size.map((s) => (
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
                        <Typography variant="h3" component="h3" 
                            sx={{
                                fontWeight: 400,
                                fontSize: '2.4rem',
                                color: '#444B58',
                                marginTop: '2rem',
                                marginBottom: '3rem'
                            }}
                        >
                            {product.price} p.
                        </Typography>
                        <MainButton handle={addOrder} color="error" text="Заказать"/>
                        <Box marginTop="2rem">
                            <Typography variant="body2" component="span" sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                fontSize: '1.2rem',
                                fontWeight: 400,
                                color: '#B2B5BB',
                            }}>
                                <DoneIcon /> Бесплатная доставка до двери
                            </Typography>
                            <Typography variant="body2" component="span" sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                fontSize: '1.2rem',
                                fontWeight: 400,
                                color: '#B2B5BB',
                                marginTop: '0.6rem'
                            }}>
                                <DoneIcon /> Оплата заказа при получении
                            </Typography>
                            <Typography variant="body2" component="span" sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                fontSize: '1.2rem',
                                fontWeight: 400,
                                color: '#B2B5BB',
                                marginTop: '0.6rem'
                            }}>
                                <DoneIcon /> Обмен в течении двух недель
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginTop: '3rem'
                }}>
                    <Box sx={{
                        width: '52rem'
                    }}>
                        <Typography variant="h3" component="h3" sx={{
                            fontWeight: 600,
                            fontSize: '2.4rem',
                            color: '#444B58'
                        }}>
                            Описание
                        </Typography>
                        <Typography variant="body1" component="p" sx={{
                            fontWeight: 400,
                            fontSize: '1.6rem',
                            color: '#444B58',
                            width: '43rem',
                            marginTop: '2rem'
                        }}>
                            Кроссовки Nike Blazer Mid '77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы. 
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: '45rem'
                    }}>
                        <Typography variant="h3" component="h3" sx={{
                            fontWeight: 600,
                            fontSize: '2.4rem',
                            color: '#444B58'
                        }}>
                            Характеристики
                        </Typography>
                        <Typography variant="body1" component="p" sx={{
                            fontWeight: 400,
                            fontSize: '1.6rem',
                            color: '#444B58',
                            width: '43rem',
                            marginTop: '2rem'
                        }}>
                            Цвета: Разноцветный<br></br>
                            Состав: Кожа, текстиль, резина<br></br>
                            Страна: Вьетнам
                        </Typography>
                    </Box>
                </Box>
            </BoxDialog>
        </ItemDialog>
    )
}

export default DetailProduct;