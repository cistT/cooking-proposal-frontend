import { useWindowSize } from 'react-use'

const SMARTPHONE_MAX_WIDTH = 600

const useIsSP = () => {
  const { width } = useWindowSize()

  return { isSP: width <= SMARTPHONE_MAX_WIDTH }
}

export default useIsSP
