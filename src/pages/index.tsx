import { IconSearch } from '@tabler/icons'
import { IconNews } from '@tabler/icons'
import { IconAlertCircle } from '@tabler/icons'
import { IconHeart } from '@tabler/icons'
import { useContext } from 'react'

import styles from './index.module.scss'

import LinkTextCardWithIcon from 'components/Button/LinkTextCardWithIcon/LinkTextCardWithIcon'
import {
  CAUTION_PATH,
  FAVORITE_RECIPES_PATH,
  PROPOSAL_RECIPE_PATH,
  SELECTION_NEWS_PATH,
} from 'consts/path'
import { UIDContext } from 'features/Auth/UIDProvider'

const Home = () => {
  const uid = useContext(UIDContext)

  return (
    <div className={styles['container']}>
      <LinkTextCardWithIcon
        text='料理を見る'
        href={PROPOSAL_RECIPE_PATH}
        icon={<IconSearch className={styles['icon']} />}
      />
      {uid && (
        <LinkTextCardWithIcon
          text='お気に入り'
          href={FAVORITE_RECIPES_PATH}
          icon={<IconHeart className={styles['icon']} />}
        />
      )}
      <LinkTextCardWithIcon
        text='お知らせ'
        href={SELECTION_NEWS_PATH}
        icon={<IconNews className={styles['icon']} />}
      />
      <LinkTextCardWithIcon
        text='利用上の注意'
        href={CAUTION_PATH}
        icon={<IconAlertCircle className={styles['icon']} />}
      />
    </div>
  )
}

export default Home
