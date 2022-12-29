import { Button } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons'
import classNames from 'classnames'
import React, { FC } from 'react'

import styles from './ShowRecipeButton.module.scss'

import NoneUnderlineLink from 'components/Link/NoneUnderlineLink'

type ShowRecipeButtonProps = {
  href: string
  className?: string
}

const ShowRecipeButton: FC<ShowRecipeButtonProps> = (props) => {
  const { href, className = '' } = props
  return (
    <NoneUnderlineLink href={href} target='_blank' className={styles['link']}>
      <Button
        radius='md'
        className={classNames(styles['button'], className)}
        leftIcon={<IconExternalLink />}
      >
        レシピを見る
      </Button>
    </NoneUnderlineLink>
  )
}

export default ShowRecipeButton
