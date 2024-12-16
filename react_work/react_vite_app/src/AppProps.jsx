import React from "react";
import Child1 from "./components/Child1";
export default function AppProps(){
    const data = {
        name :"aayush",
        section :"A",
        roll_no:1
    }
    return(
        <div>
            AppProps
            <div>
                <Child1 ChildData ={data}/>
            </div>
        </div>
    )
}
