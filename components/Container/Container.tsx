import React, { ReactNode } from 'react'
import Menu from 'components/Menu/Menu'

type ContainerProps = {
   children?: ReactNode
   haveMenuButton?: boolean
}

const Container = ({
   children,
   haveMenuButton = true,
}: ContainerProps) => {
   return (
      <div className="container mx-auto px-20 h-full">
         {haveMenuButton && <Menu />}
         {children}
      </div>
   )
}

export default Container;