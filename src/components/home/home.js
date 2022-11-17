import '../../App.css';
import React from 'react';
import MenuAppBar from "../header";
import MediaCard from "../card";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {SET_ALL_COUNTRIES} from "../../constants";
import {Outlet} from "react-router-dom";

function Home() {
    const stateAllCountries=useSelector(state => state.getAllCountries);
    console.log(stateAllCountries.countries.map(item=>item));
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch({type:SET_ALL_COUNTRIES});
    },[]);
    return (<div className={'container-fluid'}>
           <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}> {stateAllCountries.countries.map((item,index)=>{
            return <MediaCard countrie={item} id={item.alpha3Code} key={index}/>
        })}</div>
    </div>);
}
export default Home;

