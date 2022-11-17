import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

export default function MediaCard({countrie,id}) {
    return (
        <Card sx={{ maxWidth: 345, mt:2 }}>
            <CardMedia
                component="img"
                height="140"
                image={`${countrie.flag}`}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {countrie.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                   Население:{countrie.population}
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                    Регион:{countrie.region}
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                  Столица:{countrie.capital}
                </Typography>
            </CardContent>
            <CardActions>

                <Link to={`/${id}`}><Button size="small">Learn More</Button></Link>
            </CardActions>
        </Card>
    );
}
