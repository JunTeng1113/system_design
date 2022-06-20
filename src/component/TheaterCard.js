import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function TheaterCard(props) {
    const { name, image } = props;
    const path = require(`../datas/images/theaters/${image}`)
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                component="img"
                height="200"
                image={path}
                alt="404 not found"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    地址 <br />
                    連絡電話
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default TheaterCard;