import React from "react";
import { ScrollView, View, Text,Button,Image,StyleSheet } from "react-native";
import { useSelector,useDispatch } from "react-redux";

// import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import * as cartActions from '../../store/actions/cart';

const ProductDetailsScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  console.log(productId);
  console.log(selectedProduct);
  return (
    <ScrollView>
      <Image source={{uri:selectedProduct.imageUrl}} style={styles.image}/>
      <View style={styles.actions}>

      <Button title="Add To Cart" color={Colors.primary} onPress={()=>
            dispatch(cartActions.addToCart(selectedProduct))

      }/>
      </View>
      <Text style={styles.price}>${selectedProduct.price}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>

    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle")
  };
};

const styles = StyleSheet.create({
actions:{
  alignItems:"center",
  marginVertical:15
},
image:{
  width:'100%',
  height:300
},
price:{
  textAlign:"center",
  fontSize:20,
  color:"#888",
  marginVertical:20
},


description:{
  textAlign:"center",
  fontSize:18,
  color:"#888",
  marginVertical:0,
  marginHorizontal:20
},

});



export default ProductDetailsScreen;
