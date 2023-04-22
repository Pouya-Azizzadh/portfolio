import React,{PropsWithChildren,FC} from 'react'

interface Props{
    className?:string
}
const Header1:FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <h1 className={`text-[44px] leading-[60px] font-bold text-white ${className}`}>{children}</h1>
  )
}

export default Header1