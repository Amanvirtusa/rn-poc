import {Text} from "react-native";
import * as React from "react";
import {observer} from "mobx-react-lite";
import { substractValue } from "../utils/common";

const PaymentDetails = ({paymentStore}) => {
    return (
        <>
            <Text style={{fontSize: 20, color: 'purple'}}>Payment details</Text>
            <Text>Total: {substractValue(paymentStore.calculateTotalPrice,paymentStore.displayCoupon)}</Text>
        </>
    )
}

export default observer(PaymentDetails)
