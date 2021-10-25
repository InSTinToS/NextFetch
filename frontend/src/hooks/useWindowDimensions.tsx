import { useEffect, useState } from 'react'

interface WindowDimension {
  innerWidth: number
  innerHeight: number
}

const useWindowDimensions = (): WindowDimension => {
  const [dimensions, setDimensions] = useState({
    innerWidth: 0,
    innerHeight: 0
  })

  useEffect(() => {
    setDimensions(() => ({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth
    }))
  }, [])

  useEffect(() => {
    const resize = () =>
      setDimensions(() => ({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth
      }))

    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return dimensions
}

export default useWindowDimensions
