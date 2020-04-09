import React from 'react'
import cn from 'classnames'

import './styles'
import { bem } from '../../utils'

const b = bem('button')

const Button = ({
  className,
  color,
  children,
  type,
  ...rest
}) => {
  const { disabled } = rest

  return (
    <button
      style={{
        backgroundColor: color
      }}
      className={
        cn(b(null, {
          [type]: type,
          disabled
        }), className)
      }
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
