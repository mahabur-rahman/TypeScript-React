import React   from 'react'

type StatusProps = {
  children : string
}


const ContainerComp: React.FC<StatusProps> = ({children}) => {
  return (
    <>
     <h1> 
      {children}
      </h1> 
    </>
  )
}

export default ContainerComp
