import { DateTime } from 'luxon'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useFiltersStore } from '../../shared/state/filtersStore'
import { ErrorMsg } from '../TransactionForm/components/ErrorMsg'
import { Input } from '../TransactionForm/components/Input'

export const FilterForm = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { setDates } = useFiltersStore((state) => state.setDates)
  const onUpdateClick = (data) => {
    const formattedDates = {
      fromDate: DateTime.fromISO(data.fromDate).startOf('day').toUTC().toISO(),
      endDate: DateTime.fromISO(data.toDate).endOf('day').toUTC().toISO(),
    }
    setDates(formattedDates.fromDate, formattedDates.endDate)
    handleClose()
  }
  const onSubmit = handleSubmit((data) => onUpdateClick(data))
  return (
    <form onSubmit={onSubmit} className="grid grid-rows-2 grid-cols-2 gap-4">
      <div className="">
        <Input
          name="fromDate"
          type="datetime-local"
          register={register}
          required
          label="Start Date"
        />
        {errors.fromDate && <ErrorMsg msg="Please enter start date" />}
      </div>
      <div className="">
        <Input
          name="toDate"
          type="datetime-local"
          register={register}
          required
          label="To Date"
        />
        {errors.toDate && <ErrorMsg msg="Please enter end date" />}
      </div>
      <div className="col-span-2 mt-2">
        <button type="submit" className="rounded-xl bg-[#7aa2f7] w-full h-full">
          Update
        </button>
      </div>
    </form>
  )
}
