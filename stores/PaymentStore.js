import {makeAutoObservable} from "mobx"

export class PaymentStore {
    priceTotal = 429

    constructor() {
        makeAutoObservable(this)
    }

    get displayTotalPrice() {
        return `${this.priceTotal}$`
    }

    setTotalPrice(newPriceTotal) {
        this.priceTotal = newPriceTotal
    }

}
