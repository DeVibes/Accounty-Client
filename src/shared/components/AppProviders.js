import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import { gAuthClientId } from '../../config'
import { ReactQuery } from '../../utils/ReactQuery'

const AppProviders = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={gAuthClientId}>
      <ReactQuery>{children}</ReactQuery>
    </GoogleOAuthProvider>
  )
}

export default AppProviders
