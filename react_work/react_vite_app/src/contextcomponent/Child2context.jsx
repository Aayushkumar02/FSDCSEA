import React, { useContext } from 'react'
import { mycontext } from '../AppContext'

function Child2context() {
    const child2 = useContext(mycontext);

  return (
    <div>Child2Context
        <div>
            Name : {child2.name}
        </div>
      
    </div>
  )
}

export default Child2context
