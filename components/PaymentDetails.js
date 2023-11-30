import {Text} from "react-native";
import * as React from "react";
import {observer} from "mobx-react-lite";

const PaymentDetails = ({paymentStore}) => {
    return (
        <>
            <Text style={{fontSize: 20, color: 'purple'}}>Payment details</Text>
            <Text>Total: {paymentStore.displayTotalPrice}</Text>
        </>
    )
}

export default observer(PaymentDetails)
