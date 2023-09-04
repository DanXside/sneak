import React from "react";
import { AppBar, Box, Divider, IconButton, Toolbar, Typography, Badge } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";

const Header = () => {
    return (
        <AppBar sx={{
            position: 'static', 
            background: 'transparent',
            boxShadow: 0
        }}>
            <Toolbar sx={{width: '153.6rem', margin: '0 auto'}}>
                <Typography href="/" variant="h1" component="a" sx={{
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '3rem',
                    textDecoration: 'none',
                    flexGrow: 1
                }}>
                    SneakMax
                </Typography>
                <Box sx={{ width: '100rem', display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '4rem'}}>
                    <Typography variant="h3" href="#" component="a" sx={{
                        textDecoration: 'none',
                        fontSize: '1.8rem',
                        fontWeight: 500,
                        color: '#ffffff',
                        transition: '.2s all ease-in-out',
                        '&:hover': {
                            color: '#cfd8dc'
                        }
                    }}>
                        Каталог
                    </Typography>
                
                    <Typography variant="h3" href="#" component="a" sx={{
                        textDecoration: 'none',
                        fontSize: '1.8rem',
                        fontWeight: 500,
                        color: '#ffffff',
                        transition: '.2s all ease-in-out',
                        '&:hover': {
                            color: '#cfd8dc'
                        }
                    }}>
                        О нас
                    </Typography>
                
                    <Typography variant="h3" href="#" component="a" sx={{
                        textDecoration: 'none',
                        fontSize: '1.8rem',
                        fontWeight: 500,
                        color: '#ffffff',
                        transition: '.2s all ease-in-out',
                        '&:hover': {
                            color: '#cfd8dc'
                        }
                    }}>
                        Доставка и оплата
                    </Typography>
                
                    <Typography variant="h3" href="#" component="a" sx={{
                        textDecoration: 'none',
                        fontSize: '1.8rem',
                        fontWeight: 500,
                        color: '#ffffff',
                        transition: '.2s all ease-in-out',
                        '&:hover': {
                            color: '#cfd8dc'
                        }
                    }}>
                        Контакты
                    </Typography>
                </Box>
                <IconButton size="large" sx={{marginLeft: '3rem'}}>
                    <Badge badgeContent={20} color="error" sx={{fontSize: '2rem'}}>
                        <ShoppingBasket sx={{width: '3rem', height: '3rem', color: 'white'}}/>
                    </Badge>
                </IconButton>
            </Toolbar>
            <Divider sx={{width: '153.6rem', margin: '0 auto', background: '#ffffff', opacity: 0.5}}/>
        </AppBar>
    );
};

export default Header;