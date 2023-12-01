import {StyleSheet, Text, View} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import * as React from "react";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import { checkBelowZero } from "../utils/common";

const Coupon = ({paymentStore}) => {
    const [coupon_value, setCouponValue] = useState(0);
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
        {key:'5',value:'5'},
        {key:'10',value:'10'},
        {key:'25',value:'25'},
        {key:'100',value:'100'},
      ];
    return (
        <>
           <Text style={{fontSize: 20, color: 'purple'}}>Coupon</Text>
        <SelectList 
        testID={'selectOption'} 
            setSelected={(coupon) => {
                if(checkBelowZero(paymentStore.calculateTotalPrice)){
                    setCouponValue(coupon)
                    paymentStore.setCouponValue(coupon)
                }
                else{
                    return;
                }
               
            }}
            data={quantityData}
            save="value"
        />
        </>
    )
}

export default observer(Coupon)
