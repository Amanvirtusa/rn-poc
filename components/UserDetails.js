import {StyleSheet, Text, TextInput, View} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import * as React from "react";
import {useState,useEffect} from "react";

export function UserDetails() {

    //Load data from store here
    const [value, setValue] = useState({
        name: 'bill',
        email: 'who@there.com',
        phone: 12121212,
      })

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
            onChangeText={newName => setValue(newName)}
            defaultValue={value.name}
        />
        <TextInput
            style={inputFieldStyle}
            placeholder="Email"
            onChangeText={newEmail => setValue(newEmail)}
            defaultValue={value.email}
        />
        <TextInput
            style={inputFieldStyle}
            placeholder="Phone"
            onChangeText={newPhone => setValue(newPhone)}
            defaultValue={value.phone}
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