import { Container, Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: '#444B58',
            padding: '3rem 0'
        }}>
            <Container maxWidth="xl" sx={{
                display: 'flex',
            }}>
                <Box flexGrow={1}>
                    <Typography variant="h2" component="a" href="/" sx={{
                        color: '#ffffff',
                        fontWeight: 900,
                        fontSize: '3rem',
                        textDecoration: 'none',
                    }}>
                        SneakMax
                    </Typography>
                </Box>
                <Box display="flex" sx={{
                    width: '80rem',
                    alignItems: 'center'
                }}>
                    <Typography flexGrow={1} variant="h2" component="a" href="#" sx={{
                        color: '#ffffff',
                        fontWeight: 500,
                        fontSize: '1.8rem',
                        textDecoration: 'none',
                    }}>
                        Каталог
                    </Typography>
                    <Typography flexGrow={1} variant="h2" component="a" href="#" sx={{
                        color: '#ffffff',
                        fontWeight: 500,
                        fontSize: '1.8rem',
                        textDecoration: 'none',
                    }}>
                        О нас
                    </Typography>
                    <Typography flexGrow={1} variant="h2" component="a" href="#" sx={{
                        color: '#ffffff',
                        fontWeight: 500,
                        fontSize: '1.8rem',
                        textDecoration: 'none',
                    }}>
                        Подбор товара
                    </Typography>
                    <Typography flexGrow={1} variant="h2" component="a" href="#" sx={{
                        color: '#ffffff',
                        fontWeight: 500,
                        fontSize: '1.8rem',
                        textDecoration: 'none',
                    }}>
                        Наша команда
                    </Typography>
                    <Typography flexGrow={1} variant="h2" component="a" href="#" sx={{
                        color: '#ffffff',
                        fontWeight: 500,
                        fontSize: '1.8rem',
                        textDecoration: 'none',
                    }}>
                        Доставка и оплата
                    </Typography>
                    <Typography flexGrow={1} variant="h2" component="a" href="#" sx={{
                        color: '#ffffff',
                        fontWeight: 500,
                        fontSize: '1.8rem',
                        textDecoration: 'none',
                    }}>
                        Контакты
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;