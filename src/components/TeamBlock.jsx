import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import styles from '../style/team.module.css';
import { styled } from "@mui/styles";
import team1 from '../img/team/team-1.jpg';
import team2 from '../img/team/team-2.jpg';
import team3 from '../img/team/team-3.jpg';
import team4 from '../img/team/team-4.jpg';
import team5 from '../img/team/team-5.jpg';
import team6 from '../img/team/team-6.jpg';

const teamData = [
    {
        img: team1,
        name: 'Сотрудник 1',
        role: 'Администратор'
    },
    {
        img: team2,
        name: 'Сотрудник 2',
        role: 'Администратор'
    },
    {
        img: team3,
        name: 'Сотрудник 3',
        role: 'Администратор'
    },
    {
        img: team4,
        name: 'Сотрудник 4',
        role: 'Администратор'
    },
    {
        img: team5,
        name: 'Сотрудник 5',
        role: 'Администратор'
    },
    {
        img: team6,
        name: 'Сотрудник 6',
        role: 'Администратор'
    }
];

const StyledGrid = styled(Grid)(({theme}) => ({
    '& .MuiGrid-item': {
        flexDirection: 'column',
        maxwidth: '38rem',
        width: '38rem'
    }
}))

const TeamBlock = () => {
    return (
        <Box className={styles.teamSection}>
            <Container maxWidth="xl">
                <Typography variant="h2" component="h2" sx={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '3.5rem'
                }}>
                    Наша команда
                </Typography>
                <StyledGrid container spacing={20}>
                    {teamData.map(person => (
                        <Grid key={person.name} className={styles.gridItem} item xs={4}>
                            <img src={person.img} alt="person" />
                            <Typography sx={{
                                fontWeight: 400,
                                fontSize: '2.4rem',
                                color: '#ffffff',
                                marginTop: '1.5rem'
                            }}>
                                {person.name}
                            </Typography>
                            <Typography sx={{
                                fontWeight: 400,
                                fontSize: '1.6rem',
                                color: '#ffffff',
                                marginTop: '1.5rem'
                            }}>
                                {person.role}
                            </Typography>
                        </Grid>
                    ))}
                </StyledGrid>
            </Container>
        </Box>
    )
}

export default TeamBlock;