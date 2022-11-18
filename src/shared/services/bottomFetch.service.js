export const fetchOnBottom = (elementRef, paginationAPI) => {
    const { hasNextPage, fetchNextPage, isFetchingNextPage } = paginationAPI;
    return () => {
        if (!elementRef.current)
            return;     
        const { scrollTop, scrollHeight, clientHeight } = elementRef.current;
        if (hasNextPage && !isFetchingNextPage && scrollTop + clientHeight === scrollHeight)
            fetchNextPage();
    };
}