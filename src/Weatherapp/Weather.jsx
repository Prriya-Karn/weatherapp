import React, { Fragment, useEffect, useState } from "react";
import './Weather.css';
const Weather = ()=>{
    const[data,updateData] = useState('Mumbai');
    // const[newData,newUpdate] = useState();
  
 
    const[temp,updatetemp] = useState();

useEffect(()=>{
    
    const Weather = async ()=>{
           
        // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=10f2aa997021ec268c9f279c21b0df27`);
        // const fres = await res.json();
        // for unit celsius:-
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=efb1dd4912c66d1b0f8aac950caa66ac`);
        const fres = await res.json();
        
          updatetemp(fres.main);
        
          
     
    }
    
    Weather();

},[data])

//if you we are not use subscript operator then useEffect call again and
// again and and fetch the api again again 
return(
   
    <div className="parent">
     
  <div className="child">
  <div className="container">
    <div className="input" >
    <input type="text" value={data}
    onChange={(event)=>{updateData(event.target.value)}}/>
 </div>

    {
        !temp?(<h1 className="error">No Data Found</h1>):(
            <>
            <div className="city_name"><h1>{data}</h1> </div>
            <div className="city_temp_1">{temp.temp_max}cel</div>
            <div className="city_temp">Temp-Max:{temp.temp_max}cel|Temp-Min:{temp.temp_min}cel</div>   
        
  <div className="wave-01"></div>
  <div className="wave-02"></div>
  <div className="wave-03"></div>


            </>
            )
    }
</div>
 </div>
  
</div>
     
  
)
}


export default Weather;