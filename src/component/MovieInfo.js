import * as React from 'react';
import Grid from '@mui/material/Grid';

import MovieCard from './MovieCard';

function MovieInfo(props) {
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
                <MovieCard name="怪奇物語4" image="怪奇物語4.jfif" content="年輕的威爾從友人住處返家，途中卻目睹一番恐怖景象；不遠處的政府實驗室也暗藏不可告人的秘密。" />
            </Grid>
            <Grid item md={3}>
                <MovieCard name="奇異博士2：失控多重宇宙" image="奇異博士2：失控多重宇宙.jpg" />
            </Grid>
            <Grid item md={3}>
                <MovieCard name="怪獸與鄧不利多的秘密" image="怪獸與鄧不利多的秘密.jpg" />
            </Grid>
            <Grid item md={3}>
                <MovieCard name="我吃了那男孩一整年的早餐" image="我吃了那男孩一整年的早餐.jfif" />
            </Grid>
        </Grid>
    )
}

export default MovieInfo;