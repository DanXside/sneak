import React, {useState} from "react";

import { Box, Typography, Slider, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import styles from '../../style/filter.module.css';
import MainButton from "./MainButton";

const ProductFilter = ({ value, setValue, sizes, setSizes, setProducts, sortedProducts}) => {
    

    const marks = [
        {
            value: 0,
            label: '0 p.'
        },
        {
            value: 20000,
            label: '20 000 p.'
        },
        {
            value: 40000,
            label: '40 000 p.'
        }
    ];

    function handleCheckbox(id) {
        setSizes(sizes.map(size => {
            if (size.id === id) {
                return {
                    ...size,
                    check: !size.check
                }
            }
            return size;
        }));
    };

    function submitFilter() {
        setProducts(sortedProducts);
    }

    return (
        <Box sx={{
            width: '28rem',
            height: '60rem',
            border: '1px solid var(--sec-bg, #FFF4EE)',
            background: '#FFF4EE',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
            padding: '1.6rem'
        }}>
            <Typography variant="h3" component="h3" color="#424242" sx={{
                fontWeight: 600,
                fontSize: '2rem'
            }}>
                Подбор по параметрам
            </Typography>
            <Typography variant="h4" component="h4" color="#424242" sx={{
                fontWeight: 400,
                fontSize: '1.6rem',
                marginTop: '2rem'
            }}>
                Цена, р.
            </Typography>

            <Box sx={{
                display: 'flex',
                width: '100%',
                marginTop: '1rem',
                gap: '0.4rem'
            }}>
                <Typography flexGrow={1} variant="h4" component="h4" color="#424242" sx={{
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    border: '0.2rem solid #B2B5BB',
                    borderTopLeftRadius: '0.6rem',
                    borderTopRightRadius: '0.6rem',
                    padding: '0.6rem',
                    height: '3rem',
                    borderBottom: 'none'
                }}>
                    от {value[0]}
                </Typography>
                <Typography flexGrow={1} variant="h4" component="h4" color="#424242" sx={{
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    border: '0.2rem solid #B2B5BB',
                    borderTopLeftRadius: '0.6rem',
                    borderTopRightRadius: '0.6rem',
                    padding: '0.6rem',
                    height: '3rem',
                    borderBottom: 'none'
                }}>
                    до {value[1]}
                </Typography>
            </Box>
            
            <Slider
                getAriaLabel={() => 'Цена'}
                min={0}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                step={5}
                max={40000}
                marks={marks}
                valueLabelDisplay="auto"
                color="secondary"
                disableSwap
                sx={{
                    fontSize: '1.4rem'
                }}
            />
            <FormControl sx={{ m: 3, marginLeft: 0 }} component="fieldset" variant="standard">
                <FormLabel component="legend" sx={{
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    marginTop: '2rem'
                }}>Размер</FormLabel>
                <FormGroup className={styles.filterGroup} sx={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    flexWrap: 'wrap',
                }}>
                    {
                        sizes.map((size) => 
                            <FormControlLabel key={size.id} 
                                control={
                                    <Checkbox checked={size.check} onChange={() => handleCheckbox(size.id)} name={size.value} />
                                }
                                label={size.value}
                            />
                        )
                    }
                </FormGroup>
            </FormControl>
            <MainButton 
                handle={submitFilter} 
                text="Применить" 
                color="secondary"
            />
        </Box>
    )
}

export default ProductFilter;