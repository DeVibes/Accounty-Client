import { TransactionListLoader } from './TransactionListLoader'
import { AnimatedTransactions } from './AnimatedTransactions'
import { createRef } from 'react'
import { fetchOnBottom } from '../../../shared/services/bottomFetch.service'
import Spinner from '../../../shared/components/Spinner'

export const TransactionsList = ({
  pagedTransactions,
  isLoading,
  paginationAPI,
}) => {
  const listRef = createRef(null)
  const { isFetchingNextPage, hasNextPage } = paginationAPI
  const onScroll = fetchOnBottom(listRef, paginationAPI)
  return (
    <div className="overflow-y-auto grow" ref={listRef} onScroll={onScroll}>
      {isLoading ? (
        <TransactionListLoader />
      ) : (
        pagedTransactions.length > 0 && (
          <>
            <AnimatedTransactions
              pagedTransactions={pagedTransactions}
              isFetchingNextPage={isFetchingNextPage}
            />
            {isFetchingNextPage && hasNextPage ? (
              <div className="flex justify-center py-4">
                <Spinner size={25} />
              </div>
            ) : null}
          </>
        )
      )}
    </div>
  )
}
