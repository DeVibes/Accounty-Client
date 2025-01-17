import {
    DashboardIcon,
    ProfileIcon,
    TransactionsIcon,
    WalletIcon,
} from '../../utils/icons';

export class PagesEnum {
    static Wallet = new PagesEnum('/', 'Wallet', WalletIcon);
    static Dashboard = new PagesEnum('/dashboard', 'Dashboard', DashboardIcon);
    static Transactions = new PagesEnum(
        '/transactions',
        'Transactions History',
        TransactionsIcon
    );
    static MyAccount = new PagesEnum('/account', 'My Account', ProfileIcon);
    constructor(path, name, icon) {
        this.path = path;
        this.name = name;
        this.icon = icon;
    }
    toString() {
        return this.name;
    }
}
