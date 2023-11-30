import {StyleSheet, Text, View} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import * as React from "react";
import {useState} from "react";
import {observer} from "mobx-react-lite";

const Cart = ({paymentStore}) => {
    const [randomProduct_0, setRandomProduct_0] = useState({id: '0', quantity: 5, price: {value: 44, currency: "$"}});
    const [randomProduct_1, setRandomProduct_1] = useState({id: '1', quantity: 2, price: {value: 92, currency: "$"}});
    const [randomProduct_2, setRandomProduct_2] = useState({id: '2', quantity: 1, price: {value: 25, currency: "$"}});

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start'
        },
        item: {
            width: 'auto',
        },
        inputFieldStyle: {
            height: 40,
            padding: 5,
            margin: 5,
            borderWidth: 2,
            borderColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderRadius: 5,
        }
    })

    const quantityData = [
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

    return <>
        <Text style={{fontSize: 20, color: 'purple'}}>Cart</Text>

        <Text>Random product</Text>
        <Text style={{paddingTop: 5}}>quantity</Text>
        <SelectList 
            setSelected={(newQuantity) => {
                setRandomProduct_0({...randomProduct_0, quantity: newQuantity})
                paymentStore.setTotalPrice(
                    (newQuantity * randomProduct_0.price.value) +
                    (randomProduct_1.quantity * randomProduct_1.price.value) +
                    (randomProduct_2.quantity * randomProduct_2.price.value))
            }}
            data={quantityData}
            save="value"
        />
        <Text style={{paddingTop: 10, paddingBottom: 20}}>price {randomProduct_0.price.value}{randomProduct_0.price.currency} </Text>


        <Text>Another random product</Text>
        <Text style={{paddingTop: 5}}>quantity</Text>
        <SelectList 
            setSelected={(newQuantity) => {
                setRandomProduct_1({...randomProduct_1, quantity: newQuantity})
                paymentStore.setTotalPrice(
                    (randomProduct_0.quantity * randomProduct_0.price.value) +
                    (newQuantity * randomProduct_1.price.value) +
                    (randomProduct_2.quantity * randomProduct_2.price.value))
            }}
            data={quantityData}
            save="value"
        />
        <Text style={{paddingTop: 10, paddingBottom: 20}}>price {randomProduct_1.price.value}{randomProduct_1.price.currency}</Text>

        <Text>Yet another random product</Text>
        <Text style={{paddingTop: 5}}>quantity</Text>
        <SelectList 
            setSelected={(newQuantity) => {
                setRandomProduct_2({...randomProduct_2, quantity: newQuantity})
                paymentStore.setTotalPrice(
                    (randomProduct_0.quantity * randomProduct_0.price.value) +
                    (randomProduct_1.quantity * randomProduct_1.price.value) +
                    (newQuantity * randomProduct_2.price.value))
            }}
            data={quantityData}
            save="value"
        />
        <Text style={{paddingTop: 5}}>price {randomProduct_2.price.value}{randomProduct_2.price.currency}</Text>
    </>
}

export default observer(Cart)