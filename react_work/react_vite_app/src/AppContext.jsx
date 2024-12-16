import React ,{createContext} from 'react'

import Child2context from './contextcomponent/Child2context'

const mycontext = createContext();
function AppContext() {
    const data = {
        name :"aayush",
        section :"A",
        roll_no:1
    }
  return (
    <div> AppContext
        <mycontext.Provider value = {data}>
            {/* <Child1context/> */}
            <Child2context/>
            {/* <Child3context/> */}
        </mycontext.Provider>
      
    </div>
  )
}

export {
    mycontext
}

export default AppContext