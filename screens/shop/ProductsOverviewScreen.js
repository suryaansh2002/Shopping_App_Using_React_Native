import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProductItem from '../../components/shop/ProductItem';
import  HeaderButton from '../../components/UI/HeaderButton';
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = props => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {props.navigation.navigate('ProductDetail',{productId:itemData.item.id,productTitle:itemData.item.title})}}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item))
          }}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = navData=> {
  return{
    headerTitle: 'All Products',
    headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton} >
      <Item title='Cart' iconName='md-cart' onPress={()=>{
        navData.navigation.navigate('Cart');
      }}/>
    </HeaderButtons>
  
  }
};

export default ProductsOverviewScreen;
