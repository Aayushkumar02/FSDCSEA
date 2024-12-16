import React from "react";
import Child3 from "./Child3";
export default function Child2({ Child2data}){
    return(
        <div>
            <Child3 child3data = {Child2data}/>
        </div>
    )
}