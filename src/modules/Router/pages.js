import { DashboardIcon, TransactionsIcon, WalletIcon } from "../../utils/icons";

export class PagesEnum {
    static Dashboard = new PagesEnum("/", "Dashboard", DashboardIcon);
    static Wallet = new PagesEnum("/wallet", "Wallet", WalletIcon);
    static Transactions = new PagesEnum("/transactions", "Transactions History", TransactionsIcon);
    constructor(path, name, icon) {
        this.path = path
        this.name = name;
        this.icon = icon;
    }
    toString() {
        return this.name;
    }
};