import React,{PropsWithChildren,FC} from 'react'

interface Props{
    className?:string
}
const Header3:FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <h1 className={`text-[26px] leading-[38px] font-bold text-white ${className}`}>{children}</h1>
  )
}

export default Header3