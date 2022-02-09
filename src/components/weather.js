import React from 'react'

function Weather(props){

    return (
        <div className="container" >
            <div className="cards pt-4">
                <h1>{props.city}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5> 
                
                {props.temp_celsius?(<h3 className="py-2"> Current Temperature - {props.temp_celsius}&deg;</h3>):null}

                {minmaxTemp(props.temp_min,props.temp_max)}

                <h3 className="py-3">  {props.desc}</h3>

            </div>
        </div>
    )
}

function minmaxTemp(min,max){
    if(min&&max){
        return(
            <h3>        
                <span className="px-5"> <h3> Lowest Temperature : {min}&deg; </h3> </span>
                <span className="px-5"> <h3> Highest Temperature : {max}&deg; </h3> </span>
    
            </h3>
        )
    }
    else{
        return null
    }
    
}

export default Weather