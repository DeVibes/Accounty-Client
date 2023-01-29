import { shallow } from 'zustand/shallow'
import { useGoogleLogin } from '@react-oauth/google'
import { useState } from 'react'
import { useUserDataStore } from '../../../shared/state/userDataStore'
import { Session } from '../../../utils/session'
import { useRouting } from '../../Router/hooks/routing.hook'
import { getAPIAccessToken, getUsersGoogleData } from '../api/auth.api'

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { updateUserData, updateLinkedAccountId, resetUserData, hasUserData } =
    useUserDataStore(
      (state) => ({
        updateUserData: state.updateUserData,
        updateLinkedAccountId: state.updateLinkedAccountId,
        resetUserData: state.resetUserData,
        hasUserData: state.hasUserData,
      }),
      shallow
    )

  const setLoading = () => setIsLoading(true)
  const setNoLoading = () => setIsLoading(false)

  const { redirectToMain, redirectToLogin } = useRouting()

  const onSuccessfulLogin = async ({ access_token }) => {
    if (!access_token) {
      setNoLoading()
      handleLogout()
      return
    }
    Session.setData('gAccessToken', access_token)
    await setupUserAPIAccessToken(access_token)
    await setupUserGoogleData(access_token)
    setNoLoading()
    redirectToMain()
  }

  const handleLogin = () => {
    setLoading()
    googleLogin()
  }

  const googleLogin = useGoogleLogin({
    onSuccess: onSuccessfulLogin,
    onError: redirectToLogin,
  })

  const setupUserAPIAccessToken = async (gToken) => {
    const { apiToken, linkedAccountId } = await getAPIAccessToken(gToken)
    if (apiToken !== null) Session.setData('apiAccessToken', apiToken)
    Session.setData('linkedAccountId', linkedAccountId)
    // setAccount(linkedAccountId);
    updateLinkedAccountId(linkedAccountId)
  }

  const setupUserGoogleData = async (gToken) => {
    const userData = await getUsersGoogleData(gToken)
    if (!userData) {
      setNoLoading()
      handleLogout()
      return
    }
    Session.setDataObject(userData)
    updateUserData(userData)
  }

  const handleLogout = () => {
    Session.resetData()
    resetUserData()
    redirectToLogin()
  }

  const validateUser = () => {
    const gToken = Session.getData('gAccessToken')
    const apiToken = Session.getData('apiAccessToken')
    if (gToken === null || apiToken === null) handleLogout()
    if (!hasUserData()) {
      if (!sessionHasUserData()) handleLogout()
      setUserDataFromSession()
    }
  }

  const sessionHasUserData = () => {
    return (
      Session.getData('email') !== undefined &&
      Session.getData('name') !== undefined &&
      Session.getData('userId') !== undefined &&
      Session.getData('picUrl') !== undefined &&
      Session.getData('linkedAccountId') !== undefined
    )
  }

  const setUserDataFromSession = () => {
    const userDataFromSession = {
      linkedAccountId: Session.getData('linkedAccountId'),
      email: Session.getData('email'),
      name: Session.getData('name'),
      userId: Session.getData('userId'),
      picUrl: Session.getData('picUrl'),
    }
    updateUserData(userDataFromSession)
  }

  const api = {
    handleLogin,
    handleLogout,
    validateUser,
  }

  return { isLoading, ...api }
}
