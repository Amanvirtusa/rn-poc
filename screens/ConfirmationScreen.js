import {Button, Text, View} from "react-native";
import * as React from "react";
import {observer} from "mobx-react-lite";
import { paymentStore } from '../stores';

const ConfirmationScreen = observer(({ navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Confirmation</Text>
            <Text>Successful payment</Text>
            <Text>Total price: {paymentStore.displayTotalPrice}</Text>
            <Button
                title="Back"
                onPress={() => navigation.navigate('CKO')}
            />
        </View>
    )
})

export default ConfirmationScreen