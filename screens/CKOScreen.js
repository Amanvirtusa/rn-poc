import {StyleSheet, View} from "react-native";
import * as React from "react";
import {Cart, CheckoutButton, PaymentDetails, UserDetails} from "../components";
import {paymentStore} from "../stores";

export function CKOScreen({navigation}) {

    const styles = StyleSheet.create({
        lineStyle: {
            flex: 1,
            justifyContent: 'space-between',
            height: 1,
            borderWidth: 2,
            borderColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            margin: 10,
        }
    });
    return (
        <View style={{padding: 20}}>
            <UserDetails/>
            <View style={styles.lineStyle}/>
            <Cart paymentStore={paymentStore}/>
            <View style={styles.lineStyle}/>
            <PaymentDetails paymentStore={paymentStore}/>
            <View style={styles.lineStyle}/>
            <CheckoutButton navigation={navigation}/>
        </View>
    );
}