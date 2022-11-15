import '../../App.css';
import React from 'react';
import MenuAppBar from "../header";
import MediaCard from "../card";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {SET_ALL_COUNTRIES} from "../../constants";

function Home() {
    const stateAllCountries=useSelector(state => state.getAllCountries);
    console.log(stateAllCountries.countries.map(item=>item));
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch({type:SET_ALL_COUNTRIES});
        // console.log('Hello');
    },[]);
    return (<div className={'container-fluid'}>
        <MenuAppBar/>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}> {stateAllCountries.countries.map((item,index)=>{

            return <MediaCard countrie={item} key={index}/>
        })}</div>
    </div>);
}
export default Home;

