import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import Header from "./ui/Header";
import styles from '../style/promoBlock.module.css';
import MainButton from "./ui/MainButton";

const PromoBlock = () => {

    return (
        <Box className={styles.promoSection}>
            <Header />
            <Container maxWidth="xl">
                <Box sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent:'space-between',
                    alignItems: 'start', 
                    width: '80rem', 
                    height: '26.7rem', 
                    marginTop: '10rem'
                }}>
                    <Typography variant="h1" sx={{
                        width: '58rem',
                        textAlign: 'left',
                        color: '#FFF',
                        fontSize: '3.6rem',
                        fontWeight: 800
                    }}>
                    Кроссовки известных брендов 
                    с доставкой по России и СНГ
                    </Typography>
                    <MainButton text="Перейти к покупкам"/>
                </Box>
            </Container>   
        </Box>
    );
};

export default PromoBlock;