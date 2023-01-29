import { useEffect } from 'react'
import { useAuth } from '../../LoginView/hook/auth.hook'

export const PrivateRouteHOC = ({ children }) => {
  const { validateUser } = useAuth()
  useEffect(() => {
    validateUser()
  }, [])

  return children
}
