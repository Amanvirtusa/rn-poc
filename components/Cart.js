import {StyleSheet, Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
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
            borderRadius: ,
        }
    })

    const pickerItem = [0, 1, 2, 3, 4, 5, 10, 25, 100].map(amount => <Picker.Item label={amount} value={amount}
                                                                                  key={amount}/>)

    return <>
        <Text style={{fontSize: 20, color: 'purple'}}>Cart</Text>

        <Text>Random product</Text>
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={{paddingTop: 17}}>quantity</Text>
            </View>
            <View style={styles.item}>
                <Picker
                    style={styles.inputFieldStyle}
                    selectedValue={randomProduct_0.quantity}
                    onValueChange={(itemValue, itemIndex) => {
                        setRandomProduct_0({...randomProduct_0, quantity: itemValue})
                        paymentStore.setTotalPrice(
                            (itemValue * randomProduct_0.price.value) +
                            (randomProduct_1.quantity * randomProduct_1.price.value) +
                            (randomProduct_2.quantity * randomProduct_2.price.value))
                    }}
                >
                    {pickerItem}
                </Picker>
            </View>
            <View style={styles.item}>
                <Text
                    style={{paddingTop: 17}}>price {randomProduct_0.price.value}{randomProduct_0.price.currency}</Text>
            </View>
        </View>


        <Text>Another random product</Text>
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={{paddingTop: 17}}>quantity</Text>
            </View>
            <View style={styles.item}>
                <Picker
                    style={styles.inputFieldStyle}
                    selectedValue={randomProduct_1.quantity}
                    onValueChange={(itemValue, itemIndex) => {
                        setRandomProduct_1({...randomProduct_1, quantity: itemValue})
                        paymentStore.setTotalPrice(
                            (randomProduct_0.quantity * randomProduct_0.price.value) +
                            (itemValue * randomProduct_1.price.value) +
                            (randomProduct_2.quantity * randomProduct_2.price.value))
                    }
                    }>
                    {pickerItem}
                </Picker>
            </View>
            <View style={styles.item}>
                <Text
                    style={{paddingTop: 17}}>price {randomProduct_1.price.value}{randomProduct_1.price.currency}</Text>
            </View>
        </View>

        <Text>Yet another random product</Text>
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={{paddingTop: 17}}>quantity</Text>
            </View>
            <View style={styles.item}>
                <Picker
                    style={styles.inputFieldStyle}
                    selectedValue={randomProduct_2.quantity}
                    onValueChange={(itemValue, itemIndex) => {
                        setRandomProduct_2({...randomProduct_2, quantity: itemValue})
                        paymentStore.setTotalPrice(
                            (randomProduct_0.quantity * randomProduct_0.price.value) +
                            (randomProduct_1.quantity * randomProduct_1.price.value) +
                            (itemValue * randomProduct_2.price.value))
                    }
                    }>
                    {pickerItem}
                </Picker>
            </View>
            <View style={styles.item}>
                <Text
                    style={{paddingTop: 17}}>price {randomProduct_2.price.value}{randomProduct_2.price.currency}</Text>
            </View>
        </View>
    </>
}

export default observer(Cart)