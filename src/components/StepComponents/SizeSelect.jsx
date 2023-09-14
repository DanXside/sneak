import React, {useState} from "react";
import { FormGroup, FormControlLabel, Checkbox, Stack, Box, Typography } from "@mui/material";

import { styled } from "@mui/styles";
import frameSize from '../../img/frame-size.jpg';

const StyledFormLabel = styled(FormControlLabel)(({theme}) => ({
    '& .MuiCheckbox-root svg': {
        width: '3rem',
        height: '3rem'
    },
    '& .MuiTypography-root': {
        fontWeight: 400,
        fontSize: '1.4rem'
    }
}));

const SizeSelect = () => {
    const [sizes, setSizes] = useState([
        {
            label: 'менее 36',
            checked: false
        },
        {
            label: '36-38',
            checked: false
        },
        {
            label: '39-41',
            checked: false
        },
        {
            label: '42-44',
            checked: false
        },
        {
            label: '45 и больше',
            checked: false
        }
    ]);

    const handleCheckbox = (id) => {
        setSizes(sizes.map((size, index) => {
            if (index === id) {
                return {
                    ...size,
                    checked: !size.checked
                }
            } 
            return size;
        }));
        checkDisable();
    };

    function checkDisable () {
        if (sizes.filter(size => size.checked === true).length >= 1) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <FormGroup sx={{marginTop: '2rem'}}>
            <Typography variant="h2" component="h2" sx={{
                fontWeight: 600,
                fontSize: '3rem',
                color: '#444B58',
                marginBottom: '2rem'
            }}>
                Какой размер вам подойдет?
            </Typography>
            <Stack direction="row" spacing={12}>
                {sizes.map((size, index) => (
                    <StyledFormLabel
                        label={size.label}
                        control={
                            <Checkbox disabled={checkDisable()} checked={size.checked} onChange={() => handleCheckbox(index)} />
                        } 
                    />
                ))}
            </Stack>
            <Box sx={{
                width: '100rem',
                height: '28rem',
                margin: '0 auto',
                marginTop: '2rem'
            }}>
                <img src={frameSize} alt="size" />
            </Box>
        </FormGroup>
    )
}

export default SizeSelect;