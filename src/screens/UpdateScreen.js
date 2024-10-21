// // import { View, Text, Button, StyleSheet } from 'react-native'
// // import React, { useState } from 'react'

// // const UpdateScreen = () => {

// //  const[counter,setCounter]=useState(0);

// //   return (
// //     <View style={styles.container}>
// //     <Button
// //       title="Increase"
// //       onPress={() => {
// //         setCounter(counter + 1);
// //       }}
// //     />
// //     <View style={styles.spacer} />
// //     <Button
// //       title="Decrease"
// //       onPress={() => {
// //         setCounter(counter - 1);
// //       }}
// //     />
// //     <View style={styles.spacer} />
// //     <Text style={styles.counterText}>Counter: {counter}</Text>
// //   </View>
  
// //   )
// // }

// // export default UpdateScreen

// // const styles =StyleSheet.create({
// // container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   spacer: {
// //     height: 20,
// //   },
// //   counterText: {
// //     fontSize: 24,
// //     marginTop: 20,
// //   },
// // })

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { View, Text, StyleSheet, Image, Button } from 'react-native';
// import { addToWishlist, removeFromWishlist } from '../redux/reducer/app';
// import LinearGradient from 'react-native-linear-gradient';

// const UpdateScreen = ({ route }) => {
//   const dispatch = useDispatch();
//   const{ wishlist} = useSelector(state => state.app); 
//   //  {state => state.app.wishlist.wishlist};
//   const { product } = route.params || {};

//   const isInWishlist =product&& wishlist.some(item => item.id === product.id) ;

//   const handleAddToWishlist = () => {
//     dispatch(addToWishlist(product));
//   };

//   const handleRemoveFromWishlist = () => {
//     dispatch(removeFromWishlist(product));
//   };

//   if (!product) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>No product details available.</Text>
//       </View>
//     );
//   }

//   const imageUrl = product.thumbnail || 'https://via.placeholder.com/200';

//   return (
//     <LinearGradient
//     colors={['#4c669f', '#3b5998', '#192f6a']}
//      style={styles.gradientContainer}>
//     <View style={styles.itemContainer}>
//       <Image source={{ uri: imageUrl }} style={styles.image} />
//       <Text style={styles.title}>{product.title}</Text>
//       <Text style={styles.description}>{product.description}</Text>
//       <Text style={styles.price}>Price: ${product.price}</Text>
//       {isInWishlist ? (
//         <Button title="Remove from Wishlist" onPress={handleRemoveFromWishlist} />
//       ) : (
//         <Button title="Add to Wishlist" onPress={handleAddToWishlist} />
//       )}
//     </View>
//     </LinearGradient>
//   );
// };

// export default UpdateScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   description: {
//     marginTop: 10,
//     fontSize: 16,
//   },
//   price: {
//     marginTop: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//   },
//   gradientContainer: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     // borderRadius: 5,
//     backgroundColor: 'transparent',
//   },
//   itemContainer: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 5,
//   },
// });

