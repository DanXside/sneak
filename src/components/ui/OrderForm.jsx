import { TextField, Button } from "@mui/material";
import React from "react";

import { useForm, Controller } from "react-hook-form";
import '../../style/form.css';

const OrderForm = () => {
    const {control, handleSubmit} = useForm();

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <TextField 
                        variant="filled"
                        label="Ваше имя"
                        type="text"
                        onChange={e => field.onChange(e)}
                        value={field.value}
                        sx={{
                            width: '50rem',
                        }}
                    />
                )}
            />

            <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                    <TextField 
                        variant="filled"
                        label="Номер телефона"
                        type="tel"
                        margin="dense"
                        onChange={e => field.onChange(e)}
                        value={field.value}
                        sx={{
                            width: '50rem',
                        }}
                    />
                )}
            />

            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <TextField 
                        variant="filled"
                        label="E-mail"
                        type="email"
                        margin="dense"
                        onChange={e => field.onChange(e)}
                        value={field.value}
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