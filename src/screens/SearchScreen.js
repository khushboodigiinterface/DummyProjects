// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   Button,
//   ActivityIndicator,
//   TouchableOpacity,
// } from 'react-native';
// import axios from 'axios';

// const SearchScreen = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     if (!query) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(
//         `https://dummyjson.com/products/search`,
//         {
//           params: {q: query},
//         },
//       );
//       setResults(response?.data?.products);
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
   
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="Search for products..."
//           value={query}
//           onChangeText={setQuery}
//         />
//         <Button title="Search" onPress={handleSearch} />

//         {loading && <ActivityIndicator size="large" color="#0000ff" />}

//         {error && <Text style={styles.errorText}>{error}</Text>}

//         <FlatList
//           data={results}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({item}) => (
//             <View style={styles.itemContainer}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//               <Text style={styles.price}>Price: ${item.price}</Text>
//               <Text style={styles.category}>Category: {item.category}</Text>
             
//             </View>
//           )}
//         />
//       </View>
  
//   );
// };

// const styles = StyleSheet.create({
  
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 16,
//     color: 'gray',
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   category: {
//     fontSize: 16,
//     color: 'blue',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//     marginVertical: 10,
//   },
// });

// export default SearchScreen;
