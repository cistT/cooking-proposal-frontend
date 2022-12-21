import { Button } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons'
import classNames from 'classnames'
import React, { FC } from 'react'

import styles from './BackButton.module.scss'

import useBrowserBack from 'hooks/useBrowserBack'

type BackButtonProps = Readonly<{
  className?: string
}>

const BackButton: FC<BackButtonProps> = (props) => {
  const { className } = props

  const browserBack = useBrowserBack()

  return (
    <Button
      fullWidth
      variant='outline'
      leftIcon={<IconArrowBackUp />}
      onClick={browserBack}
      className={classNames(styles['container'], className)}
    >
      戻る
    </Button>
  )
}

export default BackButton
