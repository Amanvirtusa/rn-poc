import {Button} from "react-native";
import * as React from "react";

export function CheckoutButton({navigation}) {
    return <Button
        title="Checkout"
        onPress={() => navigation.navigate('Confirmation')}
        color="#5d89f1"
    />
}