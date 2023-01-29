import React from 'react'
import { ProfilePic } from '../../shared/components/ProfilePic'
import Spinner from '../../shared/components/Spinner'
import { useUserDataStore } from '../../shared/state/userDataStore'
import { LeftArrow } from '../../utils/icons'
import { useAuth } from '../LoginView/hook/auth.hook'
import { useRouting } from '../Router/hooks/routing.hook'

export const Header = () => {
  const { pageData, isBackBtnShown, isProfileShown, goBack } = useRouting()
  const picUrl = useUserDataStore((state) => state.picUrl)
  const { isLoading } = useAuth()
  return (
    <header className="text-slate-300 w-full p-4 flex justify-between items-center">
      {isBackBtnShown && (
        <span>
          <LeftArrow
            size={25}
            className="inline cursor-pointer"
            onClick={goBack}
          />
        </span>
      )}
      <span className="font-bold text-xl">{pageData.name}</span>
      {isLoading ? (
        <span
          className={`w-12 h-12 border rounded-xl flex justify-center items-center 
          ${isProfileShown ? '' : 'invisible'}`}
        >
          <Spinner />
        </span>
      ) : (
        <span className={`${isProfileShown ? '' : 'invisible'}`}>
          <ProfilePic size={45} picUrl={picUrl} />
        </span>
      )}
    </header>
  )
}
