import {StyleSheet, Text, TextInput, View} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import * as React from "react";
import {useState} from "react";

export function UserDetails() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedCreditCard, setSelectedCreditCard] = useState('amex');

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
        <SelectList 
            setSelected={(val) => setSelectedCreditCard(val)} 
            data={[
                {key:'amex', value:'amex'},
                {key:'visa', value:'visa'},
                {key:'mastercard', value:'mastercard'},
                {key:'paypal', value:'paypal'},
            ]}
            save="value"
            defaultOption={{ key:'amex', value:'amex' }}
        />
    </>
}