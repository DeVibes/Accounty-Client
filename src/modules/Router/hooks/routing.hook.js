import { useLocation, useNavigate } from "react-router-dom";
import { PagesEnum } from '../pages';

export const useRouting = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const pageData = getPageDataByPath(pathname);
    const isBackBtnShown = pageData.name !== PagesEnum.Dashboard.name;
    const isWalletPage = pageData.name === PagesEnum.Wallet.name;
    const isTransactionsPage = pageData.name === PagesEnum.Transactions.name;
    const api = {
        goBack: () => navigate(-1),
        redirectToMain: () => navigate("/Wallet"),
        redirectToLogin: () => navigate("/login")
    }
    return { pageData, isBackBtnShown, isWalletPage, isTransactionsPage, ...api }
}

const getPageDataByPath = pathName => {
    switch (pathName) {
        case PagesEnum.Dashboard.path:
            return PagesEnum.Dashboard;
        case PagesEnum.Wallet.path:
            return PagesEnum.Wallet;
        case PagesEnum.Transactions.path:
            return PagesEnum.Transactions;
        default:
            return "";
    }
};