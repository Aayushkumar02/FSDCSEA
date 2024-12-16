import React,{useContext} from 'react'
import { mycontext } from '../AppContext'
import Child2context from './Child2context'
function Child3context() {
    const recievecontext = useContext(mycontext);
  return (
    <div>Child3context
        <div>

        </div>
      
    </div>
  )
}

export default Child3context
