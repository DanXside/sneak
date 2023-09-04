import React from "react";
import {Box, CircularProgress} from '@mui/material';

const Loader = () => {
    return (
        <Box sx={{width: '20rem', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress color="secondary" />
        </Box>
    );
};

export default Loader;