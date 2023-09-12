import { TextField, Button } from "@mui/material";
import React from "react";

import { useForm, Controller, useFormState } from "react-hook-form";
import InputMask from "react-input-mask";
import '../../style/form.css';

const OrderForm = () => {
    const {control, handleSubmit} = useForm();

    const {errors} = useFormState({
        control
    });

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                rules={{required: 'Обязательное поле'}}
                render={({ field }) => (
                    <TextField 
                        variant="filled"
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
                control={control}
                name="phone"
                rules={{required: 'Обязательное поле'}}
                render={({ field }) => (
                    <InputMask
                        mask="+7 (999) 999 999-99"
                        onChange={e => field.onChange(e)}
                        value={field.value}
                    >
                        {(inputProps) => <TextField 
                                            {...inputProps}
                                            variant="filled"
                                            label="Ваш телефон"
                                            type="phone"
                                            margin="dense"
                                            error={!!errors.phone}
                                            helperText={errors.phone?.message}
                                            sx={{
                                                width: '50rem',
                                            }}
                                        />
                        }
                    </InputMask>
                )}
            />

            <Controller
                name="email"
                control={control}
                rules={{required: 'Обязательное поле'}}
                render={({ field }) => (
                    <TextField 
                        variant="filled"
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
                    marginBottom: '2rem',
                    paddingTop: '1rem',
                    width: '25rem',
                    height: '6rem',
                    fontSize: '1.4rem',
                    fontWeight: 400
                }}
            >
                Оформить заказ
            </Button>
        </form>
    );
}

export default OrderForm;