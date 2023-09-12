import { Typography, Box, Dialog, ListItem, List, ListItemText  } from "@mui/material";
import React, { useContext } from "react";
import { OrderContext } from "../context";
import OrderForm from "./OrderForm";

const Ordering = ({open, setOpen}) => {

    const {order, setOrder} = useContext(OrderContext);

    return (
        <Dialog 
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box sx={{
                width: '60rem',
                height: '90rem',
                padding: '2rem'
            }}>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: '2rem',
                    color: '#444B58'
                }}>
                    Оформление заказа
                </Typography>
                <Box sx={{
                    width: '50rem',
                    border: '.1rem solid #D9D9D9',
                    marginTop: '4rem',
                    padding: '1rem',
                    marginBottom: '2rem'
                }}>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        color: '#73757A'
                    }}>
                        Товаров в заказе: <strong>{order.count} шт.</strong>
                    </Typography>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        color: '#73757A'
                    }}>
                        Общая сумма в заказе: <strong>{order.totalCount} р.</strong>
                    </Typography>
                    <Typography sx={{
                        fontWeight: 600,
                        fontSize: '1.6rem',
                        color: '#73757A'
                    }}>
                        Состав заказа
                    </Typography>
                    <List>
                        {order.item.map((item, index) => {
                            function removeOrder() {
                                if (item.count > 1) {
                                    item.count--;
                                    setOrder(prev => ({item: [...order.item], count: prev.count - 1, totalCount: prev.totalCount - item.price}));
                                } else {
                                    setOrder(prev => ({item: prev.item.filter(i => i.id !== item.id), count: prev.count - 1, totalCount: prev.totalCount - item.price}));
                                }
                            }
                            return (
                                <ListItem key={index + 1} sx={{
                                    '&:hover':{
                                        backgroundColor: '#CCD9F2',
                                        transition: '.6s all'
                                    }
                                }}>
                                    <Box sx={{
                                        width: '20rem',
                                        height: '10rem',
                                        background: `url(${item.url}) center center/contain no-repeat`,
                                    }}>

                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem',
                                        width: '12rem'
                                    }}>
                                        <ListItemText >
                                            <Typography sx={{
                                                fontWeight: 400,
                                                fontSize: '1.4rem',
                                                color: '#4D4D4D'
                                            }}>
                                                {item.name}
                                            </Typography>
                                        </ListItemText>
                                        <ListItemText >
                                            <Typography sx={{
                                                fontWeight: 400,
                                                fontSize: '1.4rem',
                                                color: '#4D4D4D'
                                            }}>
                                                {item.count} шт.
                                            </Typography>
                                        </ListItemText>
                                        <ListItemText sx={{
                                            fontWeight: 600,
                                            fontSize: '1.4rem',
                                            color: '#4D4D4D'
                                        }}>
                                            <Typography sx={{
                                                fontWeight: 400,
                                                fontSize: '1.4rem',
                                                color: '#4D4D4D'
                                            }}>
                                                {item.price * item.count} р.
                                            </Typography>
                                        </ListItemText>
                                    </Box>
                                    <ListItemText 
                                        onClick={removeOrder} 
                                        sx={{cursor: 'pointer'}}
                                    >
                                        <Typography sx={{
                                            fontSize: '1.2rem',
                                            color: '#B2B5BB'
                                        }}>
                                            Удалить
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
                <OrderForm />
            </Box>
        </Dialog>
    );
}

export default Ordering;