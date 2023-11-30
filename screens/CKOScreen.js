import {StyleSheet, View, SafeAreaView, ScrollView} from "react-native";
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
        },
        container: {
            flex: 1,
        },
        scrollView: {
            backgroundColor: 'rgba(122, 122, 255, 0.15)',
            marginHorizontal: 20,
        }
    })
return (
    <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <UserDetails/>
                <View style={styles.lineStyle}/>
                <Cart paymentStore={paymentStore}/>
                <View style={styles.lineStyle}/>
                <PaymentDetails paymentStore={paymentStore}/>
                <View style={styles.lineStyle}/>
                <CheckoutButton navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    );
}