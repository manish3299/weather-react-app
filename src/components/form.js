import React from 'react'


function FormData(props){

    return(
        <div className="container">
            <div>{props.error?error():null}</div>
            <form onSubmit={props.loadweather}>
             <div className="row">

               <div className="col-md-4 mb-2">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="city"></input>
                </div>

                <div className="col-md-4 mb-2">
                    <input type="text" className="form-control" name="country" autoComplete="off" placeholder="country"></input>
                </div>

                <div className="col-md-4 mb-2">
                
                    <button className="btn btn-warning">GET WEATHER</button>
                </div>

             </div>
            </form>
        </div>
    )

}

function error(){
    return(
        alert("please enter city and country")
    )
}

export default FormData