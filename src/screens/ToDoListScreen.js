
// import React from 'react';
// import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { useSelector } from 'react-redux';

// const ToDoListScreen = () => {
//   const wishlist = useSelector(state => state.app.wishlist);

//   if (wishlist.length === 0) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.emptyText}>Your wishlist is empty.</Text>
//       </View>
//     );
//   }

//   // const imageUrl = product.thumbnail || 'https://via.placeholder.com/200'; 
//   return (
//     <LinearGradient
//     colors={['#4c669f', '#3b5998', '#192f6a']}
//      style={styles.gradientContainer}>
//     <View style={styles.container}>
//       <FlatList
//         data={wishlist}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => {
         
//          return(
//           <View style={styles.itemContainer}>                 
//             <Text style={styles.title}>{item.title}</Text>
//             {/* <Image source={{ uri: imageUrl }} style={styles.image} />   */}
//             <Text style={styles.description}>{item.description}</Text>
//             <Text style={styles.price}>Price: ${item.price}</Text>
//           </View>
//          );
//         }}
//       />
//     </View>
//     </LinearGradient>
//   );
// };

// export default ToDoListScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   emptyText: {
//     fontSize: 18,
//     color: 'gray',
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   itemContainer: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   description: {
//     marginTop: 5,
//     fontSize: 16,
//   },
//   price: {
//     marginTop: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   gradientContainer:{
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
