import React from "react";
export default function Child3({child3data}){
    return(
        <div>
            <h1>Name : {child3data.name}</h1>
            <h3> Section : {child3data.section}</h3>
            <h2> Roll_no: {child3data.roll_no}</h2>
        </div>
    )
}