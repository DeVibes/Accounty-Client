import { MdDashboard } from 'react-icons/md';
import { GiWallet } from 'react-icons/gi';

class PagesEnum {
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
        name: PagesEnum.Dashboard.name,
        value: 0,
        path: "/",
        icon: MdDashboard
    },
    {
        name: PagesEnum.Wallet.name,
        value: 1,
        path: "/wallet",
        icon: GiWallet
    }
];