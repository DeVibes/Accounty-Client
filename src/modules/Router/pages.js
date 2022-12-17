import { DashboardIcon, ProfileIcon, TransactionsIcon, WalletIcon } from "../../utils/icons";

export class PagesEnum {
    static Dashboard = new PagesEnum("/", "Dashboard", DashboardIcon);
    static Wallet = new PagesEnum("/wallet", "Wallet", WalletIcon);
    static Transactions = new PagesEnum("/transactions", "Transactions History", TransactionsIcon);
    static Profile = new PagesEnum("/profile", "My Profile", ProfileIcon);
    constructor(path, name, icon) {
        this.path = path
        this.name = name;
        this.icon = icon;
    }
    toString() {
        return this.name;
    }
};