import React from 'react'
import { FallbackProfileIcon } from '../../utils/icons'
import Spinner from './Spinner'

export const ProfilePic = ({ size, isLoading = false, picUrl }) => {
  if (isLoading) {
    return (
      <div className={`w-[${size}px] h-[${size}px] border border-slate-300 rounded-xl`}>
        <Spinner size={size}/>
      </div>
    )
  }

  if (picUrl === undefined)
    return <FallbackProfileIcon size={25}/>

  return (
    <img src={picUrl} 
        alt="" 
        width={size} 
        height={size}
        className={`border rounded-xl`}
    />
  )
}
