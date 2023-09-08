import React, { useContext, useState } from "react";
import { OrderContext } from "../context";
import { List, ListItem, ListItemText, ListItemIcon, Box, Typography, Tooltip, Badge } from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import '../../style/basket.css';
import MainButton from "./MainButton";
import Ordering from "./Ordering";


const Basket = () => {
    const {order, setOrder} = useContext(OrderContext);
    const [modalOpen, setModalOpen] = useState(false);

    function handleModal() {
        setModalOpen(true);
    };

    return (
        <Box>
            {order.item.length
            ? (<Box>
                    <List>
                        {order.item.map((item, index) => {
                            function removeOrder() {
                                if (item.count > 1) {
                                    item.count--;
                                    setOrder(prev => ({item: [...order.item], count: prev.count - 1, totalCount: prev.totalCount - item.price}));
                                } else {
                                    setOrder(prev => ({item: prev.item.filter(i => i.id !== item.id), count: prev.count - 1, totalCount: prev.totalCount - item.price}));
                                }
                                console.log(item.count);
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
                                        width: '19rem'
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
                                    <ListItemIcon>
                                        <Tooltip title="Убрать из корзины" fontSize='1.2rem'>
                                            <Badge badgeContent={item.count} color="error" sx={{fontSize: '2rem'}}>
                                                <RemoveCircleIcon 
                                                    onClick={removeOrder} 
                                                    sx={{width: '3rem', height: '3rem', cursor: 'pointer'}} 
                                                />
                                            </Badge>
                                        </Tooltip>
                                    </ListItemIcon>
                                </ListItem>
                            )
                        })}
                    </List>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '2rem 4rem'
                    }}>
                        <Typography sx={{
                            fontWeight: 400,
                            fontSize: '1.6rem',
                            color: '#4D4D4D'
                        }}>
                            Итого: <br></br>
                            <strong>{order.totalCount} р.</strong>
                        </Typography>
                        <MainButton handle={handleModal} color="error" text="Перейти к оформлению"/>
                        <Ordering open={modalOpen} setOpen={setModalOpen}/>
                    </Box>
                </Box>
            )
            : (
                <List>
                    <ListItem>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: '1.8rem',
                            color: '#000000'
                        }}>
                            Корзина всё ещё пуста
                        </Typography>
                    </ListItem>
                </List>
            )
            }
        </Box>
    );
   
}

export default Basket;