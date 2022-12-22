import { IconSearch } from '@tabler/icons'
import { IconNews } from '@tabler/icons'
import { IconAlertCircle } from '@tabler/icons'

import styles from './index.module.scss'

import LinkTextCardWithIcon from 'components/Button/LinkTextCardWithIcon/LinkTextCardWithIcon'

const Home = () => {
  return (
    <div className={styles['container']}>
      <LinkTextCardWithIcon
        text='料理を見る'
        href='/proposal'
        icon={<IconSearch className={styles['icon']} />}
      />

      {/* ログイン機能及びデータベースを構築したのち追加
      <LinkTextCardWithIcon
        text='お気に入り'
        href='/save'
        icon={<IconStar className={styles['icon']} />}
      /> */}

      <LinkTextCardWithIcon
        text='お知らせ'
        href='/news'
        icon={<IconNews className={styles['icon']} />}
      />

      <LinkTextCardWithIcon
        text='利用上の注意'
        href='/caution'
        icon={<IconAlertCircle className={styles['icon']} />}
      />
    </div>
  )
}

export default Home
