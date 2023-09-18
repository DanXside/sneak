import { Container, Box, Typography, Tooltip } from "@mui/material";
import {tooltipClasses} from "@mui/material";
import { styled } from "@mui/styles";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import React from "react";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: '1.2rem',
      color: '#444B58',
      background: '#ffffff',
      borderRadius: '.4rem',
      padding: '1rem'
    },
  }));

const Contacts = () => {
    return (
        <Box sx={{
            backgroundColor: '#F3F6F6'
        }}>
            <Container maxWidth="xl">
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    padding: '6rem 0'
                }}>
                    <Box>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: '3rem',
                            color: '#444B58'
                        }}>
                            Контакты
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            width: '13rem',
                            alignItems: 'center',
                            marginTop: '6rem'
                        }}>
                            <Typography sx={{
                                fontSize: '1.4rem',
                                fontWeight: 400,
                                color: '#B2B5BB',
                                flexGrow: 1
                            }}>
                                Главный офис 
                            </Typography>
                            <StyledTooltip arrow title="Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке, качестве обслуживания и товара просьба задавать в отдел продаж"><HelpOutlineIcon sx={{width: '2rem', height: '2rem', color: '#B2B5BB'}} /></StyledTooltip>
                        </Box>
                        <Typography sx={{
                            fontWeight: 400,
                            fontSize: '3rem',
                            color: '#444B58',
                            marginTop: '4rem'
                        }}>
                            +7 800 789 89 89
                        </Typography>
                        <Typography sx={{
                            fontWeight: 400,
                            fontSize: '1.8rem',
                            color: '#444B58',
                            marginTop: '1rem'
                        }}>
                            г. Санкт-Петербург, Комсомольская, 43 к1
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            width: '13rem',
                            alignItems: 'center',
                            marginTop: '6rem'
                        }}>
                            <Typography sx={{
                                fontSize: '1.4rem',
                                fontWeight: 400,
                                color: '#B2B5BB',
                                flexGrow: 1
                            }}>
                                Отдел продаж
                            </Typography>
                        </Box>
                        <Typography sx={{
                            fontWeight: 400,
                            fontSize: '3rem',
                            color: '#444B58',
                            marginTop: '4rem'
                        }}>
                            +7 800 789 89 89
                        </Typography>
                        <Typography sx={{
                            fontWeight: 400,
                            fontSize: '1.8rem',
                            color: '#444B58',
                            marginTop: '1rem'
                        }}>
                            г. Санкт-Петербург, Комсомольская, 43 к1
                        </Typography>
                    </Box>
                    <Box>
                        <YMaps>
                            <Map defaultState={{ center: [59.83061433665958, 30.14217316930244], zoom: 10, controls: ["zoomControl", "fullscreenControl"] }} width={680} height={500}  modules={["control.ZoomControl", "control.FullscreenControl"]}>
                                <Placemark modules={["geoObject.addon.balloon"]} defaultGeometry={[59.83061433665958, 30.14217316930244]} properties={{balloonContentBody:"Главный офис, г. Санкт-Петербург, Комсомольская, 43 к1",}} />
                            </Map>
                        </YMaps>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Contacts;