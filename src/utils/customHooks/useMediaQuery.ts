import { useState, useEffect } from 'react'

export function useMediaQuery(queryValue: string, initialValue = false) {
  const [match, setMatch] = useState(initialValue)

  useEffect(() => {
    let isMounted = true
    const matchMedia = window.matchMedia(queryValue)

    const handleChange = () => {
      if (!isMounted) return
      setMatch(Boolean(matchMedia.matches))
    }

    matchMedia.addEventListener('change', handleChange)
    setMatch(Boolean(matchMedia.matches))

    return () => {
      isMounted = false
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [queryValue])

  return match
}

// How to Use

// const app = () => {
//     const breakpoints = ['576px', '768px', '992px', '1200px', '1400px'];
//     const mediaQueryMobile = useMediaQuery(`(max-width: ${breakpoints[1]})`);
// }
