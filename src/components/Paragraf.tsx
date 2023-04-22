import React,{PropsWithChildren,FC} from 'react'

interface Props{
    className?:string
}
const Paragraf:FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <p className={`text-[16px] text-[#a6a7ac] ${className}`}>{children}</p>
  )
}

export default Paragraf