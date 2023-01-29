import React from 'react'
import { MountAnimationHOC } from './Animation/MountAnimationHOC'

export const NotificationBadgeHOC = ({ children, isShown }) => (
  <span className={`${isShown ? 'relative' : ''}`}>
    {children}
    {isShown && (
      <MountAnimationHOC>
        <div
          className={`absolute -top-1 -right-1 inline-flex justify-center
                    items-center w-4 h-4 rounded-md bg-red-700 cursor-pointer`}
        />
      </MountAnimationHOC>
    )}
  </span>
)
