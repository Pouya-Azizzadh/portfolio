import React,{PropsWithChildren,FC} from 'react'

interface Props{
    className?:string
}
export const Button:FC<PropsWithChildren<Props>> = ({children,className})=> {
  return (
    <button className='bg-primary text-white p-4 my-4 rounded-[20px]'>{children}</button>
  )
}
