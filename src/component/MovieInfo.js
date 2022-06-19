import * as React from 'react';
import Box from '@mui/material/Box';

import MovieCard from './MovieCard';

function MovieInfo() {
    return (
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <MovieCard name="怪奇物語4" content="年輕的威爾從友人住處返家，途中卻目睹一番恐怖景象；不遠處的政府實驗室也暗藏不可告人的秘密。" />
            <MovieCard name="奇異博士2：失控多重宇宙" />
            <MovieCard name="怪獸與鄧不利多的秘密" />
            <MovieCard name="我吃了那男孩一整年的早餐" />
        </Box>
    )
}

export default MovieInfo;