import { FC, ReactNode, createContext } from 'react'

import { UID } from './UID'

type AuthProviderProps = {
  children: ReactNode
  value: UID
}

export const UIDContext = createContext<UID>(null)

const UIDProvider: FC<AuthProviderProps> = (props) => {
  const { children, value } = props

  return <UIDContext.Provider value={value}>{children}</UIDContext.Provider>
}

export default UIDProvider
