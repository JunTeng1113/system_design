import * as React from 'react';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function MovieCard(props) {
    const { name, image } = props;
    const { content= "電影簡介" } = props;
    const path = require(`../datas/images/movies/${image}`)

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                component="img"
                height="350"
                image={path}
                alt="404 not found"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MovieCard;