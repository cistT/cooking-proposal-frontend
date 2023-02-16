import { Button } from '@mantine/core'
import React, { FC } from 'react'
import { IconReload } from '@tabler/icons'
import classNames from 'classnames'

type ReloadButtonProps = {
  onClick: () => void
  className?: string
}

const ReloadButton: FC<ReloadButtonProps> = (props) => {
  const { onClick, className } = props
  return (
    <Button onClick={onClick} className={classNames(className)}>
      <IconReload />
    </Button>
  )
}

export default ReloadButton
