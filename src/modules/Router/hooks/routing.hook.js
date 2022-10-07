import { useLocation, useNavigate } from "react-router-dom";
import { PagesDataMap, PagesEnum } from '../pages';

export const useRouting = () => {
    const { pathname } = useLocation();
    const pageTitle = PagesDataMap.get(pathname).name;
    const navigate = useNavigate();
    const api = {
        goBack: () => navigate(-1)
    }
    const isBackBtnShown = pageTitle !== PagesEnum.Dashboard.toString(); 
    return { pageTitle, isBackBtnShown, ...api }
}