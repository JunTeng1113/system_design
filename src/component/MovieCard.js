import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function MovieCard(props) {
    const { name } = props;
    const { content= "電影簡介" } = props;
    return (
        <Card sx={{ maxWidth: 345, m: '10px' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="400"
                image="/movie.jfif"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
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