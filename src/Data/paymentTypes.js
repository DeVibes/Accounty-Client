export const PaymentTypesArray = [];
export const PaymentTypesMap = new Map();

class PaymentType {
    static 8421 = new PaymentType(1, "Isracard - 8421");
    static 3897 = new PaymentType(2, "Max - 3897");
    static 8418 = new PaymentType(3, "Cal - 8418");
    static SharedBank = new PaymentType(4, "Shared Bank");
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

for (const prop in PaymentType) {
    const paymentType = PaymentType[prop];
    PaymentTypesMap.set(paymentType.id, paymentType);
    PaymentTypesArray.push(paymentType);
}