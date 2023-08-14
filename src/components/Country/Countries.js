import React, { useEffect, useState } from 'react';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);
    return (
        <div>
            <h2>Hello from Countries : {countries.length}</h2>
            {
                // countries.map(country => console.log(country))
            }
            <div className='countries-container'>
            {
                countries.map(country => <Country 
                    country = {country} 
                    key = {country.cca3}
                    ></Country>)
            }
            </div>
        </div>
    );
};

function Country(props){
    // console.log(props.country)
    const {area,region,name,population,flags} = props.country;
    return(
        <div className='country bg-danger'>
            <div></div>
            <h2>Name: {name.common}</h2>
            <img src= {flags.png} alt="" />
            <p>Area: {area} klm</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    )
}

export default Countries;