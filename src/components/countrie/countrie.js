import CountryInfoCard from "./card";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SET_COUNTRY} from "../../constants";
import MenuAppBar from "../header";

export default function Country(){

    const countryParam=useParams().id;
    console.log(countryParam);
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch({type:SET_COUNTRY,countryParam:countryParam.toLowerCase()});
    },[]);
    const stateCountry=useSelector(state => state.getCountry);
console.log(stateCountry);
    return(<div className={'container-fluid'}>
           <CountryInfoCard country={stateCountry.country}/>
    </div>

    );
}