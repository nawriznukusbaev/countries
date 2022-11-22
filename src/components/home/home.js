import '../../App.css';
import React, {useState} from 'react';
import {TextField} from "@mui/material";
import MenuAppBar from "../header";
import MediaCard from "../card";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {SET_ALL_COUNTRIES} from "../../constants";

import {Outlet} from "react-router-dom";

function Home() {
    const stateAllCountries = useSelector(state => state.getAllCountries);
    const stateRegion=useSelector(state=>state.getRegion).region;
    const dispatch = useDispatch();
    const [value,setValue]=useState('');
    console.log(stateRegion);

    const countriesContinent=stateAllCountries.countries.filter((country)=>{
        if(stateRegion!=='all'){
            console.log('stateRegion');
            return country.region.toLowerCase().includes(stateRegion.toLowerCase())
        }
           else return country;
    })
    const countries=countriesContinent.filter((country)=>{
        return country.name.toLowerCase().includes(value.toLowerCase());
    })

    useEffect(() => {
        dispatch({type: SET_ALL_COUNTRIES});
    }, []);
    return (<div className={'container-fluid'}>
        <TextField id="outlined-basic" label="search" variant="outlined" style={{margin:"15px"}} onChange={(e)=>{
            setValue(e.target.value);
        }}/>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
        }}> {countries.map((item, index) => {
            return <MediaCard countrie={item} id={item.alpha3Code} key={index}/>
        })}</div>
    </div>);
}

export default Home;

