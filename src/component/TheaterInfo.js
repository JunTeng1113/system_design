import * as React from 'react';
import Box from '@mui/material/Box';

import TheaterCard from './TheaterCard';

function TheaterInfo(props) {
    return (
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <TheaterCard name="夢時代跳跳先生影城" />
            <TheaterCard name="新光三越跳跳先生影城" />
            <TheaterCard name="岡山百貨跳跳先生影城" />
            <TheaterCard name="高科燕巢校區跳跳先生影城" />
        </Box>
    )
}
export default TheaterInfo;