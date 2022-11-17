import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";


export default function CountryInfoCard({country}) {
if(country!==undefined){
    return (
        <Card sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 200}}>
            <CardMedia
                component="img"
                height="200"
                image={`${country.flag}`}
                alt={country.name}
                sx={{width: 300, height: 200}}
            />

            <CardContent sx={{minWidth: '200px'}}>
                <Typography variant="h5" component="div" sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h5">
                        Название:
                    </Typography>
                    <Typography variant="body1" sx={{ml: 2, fontSize: 20}}>
                        {country.nativeName}
                    </Typography>
                </Typography>
                <Typography variant="h5" component="div" sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h5">
                        Население:
                    </Typography>
                    <Typography variant="body1" sx={{ml: 2, fontSize: 20}}>
                        {country.population}
                    </Typography>
                </Typography>
                <Typography variant="h5" component="div" sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h5">
                        Регион:
                    </Typography>
                    <Typography variant="body1" sx={{ml: 2, fontSize: 20}}>
                        {country.region}
                    </Typography>


                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="h5" component="div" sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h5">
                        Столица:
                    </Typography>
                    <Typography variant="body1" sx={{ml: 2, fontSize: 20}}>
                        {country.capital}
                    </Typography>
                </Typography>
                <Typography variant="h5" component="div" sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h5">
                        Пограничные страны:
                    </Typography>
                    <Typography variant="body1" sx={{ml: 2, fontSize: 20}}>
                        {country.borders.map((item)=>{
                           return <a href={item} key={item}>{item}</a>
                        })}
                    </Typography>
                </Typography>

            </CardContent>

        </Card>
    )
}
else {
    return <div>Loading</div>;
}


}