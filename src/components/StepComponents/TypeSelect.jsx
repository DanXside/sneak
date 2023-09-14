import React, {useState} from "react";
import { FormGroup, Grid, FormControlLabel, Checkbox, Typography } from "@mui/material";

import { styled } from "@mui/styles";
import cross from '../../img/products/cross.jpg';

const StyledFormLabel = styled(FormControlLabel)(({theme}) => ({
    '& .MuiCheckbox-root svg': {
        width: '3rem',
        height: '3rem'
    },
    '& .MuiTypography-root': {
        fontWeight: 400,
        fontSize: '1.4rem'
    }
}))

const TypeSelect = () => {
    const [types, setTypes] = useState([
        {
            kind: 'Беговые',
            checked: false
        },
        {
            kind: 'Баскетбольные',
            checked: false
        },
        {
            kind: 'Футбольные',
            checked: false
        },
        {
            kind: 'Повседневные',
            checked: false
        },
        {
            kind: 'Фитнес',
            checked: false
        },
        {
            kind: 'Скейтерские',
            checked: false
        }
    ]);

    const handleCheckbox = (id) => {
        setTypes(types.map((type, index) => {
            if (index === id) {
                return {
                    ...type,
                    checked: !type.checked
                }
            } 
            return type;
        }));
    };

    return (
        <FormGroup sx={{marginTop: '2rem'}}>
            <Typography variant="h2" component="h2" sx={{
                fontWeight: 600,
                fontSize: '3rem',
                color: '#444B58',
                marginBottom: '2rem'
            }}>
                Какой тип кроссовок рассматриваете?
            </Typography>
            <Grid container spacing={2}>
                {types.map((type, index) => (
                    <Grid item key={type.kind} xs={4} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: '1rem'
                    }}>
                        <img src={cross} alt="type"/>
                        <StyledFormLabel
                            label={type.kind}
                            sx={{
                                fontSize: '1.6rem'
                            }}
                            control={
                                <Checkbox checked={type.checked} onChange={() => handleCheckbox(index)} />
                            } 
                        />
                    </Grid>
                ))}
            </Grid>
        </FormGroup>
    )
}

export default TypeSelect;