import { Button } from '@mantine/core'
import { IconHeart } from '@tabler/icons'
import classNames from 'classnames'
import React, { FC } from 'react'

import styles from './FavoriteButton.module.scss'
import useFavoriteRecipe from './useFavoriteRecipe'

type FavoriteButtonProps = Readonly<{
  register: () => void
  release: () => void
  initialFavorite?: boolean
  className?: string
}>

const FavoriteButton: FC<FavoriteButtonProps> = (props) => {
  const { register, release, initialFavorite = false, className = '' } = props
  const { isFavorite, addFavorite, cancellationFavorite } =
    useFavoriteRecipe(initialFavorite)
  const registerOnClick = () => {
    register()
    addFavorite()
  }
  const releaseOnClick = () => {
    release()
    cancellationFavorite()
  }

  return (
    <>
      {isFavorite ? (
        <Button
          radius='md'
          className={classNames(styles['button'], className)}
          leftIcon={<IconHeart />}
          variant='light'
          onClick={releaseOnClick}
        >
          お気に入り解除
        </Button>
      ) : (
        <Button
          radius='md'
          className={styles['button']}
          leftIcon={
            <IconHeart className={classNames(styles['favorite'], className)} />
          }
          variant='light'
          onClick={registerOnClick}
        >
          お気に入り登録
        </Button>
      )}
    </>
  )
}

export default FavoriteButton
