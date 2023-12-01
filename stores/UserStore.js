import {makeAutoObservable} from "mobx"

export class UserStore {
    priceTotal = 0;
    showTotal = 0;

    constructor() {
        makeAutoObservable(this)
    }

  

}
