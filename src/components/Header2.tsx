import React,{PropsWithChildren,FC} from 'react'

interface Props{
    className?:string
}
const Header2:FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <h1 className={`text-[30px] leading-[44px] font-bold text-white ${className}`}>{children}</h1>
  )
}

export default Header2