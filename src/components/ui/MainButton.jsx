import React from "react";
import { Button } from "@mui/material";


const MainButton = ({color, text, handle}) => {
    return (
        <Button onClick={() => handle()} variant="contained" color={color} sx={{
            width: '24.8rem',
            height: '6.3rem',
            padding: '2.2rem 3rem',
            fontSize: '1.4rem',
            fontWeight: 400
        }}>
            {text}
        </Button>
    )
};

export default MainButton;