import React, { ReactNode } from 'react'
import Menu from 'components/Menu/Menu'

type ContainerProps = {
   children?: ReactNode
}

const Container = ({
   children,
}: ContainerProps) => {
   return (
      <div className="container mx-auto px-20 h-full">
         <Menu />
         {children}
      </div>
   )
}

export default Container;