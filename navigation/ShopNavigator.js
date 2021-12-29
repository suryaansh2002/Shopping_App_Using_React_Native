import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailsScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail:ProductDetailsScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(ProductsNavigator);
