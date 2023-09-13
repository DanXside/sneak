import { Container, Box, Typography, Divider } from "@mui/material";
import React from "react";

const SelectionProduct = () => {
    return (
        <Box sx={{
            height: '79rem',
            padding: '6rem 0'
        }}>
            <Container maxWidth="xl">
                <Box sx={{
                    width: '118rem',
                    height: '67rem',
                    margin: '0 auto',
                    backgroundColor: '#FFF4EE',
                    padding: '4rem 10rem'
                }}>
                    <Typography variant="h2" component="h2" sx={{
                        fontWeight: 600,
                        fontSize: '3rem',
                        color: '#444B58'
                    }}>
                        Мы подберем идеальную пару для вас
                    </Typography>
                    <Typography variant="h3" component="h3" sx={{
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        color: '#808080',
                        marginTop: '1.5rem'
                    }}>
                        Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями 
                    </Typography>
                    <Divider sx={{
                        marginTop: '1rem'
                    }} />
                </Box>
            </Container>
        </Box>
    )
}

export default SelectionProduct;