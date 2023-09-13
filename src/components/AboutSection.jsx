import { Container, Box, Typography } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';

import React from "react";

import styles from '../style/about.module.css';

const AboutSection = () => {
    return (
        <Box className={styles.aboutSection} sx={{
            width: '100%',
            height: '58rem',
            paddingTop: '22rem'
        }}>
            <Container maxWidth="xl">
                <Typography variant="h2" component="h2" sx={{
                    fontWeight: 800,
                    fontSize: '3rem',
                    color: '#ffffff',
                    textAlign: 'left',
                }}>
                    Пара слов о нас
                </Typography>
                <Typography variant="body1" component="p" sx={{
                    width: '38rem',
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    color: '#ffffff',
                    textAlign: 'left',
                    marginTop: '1.5rem',
                    lineHeight: '160%'
                }}>
                    Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. 
                </Typography>
                <Box sx={{
                    width: '42rem',
                    display: 'flex',
                    justifyContent: 'end',
                    marginTop: '2rem'
                }}>
                    <Typography variant="h4" component="span" sx={{
                        fontWeight: 600,
                        fontSize: '2rem',
                        color: '#ffffff'
                    }}>
                        <RemoveIcon fontSize="inherit" />  SneakMax
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default AboutSection;