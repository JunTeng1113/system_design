import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function TheaterCard(props) {
    const { name } = props;
    return (
        <Card sx={{ maxWidth: 345, m: '10px' }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image="/image.jpg"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
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