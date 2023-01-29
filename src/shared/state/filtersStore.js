import { DateTime } from 'luxon'
import { create } from 'zustand'

const initialState = {
  toDate: DateTime.fromISO(DateTime.now()).endOf('day').toUTC().toISO(),
  fromDate: DateTime.fromISO(DateTime.now().minus({ years: 1 }))
    .startOf('day')
    .toUTC()
    .toISO(),
}

export const useFiltersStore = create((set) => ({
  ...initialState,
  setDates: (to, from) =>
    set((state) => ({
      ...state,
      fromDate: from,
      toDate: to,
    })),
  resetFilters: () => set({ initialState }),
}))
