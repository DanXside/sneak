import { Container, Box, Typography, Divider, Stepper, Step, StepLabel, Button } from "@mui/material";
import { styled } from "@mui/styles";
import React, {useState} from "react";
import TypeSelect from "./StepComponents/TypeSelect";
import SizeSelect from "./StepComponents/SizeSelect";
import CommentPush from "./StepComponents/CommentPush";
import FinishSelect from "./StepComponents/FinishSelect";

const steps = ['Подбор типа', 'Подбор размера', 'Ваши пожелания'];

const StyledStepper = styled(Stepper)(({theme}) => ({
    '& .MuiStepLabel-root span': {
        fontSize: '1.6rem'
    },
    '& .MuiStepLabel-root svg': {
        width: '2rem',
        height: '2rem'
    },
    '& .MuiStepIcon-text': {
        fontSize: '1.6rem'
    }
}));


const SelectionProduct = () => {
    const [activeStep, setActiveStep] = useState(0);

    function handleNext() {
        setActiveStep(prev => prev + 1);
    };

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
                                        {/* Static content */}
                    {
                        activeStep === steps.length 
                        ?
                        <div></div>
                        :
                        <Box>
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
                    }
                                        {/* Dynamic content */}
                    {
                        activeStep === 0
                        ?
                        <TypeSelect />
                        : activeStep === 1
                        ?
                        <SizeSelect />
                        : activeStep === 2
                        ?
                        <CommentPush />
                        :
                        <FinishSelect />
                    }
                    <Box sx={{
                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <StyledStepper 
                            sx={{
                                width: '60rem',
                            }} 
                            activeStep={activeStep}
                        >
                            {steps.map(step => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </StyledStepper>
                        {
                            activeStep === steps.length - 1
                            ?
                            <Button 
                                color="primary" 
                                variant="contained"
                                onClick={handleNext}
                                sx={{
                                    paddingTop: '1rem',
                                    width: '25rem',
                                    height: '6rem',
                                    fontSize: '1.4rem',
                                    fontWeight: 400
                                }}
                            >
                                Подобрать!
                            </Button>
                            : activeStep === steps.length
                            ?
                            <div></div>
                            :
                            <Button 
                                color="primary" 
                                variant="contained"
                                onClick={handleNext}
                                sx={{
                                    paddingTop: '1rem',
                                    width: '25rem',
                                    height: '6rem',
                                    fontSize: '1.4rem',
                                    fontWeight: 400
                                }}
                            >
                                Следующий шаг
                            </Button>
                            
                        }
                    </Box>
                    
                </Box>
            </Container>
        </Box>
    )
}

export default SelectionProduct;