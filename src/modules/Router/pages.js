import { DashboardIcon, WalletIcon } from "../../utils/icons";

export const PagesDataMap = new Map();
export class PagesEnum {
    static Dashboard = new PagesEnum("Dashboard");
    static Wallet = new PagesEnum("Wallet");
    constructor(name) {
        this.name = name;
    }
    toString() {
        return this.name;
    }
}
export const AppPages = [
    {
        name: PagesEnum.Dashboard.toString(),
        value: 0,
        path: "/",
        icon: DashboardIcon
    },
    {
        name: PagesEnum.Wallet.toString(),
        value: 1,
        path: "/wallet",
        icon: WalletIcon
    }
];

AppPages.forEach(pageData => {
    PagesDataMap.set(pageData.path, pageData);
});