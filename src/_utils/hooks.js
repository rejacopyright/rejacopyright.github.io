import {useEffect} from 'react'
import debounce from 'lodash.debounce'
function useDebounce(func, timeout){
  const save = debounce(func, timeout)
  return save(func)
}
function useSize(func, timeout){
  useEffect(() => {
    const updateSize = debounce(func, timeout || 100)
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [func, timeout])
}

export {
  useDebounce,
  useSize,
}
