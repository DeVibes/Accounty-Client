import React from 'react'
import { useAuth } from '../../modules/LoginView/hook/auth.hook';
import { PrivateRouteHOC } from '../../modules/Router/components/PrivateRouteHOC'
import { ProfilePic } from '../../shared/components/ProfilePic'
import { useUserDataContext } from '../../shared/context/user.context';
import { LogoutIcon } from '../../utils/icons';

export const Profile = () => {
  const { isLoading, handleLogout } = useAuth();
  const { userData } = useUserDataContext();
  return (
	<PrivateRouteHOC>
		<section className='flex justify-center'>
			<ProfilePic size={96} isLoading={isLoading} picUrl={userData?.picUrl}/>
		</section>
		<section className='mt-3 flex flex-col gap-2'>
			<span className='font-bold text-slate-300 text-xl'>Basic details</span>
			<span className='text-slate-300 text-xs'>Full name</span>
			<input type="text" disabled value={userData?.name} 
				className={`bg-slate-600 border border-gray-600 text-grey-900 text-sm rounded-lg p-2.5`}
			/>
			<span className='text-slate-300 text-xs'>Email</span>
			<input type="text" disabled value={userData?.email} 
				className={`bg-slate-600 border border-gray-600 text-grey-900 text-sm rounded-lg p-2.5`}
			/>
		</section>
		<section className='flex justify-end mt-4'>
			<button className='bg-red-800 rounded-xl p-2 flex justify-center items-center gap-2 cursor-pointer'
				onClick={handleLogout}
			>
				<LogoutIcon size={20} className="text-slate-200"/>
				<span className='text-slate-200'>Logout</span>
			</button>
		</section>
	</PrivateRouteHOC>
  )
}
