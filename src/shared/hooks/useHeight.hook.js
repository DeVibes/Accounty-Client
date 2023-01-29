import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export const useHeight = () => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })
}
