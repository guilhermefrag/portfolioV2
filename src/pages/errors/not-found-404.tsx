import { useEffect } from 'react'

export function NotFound404() {
  useEffect(() => {
    window.location.href = 'https://http.cat/404'
  }, [])

  return null
}
