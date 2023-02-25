import { useQuery } from 'react-query';
import { QueryKeys } from '../../../utils/ReactQuery';
import { fetchMonthlyBalance } from '../api/analytics.api';
import { getTimeFrame, mapDataForBalance } from '../services/analytics.service';
import { useUserDataStore } from '../../../shared/state/userDataStore';
import { useFeedbackStore } from '../../../shared/state/feedbackStore';

export const useFetchBalance = () => {
    const { fromDate, toDate } = getTimeFrame();
    const openFeedback = useFeedbackStore((state) => state.openFeedback);
    const linkedAccountId = useUserDataStore((state) => state.linkedAccountId);

    const { data, isLoading, isError, error } = useQuery(
        [QueryKeys.FETCH_BALANCE, fromDate, toDate, linkedAccountId],
        () => fetchMonthlyBalance(fromDate, toDate, linkedAccountId)
    );
    let income = 0,
        outcomes = 0,
        balance = 0,
        categories = [];
    if (!isLoading) {
        income = data?.Income || 0;
        outcomes = data?.Outcome || 0;
        balance = income - outcomes;
        categories = mapDataForBalance(data?.CategoriesDetails);
    }
    if (isError) openFeedback(error.message);
    return { outcomes, balance, categories, isLoading, isError };
};
