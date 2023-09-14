import React from "react";

import { Box, Divider, Typography, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import '../../style/stepForm.css';

const FinishSelect = () => {
    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => console.log(data);

    return (
        <Box>
            <Typography variant="h2" component="h2" sx={{
                fontWeight: 600,
                fontSize: '3rem',
                color: '#444B58',
            }}>
                Ваша подборка готова!
            </Typography>
            <Typography variant="h3" component="h3" sx={{
                fontWeight: 400,
                fontSize: '1.8rem',
                color: '#DBBBA9',
                marginTop: '2rem'
            }}>
                Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог
            </Typography>
            <Divider sx={{marginTop: '1rem', marginBottom: '2rem'}} />
            <Box className="formWrap" sx={{
                width: '65rem',
                height: '40rem',
                backgroundColor: '#DBBBA9',
                padding: '4rem',
                borderRadius: '.6rem'
            }}>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: '3.4rem',
                    color: '#ffffff'
                }}>
                    Получить предложение
                </Typography>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: '1.8rem',
                    color: '#ffffff',
                    margin: '1.5rem 0'
                }}>
                    Получите подборку подходящих для вас моделей на почту
                </Typography>
                <form className="stepForm" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{required: 'Обязательное поле'}}
                        render={({ field }) => (
                            <TextField 
                                variant="outlined"
                                label="Ваше имя"
                                type="text"
                                onChange={e => field.onChange(e)}
                                value={field.value}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                                sx={{
                                    width: '50rem',
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        rules={{required: 'Обязательное поле'}}
                        render={({ field }) => (
                            <TextField 
                                variant="outlined"
                                label="E-mail"
                                type="email"
                                margin="dense"
                                onChange={e => field.onChange(e)}
                                value={field.value}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                sx={{
                                    width: '50rem',
                                }}
                            />
                        )}
                    />
                    
                    <Button 
                        color="error" 
                        variant="contained"
                        type="submit" 
                        sx={{
                            marginTop: '2rem',
                            paddingTop: '1rem',
                            width: '25rem',
                            height: '6rem',
                            fontSize: '1.4rem',
                            fontWeight: 400
                        }}
                    >
                        Получить
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default FinishSelect;