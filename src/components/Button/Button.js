import React from 'react'
import cn from 'classnames'

import './styles'
import { bem } from '../../utils'

const b = bem('button')

const Button = ({
  className,
  color,
  children,
  ...rest
}) => {
  return (
    <button
      style={{
        backgroundColor: color
      }}
      className={cn(b(), className)}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
