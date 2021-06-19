import { useState, useEffect } from 'react'

export function useFullSize() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])

  return { width, height }
}
