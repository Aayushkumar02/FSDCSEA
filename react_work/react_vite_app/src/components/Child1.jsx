import React from "react";
import Child2 from "./Child2";
export default function Child1({ChildData}){
    return(
        <div>
            <Child2 Child2data = {ChildData}/>
        </div>
    )
}