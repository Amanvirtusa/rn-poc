import {StyleSheet, Text, TextInput} from "react-native";
import {Picker} from "@react-native-picker/picker";
import * as React from "react";
import {useState} from "react";

export function UserDetails() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedCreditCard, setSelectedCreditCard] = useState('');

    const inputFieldStyle = {
        height: 40,
        padding: 5,
        margin: 5,
        borderWidth: 2,
        borderColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRadius: 5
    };

    return <>
        <Text style={{fontSize: 20, color: 'purple'}}>User details</Text>
        <TextInput
            style={inputFieldStyle}
            placeholder="Name"
            onChangeText={newName => setName(newName)}
            defaultValue={name}
        />
        <TextInput
            style={inputFieldStyle}
            placeholder="Email"
            onChangeText={newEmail => setEmail(newEmail)}
            defaultValue={email}
        />
        <TextInput
            style={inputFieldStyle}
            placeholder="Phone"
            onChangeText={newPhone => setPhone(newPhone)}
            defaultValue={phone}
        />
        <Text>Saved paying methods</Text>
        <Picker
            style={inputFieldStyle}
            selectedValue={selectedCreditCard}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedCreditCard(itemValue)
            }>
            <Picker.Item label="AMEX" value="amex"/>
            <Picker.Item label="VISA" value="visa"/>
            <Picker.Item label="MASTERCARD" value="mastercard"/>
            <Picker.Item label="PAYPAL" value="paypal"/>
        </Picker>
    </>
}