import * as React from 'react';
import Grid from '@mui/material/Grid';

import TheaterCard from './TheaterCard';

function TheaterInfo(props) {
    return (
        <Grid 
            container 
            columns={{md: 12}} 
            spacing={2}
            sx={{
                p: 2
            }}
        >
            <Grid item md={3}>
                <TheaterCard name="夢時代跳跳先生影城" image="theater1.jpg" /> 
            </Grid>
            <Grid item md={3}>
                <TheaterCard name="新光三越跳跳先生影城" image="theater2.jpg" />
            </Grid>
            <Grid item md={3}>
                <TheaterCard name="岡山百貨跳跳先生影城" image="theater3.jpg" />
            </Grid>
            <Grid item md={3}>
                <TheaterCard name="高科燕巢校區跳跳先生影城" image="theater4.jpg" />
            </Grid>
        </Grid>
    )
}
export default TheaterInfo;