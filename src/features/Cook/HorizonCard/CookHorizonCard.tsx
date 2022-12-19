import React, { FC } from 'react'

import HorizonCard from 'components/Card/HorizonCard/HorizonCard'
import CookOverview, {
  CookOverviewProps,
} from 'features/Cook/Overview/CookOverview'

type CookHorizonCardProps = Readonly<{
  header: string
  image?: string
  imageAlt?: string
}> &
  CookOverviewProps

const CookHorizonCard: FC<CookHorizonCardProps> = (props) => {
  const { description, indication, cost, material } = props
  return (
    <HorizonCard
      {...props}
      explanation={
        <CookOverview
          description={description}
          indication={indication}
          cost={cost}
          material={material}
        />
      }
    />
  )
}

export default CookHorizonCard
