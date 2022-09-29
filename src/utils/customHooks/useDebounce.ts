import { useState, useEffect } from 'react'

export const useDebounce = (value: unknown, delay: number | undefined) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}

// How To Use

// const Counter = () => {
//   const [value, setValue] = useState(0)
//   const lastValue = useDebounce(value, 500)

//   return (
//     <div>
//       <p>
//         Current: {value} - Debounced: {lastValue}
//       </p>
//       <button onClick={() => setValue(value + 1)}>Increment</button>
//     </div>
//   )
// }
