import React from 'react'
import Spinner from '../../../shared/components/Spinner'
import { ConfirmIcon, ErrorIcon } from '../../../utils/icons'

export const SubmitButton = ({ buttonState }) => {
  const { isPostLoading, isPostSuccess, isFormError, isFormLoading } =
    buttonState
  return (
    <span
      className={`w-full text-white p-2 rounded-lg flex justify-center
            ${
              isPostLoading || isPostSuccess || isFormError || isFormLoading
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-[#7aa2f7] cursor-pointer'
            }`}
    >
      {isFormError ? (
        <div classname="flex">
          <ErrorIcon size={25} classname="inline text-white mr-3" />
          <span classname="text-white">sorry an error occured</span>
        </div>
      ) : isPostLoading ? (
        <Spinner />
      ) : isPostSuccess ? (
        <ConfirmIcon size={25} />
      ) : (
        <input
          disabled={isFormLoading}
          type="submit"
          value="Save"
          className="cursor-pointer w-full"
        />
      )}
    </span>
  )
}
