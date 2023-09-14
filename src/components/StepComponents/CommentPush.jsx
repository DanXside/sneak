import { Textarea } from "@mui/joy";
import { Box, Typography } from "@mui/material";
import React, {useState} from "react";

const CommentPush = () => {
    const [textValue, setTextValue] = useState('');

    return (
        <Box>
            <Typography variant="h2" component="h2" sx={{
                fontWeight: 600,
                fontSize: '3rem',
                color: '#444B58',
                marginBottom: '2rem'
            }}>
                Уточните какие либо моменты
            </Typography>
            <Textarea 
                value={textValue}
                onChange={(event) => setTextValue(event.target.value)}
                sx={{width: '50rem'}}
                minRows={10}
                size="lg"
                variant="outlined"
                placeholder="Введите сообщение" 
            />
        </Box>
    )
}

export default CommentPush;