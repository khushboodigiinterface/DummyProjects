import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ToDoListScreen from '../screens/ToDoListScreen';
import FlatListScreen from '../screens/FlatListScreen';
import ColorScreen from '../screens/ColorScreen';
import ColorCounter from '../Components/ColorCounter';
import UpdateScreen from '../screens/UpdateScreen';
import SplashScreen from '../screens/SplashScreen';
import ProductDetailScreen from '../screens/ProductDetail';
import TabNavigation from './TabNavigation';
import SearchScreen from '../screens/SearchScreen';
import AddressScreen from '../screens/AddressScreen';
import ProductListScreen from '../screens/ProductListScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const StackNavigation = () => {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name ="TabNavigation" component={TabNavigation}/>
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
       <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
       <Stack.Screen name="CartScreen" component={CartScreen}/>
       <Stack.Screen name ="ProductDetailScreen" component={ProductDetailScreen}/>
       <Stack.Screen name ="CheckoutScreen" component={CheckoutScreen}/>

       {/* <Stack.Screen name="FlatListScreen" component={FlatListScreen}/>
       <Stack.Screen name ="ColorScreen" component={ColorScreen}/>
       <Stack.Screen name ="ColorCounter" component={ColorCounter}/>
       <Stack.Screen name ="UpdateScreen" component={UpdateScreen}/>
       <Stack.Screen name ="SplashScreen" component={SplashScreen}/>
      
       <Stack.Screen name ="TabNavigation" component={TabNavigation}/>
       <Stack.Screen name ="SearchScreen" component={SearchScreen}/>
       <Stack.Screen name ="AddressScreen" component={AddressScreen}/> */}
       

    </Stack.Navigator>
  )
}

export default StackNavigation