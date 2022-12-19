import { Text } from '@mantine/core'
import React from 'react'

import styles from './CookOverview.module.scss'

// 人間が短期的にモノを覚えれる個数が4個のため、表示する材料の数を4とした
// ただし、1行で材料が表示できない場合は、材料を...で省略する
const MAX_MATERIAL_NUMBER = 4

export type CookOverviewProps = Readonly<{
  description: string
  indication: string
  cost: string
  material: string[]
}>

const CookOverview: React.FC<CookOverviewProps> = (props) => {
  const { description, indication, cost, material } = props

  const materialString = material
    .filter((_, i) => i < MAX_MATERIAL_NUMBER)
    .join(' , ')

  return (
    <div className={styles['container']}>
      <Text className={styles['description']}>{description}</Text>

      <Text className={styles['indication-label']}>調理時間</Text>
      <Text className={styles['indication']}>{indication}</Text>
      <Text className={styles['cost-label']}>費用</Text>
      <Text className={styles['cost']}>{cost}</Text>
      <Text className={styles['material-label']}>主な材料</Text>
      <Text className={styles['material']}>{materialString}</Text>
    </div>
  )
}

export default CookOverview
