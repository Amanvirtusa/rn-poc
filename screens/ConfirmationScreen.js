import {Button, Text, View,FlatList,StyleSheet} from "react-native";
import * as React from "react";
import { paymentStore,cartStore } from '../stores';
import { substractValue } from "../utils/common";


  export function ConfirmationScreen({navigation}) {

    const Item = ({ item }) => (
        <View style={styles.item}>
          <Text>{item.value}</Text>
          <Text>Price: $ {item.price}</Text>
        </View>
      );

      const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        item: {
            backgroundColor: "#D3D3D3",
            color: "white",
            padding: 10,
            margin: 10,
          },
          total: {
            padding:10,
            margin:10,
        },
        title: {
            padding:10,
            textAlign:'center',
          fontSize: 20,
        },
      });

   return (
        <View >
              <FlatList
                data={cartStore.CartItems}
                renderItem={Item}
                keyExtractor={item => item.key}
            />
            <View style={styles.total}>
            <Text tyle={styles.title}>Total price: {substractValue(paymentStore.calculateTotalPrice,paymentStore.displayCoupon)}</Text>
            </View>
            <Button
                title="Back"
                onPress={() => navigation.navigate('CKO')}
            />
        </View>
    )
}

  
// export default ConfirmationScreen