import React from 'react'
import Spinner from '../../../../shared/components/Spinner'
import { SeenIcon, UnseenIcon } from '../../../../utils/icons'

export const TransactionLeftActions = ({
  isTransactionSeen,
  handleClick,
  isLoading,
}) => {
  return (
    <span
      className={`${
        isTransactionSeen ? 'bg-red-900' : 'bg-lime-600'
      } rounded-l-lg px-3 w-14
            flex justify-center items-center cursor-pointer`}
      onClick={(e) => handleClick(e)}
    >
      {isLoading ? (
        <Spinner />
      ) : isTransactionSeen ? (
        <UnseenIcon size={30} />
      ) : (
        <SeenIcon size={30} />
      )}
    </span>
  )
}
