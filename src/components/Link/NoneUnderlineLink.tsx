import classNames from 'classnames'
import Link from 'next/link'
import React, { FC, HTMLAttributeAnchorTarget, ReactNode } from 'react'

import styles from './NoneUnderlineLink.module.scss'

type NoneUnderlineLinkProps = Readonly<{
  href: string
  children: ReactNode
  target?: HTMLAttributeAnchorTarget | undefined
  className?: string
}>

const NoneUnderlineLink: FC<NoneUnderlineLinkProps> = (props) => {
  const { href, children, target = undefined, className = '' } = props
  return (
    <Link
      href={href}
      className={classNames(styles['link'], className)}
      target={target}
    >
      {children}
    </Link>
  )
}

export default NoneUnderlineLink
