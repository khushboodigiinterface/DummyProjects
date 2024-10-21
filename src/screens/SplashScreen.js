
// import React, { useEffect, useState } from 'react';
// import { View, FlatList, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Pressable, Image } from 'react-native';
// import { fetchProducts, generateToken } from '../api/config';
// import LinearGradient from 'react-native-linear-gradient';

// const SplashScreen = ({ navigation }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const token = await generateToken();
//         const productsData = await fetchProducts(token);
//         setProducts(productsData);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProducts();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   // const products = [
//   //   {
//   //     id: 1,
//   //     title: 'Essence Mascara Lash Princess',
//   //     description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects...',
//   //     price: 9.99,
//   //     thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
//   //   },  
//   // ];
//   return (
//     <LinearGradient
//     colors={['#4c669f', '#3b5998', '#192f6a']}
//      style={styles.gradientContainer}>
//     <View style={styles.container}>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({item, index }) => {
         
//         return (
//           <Pressable
//             style={styles.itemContainer}
//             onPress={() => navigation.navigate('UpdateScreen', { product: item })}
//           >
//           <View style={{flexDirection:'row'}}>
//             <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
//             <View style={styles.textContainer}>
//             <Text style={styles.itemText}>{item.title}</Text>
//             <Text style={styles.itemText}>Price: ${item.price}</Text>
//             </View>
//             </View>
//           </Pressable>
//        ) }}
//       />
//     </View>
//     </LinearGradient>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   itemText: {
//     fontSize: 16,
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
//   thumbnail: {
//     width: 70,
//     height: 70,
//     borderRadius: 10,
//     marginRight: 15,
//   },
//   textContainer: {
    
//   },
// });
