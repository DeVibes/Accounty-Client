import React from 'react'

export const ErrorMsg = ({ msg }) => (
  <p className="mt-2 text-sm text-red-400">
    <span className="font-medium">{msg}</span>
  </p>
)
