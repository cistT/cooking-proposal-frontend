import { Button, Divider } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons'
import React, { FC } from 'react'

import styles from './CookVerticalCard.module.scss'

import VerticalCard from 'components/Card/VerticalCard/VerticalCard'
import NoneUnderlineLink from 'components/Link/NoneUnderlineLink'
import CookOverview, {
  CookOverviewProps,
} from 'features/Cook/Overview/CookOverview'

type CookVerticalCardProps = Readonly<{
  header: string
  image: string
  imageAlt?: string
  href: string
}> &
  CookOverviewProps

const CookVerticalCard: FC<CookVerticalCardProps> = (props) => {
  const { description, indication, cost, material, href } = props

  return (
    <VerticalCard
      {...props}
      explanation={
        <>
          <CookOverview
            description={description}
            indication={indication}
            cost={cost}
            material={material}
          />
          <Divider my='sm' />
          <NoneUnderlineLink href={href} target='_blank'>
            <Button
              radius='md'
              className={styles['button']}
              leftIcon={<IconExternalLink />}
            >
              レシピを見に行く
            </Button>
          </NoneUnderlineLink>
        </>
      }
    />
  )
}

export default CookVerticalCard
