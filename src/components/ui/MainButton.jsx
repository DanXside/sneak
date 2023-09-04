import React from "react";
import { Button } from "@mui/material";

const MainButton = ({text, increaseLimit}) => {
    return (
        <Button onClick={() => increaseLimit()} variant="contained" color="error" sx={{
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