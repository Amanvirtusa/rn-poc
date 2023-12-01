import {PaymentStore} from "./PaymentStore";
import { CartStore } from "./CartStore";
import { UserStore } from "./UserStore";

const paymentStore = new PaymentStore()
const cartStore = new CartStore()
const userStore = new UserStore()

export {paymentStore,cartStore,userStore}