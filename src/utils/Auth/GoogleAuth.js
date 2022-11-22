import { GoogleOAuthProvider } from '@react-oauth/google';
import { gAuthClientId } from '../../config'

export const GoogleAuth = ({ children }) => 
    <GoogleOAuthProvider clientId={gAuthClientId}>
        {children}
    </GoogleOAuthProvider>