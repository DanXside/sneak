import { ExpandCircleDown } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import React, { useState } from "react";

const StyledAccSum = styled(AccordionSummary)(({theme}) => ({
    '& .MuiAccordionSummary-expandIconWrapper svg': {
        width: '3rem',
        height: '3rem'
    }
}))

const Faq = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{
            minHeight: '40rem',
            padding: '6rem 0'
        }}>
            <Container maxWidth="xl">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography variant="h2" component="h2" sx={{
                        fontWeight: 600,
                        fontSize: '3rem',
                        color: '#444B58',
                        marginBottom: '3rem'
                    }}>
                        Часто задаваемые вопросы
                    </Typography>
                    <Box sx={{
                        width: '50rem'
                    }}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleExpand('panel1')}>
                            <StyledAccSum expandIcon={<ExpandCircleDown />} id="panel1-head">
                                <Typography sx={{
                                    fontWeight: 400,
                                    fontSize: '2rem',
                                    color: '#242424'
                                }}>
                                    Вопрос 1
                                </Typography>
                            </StyledAccSum>
                            <AccordionDetails>
                                <Typography sx={{
                                    fontWeight: 400,
                                    fontSize: '1.6rem',
                                    color: 'rgba(36, 36, 36, 0.50)'
                                }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ipsam, harum, tenetur officia velit cum veniam eligendi omnis itaque cumque vitae provident expedita! Consectetur quisquam iusto voluptatem corrupti quod ut.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleExpand('panel2')}>
                            <StyledAccSum expandIcon={<ExpandCircleDown />} id="panel2-head">
                                <Typography sx={{
                                    fontWeight: 400,
                                    fontSize: '2rem',
                                    color: '#242424'
                                }}>
                                    Вопрос 2
                                </Typography>
                            </StyledAccSum>
                            <AccordionDetails>
                                <Typography sx={{
                                    fontWeight: 400,
                                    fontSize: '1.6rem',
                                    color: 'rgba(36, 36, 36, 0.50)'
                                }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ipsam, harum, tenetur officia velit cum veniam eligendi omnis itaque cumque vitae provident expedita! Consectetur quisquam iusto voluptatem corrupti quod ut.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleExpand('panel3')}>
                            <StyledAccSum expandIcon={<ExpandCircleDown />} id="panel3-head">
                                <Typography sx={{
                                    fontWeight: 400,
                                    fontSize: '2rem',
                                    color: '#242424'
                                }}>
                                    Вопрос 3
                                </Typography>
                            </StyledAccSum>
                            <AccordionDetails>
                                <Typography sx={{
                                    fontWeight: 400,
                                    fontSize: '1.6rem',
                                    color: 'rgba(36, 36, 36, 0.50)'
                                }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ipsam, harum, tenetur officia velit cum veniam eligendi omnis itaque cumque vitae provident expedita! Consectetur quisquam iusto voluptatem corrupti quod ut.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Faq;