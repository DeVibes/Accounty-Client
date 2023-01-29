import React from 'react'
import { Outlet } from 'react-router-dom'

export const Main = () => (
  <main className="grow overflow-y-hidden flex flex-col px-4 py-2">
    <Outlet />
  </main>
)
