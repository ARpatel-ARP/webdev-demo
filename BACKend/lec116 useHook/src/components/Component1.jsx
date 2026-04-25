import React, {useContext} from 'react'
import { CountContext } from '../context/context'

const Component1 = () => {
  const count = useContext(CountContext)
  return (
    <div>
       {count}
    </div>
  )
}

export default Component1
