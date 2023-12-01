import {makeAutoObservable} from "mobx"

export class PaymentStore {
    priceTotal = 0;
    couponValue = 0;

    constructor() {
        makeAutoObservable(this)
    }

    get displayTotalPrice() {
        return `${this.priceTotal}$`
    }

    get calculateTotalPrice() {
        return `${this.priceTotal}`
    }


    get displayCoupon() {
        return `${this.couponValue}`
    }

    setTotalPrice(newPriceTotal) {
        this.priceTotal = newPriceTotal
    }

    setCouponValue(newPriceTotal) {
        this.couponValue = newPriceTotal
    }

}
