import { NavLink } from 'react-router-dom'

export const RecentTransactionsHeader = () => {
  return (
    <div className="mb-3 flex justify-between items-end shrink-0">
      <span className="text-slate-400 text-xl">Recent transactions</span>
      <NavLink
        to="/transactions"
        children={() => (
          <span className="text-slate-500 text-md text-left mr-1">
            view all
          </span>
        )}
      />
    </div>
  )
}
