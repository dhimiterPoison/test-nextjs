import React from 'react'

type Props = {
    className?: string,
    children: React.ReactNode
}
const MyButton = ({className, children, ...otherProps} : Props) => {
  return (
    <button className='btn' >{children}</button>
  )
}

export default MyButton