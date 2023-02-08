import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

const SMARTPHONE_MAX_WIDTH = 600

const useIsSP = () => {
  const { width } = useWindowSize()
  const [isSP, setIsSP] = useState(width <= SMARTPHONE_MAX_WIDTH)
  useEffect(() => {
    setIsSP(width <= SMARTPHONE_MAX_WIDTH)
  }, [width])

  return { isSP }
}

export default useIsSP
