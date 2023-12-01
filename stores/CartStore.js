import {makeAutoObservable,toJS} from "mobx"

export class CartStore {
    priceTotal = 429;
    itemTotal = 0;
    cartItems=[];

     quantityData = [
        {key:'0',value:'0'},
        {key:'1',value:'1'},
        {key:'2',value:'2'},
        {key:'3',value:'3'},
        {key:'4',value:'4'},
        {key:'5',value:'5'},
        {key:'10',value:'10'},
        {key:'25',value:'25'},
        {key:'100',value:'100'},
      ];
      products = [
        {key:'0',value:'Product 1',price:'44',quantity:0,total:0},
        {key:'1',value:'Product 2',price:'22',quantity:0,total:0},
        {key:'2',value:'Product 3',price:'11',quantity:0,total:0}
      ];
    constructor() {
        makeAutoObservable(this)
    }

    get displayQuantity() {
        return toJS(this.quantityData)
    }


    get displayItems() {
        return toJS(this.products)
    }

    get singleItemPrice() {
   
        return toJS(this.products)
    }
     setcountTotal (data){
       return data.reduce((a,v) =>  a = a + v.total , 0 )
     } 

    setTotalPrice(newPriceTotal) {
        this.priceTotal = newPriceTotal
    }

    setCartItems(items) {
      this.cartItems = items
  }

    get CartItems() {
      return toJS(this.cartItems)
  }

}
