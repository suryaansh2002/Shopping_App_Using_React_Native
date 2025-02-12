import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

export default function CartScreen() {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>{" "}
        </Text>
        <Button color={Colors.accent} title="Order Now" />
      </View>
      <View>
        <Text>CART ITEMS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
        margin:20
    },
    summary:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
        padding:10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
    },
    summaryText:{
        fontWeight:'bold',
        fontSize:20
    },
    amount:{
        color:Colors.accent
    }
});
