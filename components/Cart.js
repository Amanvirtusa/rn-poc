import {StyleSheet, Text, View} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import * as React from "react";
import {useState,useEffect} from "react";
import {observer} from "mobx-react-lite";
import { checkArray } from "../utils/common";

const Cart = ({paymentStore,cartStore}) => {
    const [productList, setproductList] = useState(cartStore.displayItems);
    const [productQuantity, setproductQuantity] = useState(cartStore.displayQuantity);

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

    useEffect(() => {
        let updatedTotal= cartStore.setcountTotal(productList);
        paymentStore.setTotalPrice(updatedTotal);
        cartStore.setCartItems(checkArray(productList));
      }, [productList]);


      const list = () => {
        return productList.map(element => {
          return (
            <View key={element.key} style={{margin: 10}}>
              <Text>{element.value}</Text>
              <Text style={{paddingTop: 5}}>quantity</Text>
              <SelectList 
                    setSelected={(newQuantity) => {
                        setproductList(productList =>
                        productList.map(item => {
                            if (item.key !== element.key) return item;
                            return { ...item, quantity:newQuantity,total: newQuantity * element.price};
                        })
                        );
                        
                    }
                    }
            data={productQuantity}
            save="value"
        />
            <Text style={{paddingTop: 10, paddingBottom: 20}}>Price {element.total} </Text>
            </View>
          );
        });
      };
    

    return <>
        <Text style={{fontSize: 20, color: 'purple'}}>Cart</Text>
        {list()} 
    </>
}

export default observer(Cart)