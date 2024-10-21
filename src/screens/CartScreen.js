// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeProductFromCart, setCart } from '../redux/slices/cartSlice';

// const CartScreen = ({ navigation }) => {
//   const [cartData, setCartData] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/carts');
//         const data = await response.json();
        
//         // Optional: Filter to show the most recent cart or a specific user's cart
//         const userCart = data[0]; // Assuming you want to show the first cart in the response
//         setCartData(userCart.products);

//         // Optionally store in Redux
//         dispatch(setCart(userCart.products));
//       } catch (error) {
//         console.error('Failed to fetch cart data:', error);
//       }
//     };

//     fetchCartData();
//   }, [dispatch]);

//   const handleRemoveFromCart = (productId) => {
//     dispatch(removeProductFromCart(productId));
//   };

//   const renderCartItem = ({ item }) => (
//     <View style={styles.cartItem}>
//       {/* <Image source={{ uri: item.image }} style={styles.cartItemImage} /> */}
//       <View style={styles.cartItemDetails}>
//         <Text style={styles.cartItemTitle}>{item.title}</Text>
//         <Text style={styles.cartItemPrice}>${item.price}</Text>
//         <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
//         <Button title="Remove" onPress={() => handleRemoveFromCart(item.productId)} />
//       </View>
//     </View>
//   );

//   const calculateTotal = () => {
//     return cartData.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   if (cartData.length === 0) {
//     return (
//       <View style={styles.emptyContainer}>
//         <Text style={styles.emptyText}>Your cart is empty.</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={cartData}
//         keyExtractor={(item) => item.productId.toString()}
//         renderItem={renderCartItem}
//       />
//       <View style={styles.totalContainer}>
//         <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
//         <Button title="Proceed to Checkout" onPress={() => navigation.navigate('CheckoutScreen')} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   cartItem: {
//     flexDirection: 'row',
//     marginBottom: 16,
//     padding: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//   },
//   cartItemImage: {
//     width: 100,
//     height: 100,
//     resizeMode: 'cover',
//     marginRight: 16,
//   },
//   cartItemDetails: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   cartItemTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   cartItemPrice: {
//     fontSize: 16,
//     color: '#888',
//     marginVertical: 4,
//   },
//   cartItemQuantity: {
//     fontSize: 16,
//     color: '#888',
//   },
//   totalContainer: {
//     marginTop: 16,
//     padding: 16,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   totalText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'right',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#888',
//   },
// });

// export default CartScreen;



import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart, setCart } from '../redux/slices/cartSlice';

const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/carts');
        const data = await response.json();
        
        
        const userCart = data[0]; 
        dispatch(setCart(userCart.products));
      } catch (error) {
        console.error('Failed to fetch cart data:', error);
      }
    };

    fetchCartData();
  }, [dispatch]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      {/* <Image source={{ uri: item.image }} style={styles.cartItemImage} /> */}
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemTitle}>{item.title}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
        <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
        <Button title="Remove" onPress={() => handleRemoveFromCart(item.productId)} />
      </View>
    </View>
  );

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        <Button title="Proceed to Checkout" onPress={() => navigation.navigate('CheckoutScreen')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  cartItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 16,
  },
  cartItemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  cartItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#888',
    marginVertical: 4,
  },
  cartItemQuantity: {
    fontSize: 16,
    color: '#888',
  },
  totalContainer: {
    marginTop: 16,
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
});

export default CartScreen;
